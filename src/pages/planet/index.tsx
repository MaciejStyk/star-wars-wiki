import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Descriptions, Button, Spin } from "antd";
import type { DescriptionsProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";
import { useTheme } from "theme";
import * as Types from "types";
import * as Utils from "utils";

export const Planet: FC = () => {
  const {
    spacing: { md },
    palette: { secondaryBlack },
  } = useTheme();

  const { planetId } = useParams();

  const [characterIds, setCharacterIds] = useState<string[]>([]);

  const planet = useSelector(Store.selectPlanetById(planetId));
  const loading = useSelector(Store.selectPlanetsLoading);
  const error = useSelector(Store.selectPlanetsError);
  const characters = useSelector(Store.selectCharactersById(characterIds));
  const charactersLoading = useSelector(Store.selectCharactersLoading);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const descriptionItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Population",
      children: planet?.population,
    },
    {
      key: "2",
      label: "Residents",
      children:
        planet?.residents.length !== 0 ? (
          charactersLoading.fetchCharacters ? (
            <Spin
              indicator={<LoadingOutlined style={{ color: secondaryBlack }} />}
            />
          ) : (
            characters.map((character) => (
              <a
                key={character.id}
                href={`${Types.PATH.CHARACTERS}/${character.id}`}
              >
                {character.name}
              </a>
            ))
          )
        ) : (
          "---"
        ),
    },
    {
      key: "3",
      label: "Rotation period",
      children: planet?.rotation_period,
    },
    {
      key: "4",
      label: "Orbital period",
      children: planet?.orbital_period,
    },
    {
      key: "5",
      label: "Diameter",
      children: planet?.diameter,
    },
    {
      key: "6",
      label: "Climate",
      children: planet?.climate,
    },
    {
      key: "7",
      label: "Gravity",
      children: planet?.gravity,
    },
    {
      key: "8",
      label: "Terrain",
      children: planet?.terrain,
    },
    {
      key: "9",
      label: "Surface water",
      children: planet?.surface_water,
    },
  ];

  useEffect(() => {
    if (planetId) dispatch(Store.fetchPlanet(planetId));
  }, [dispatch, planetId]);

  useEffect(() => {
    if (planetId && planet?.residents) {
      setCharacterIds(
        planet?.residents.map((resident) => Utils.extractIdFrom(resident))
      );
    }
  }, [planetId, planet?.residents]);

  useEffect(() => {
    if (characterIds.length !== 0) {
      dispatch(Store.fetchCharactersById(characterIds));
    }
  }, [dispatch, characterIds]);

  if (loading.fetchPlanet) return <Pages.Loading />;

  if (error.fetchPlanet) return <Pages.NotFound />;

  return (
    <Components.Wrapper>
      <Components.TitleRow>
        <Components.Avatar src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
        {planet?.name}
      </Components.TitleRow>
      <Descriptions
        items={descriptionItems}
        column={1}
        labelStyle={{ width: "150px", fontSize: md }}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: md,
        }}
      />
      <Button
        style={{ marginTop: md }}
        size="large"
        onClick={() => navigate(`${Types.PATH.PLANETS}`)}
      >
        Go to planets
      </Button>
    </Components.Wrapper>
  );
};
