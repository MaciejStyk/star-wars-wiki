import { FC, Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Descriptions, Button, Spin, Typography, Divider } from "antd";
import type { DescriptionsProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import * as Components from "components";
import * as Pages from "pages";
import * as Store from "store";
import { useTheme } from "theme";
import * as Types from "types";
import * as Utils from "utils";

export const Character: FC = () => {
  const {
    spacing: { md },
    palette: { secondaryBlack },
  } = useTheme();

  const { characterId } = useParams();

  const [homePlanetId, setHomePlanetId] = useState<string>("");
  const [vehicleIds, setVehicleIds] = useState<string[]>([]);

  const character = useSelector(Store.selectCharacterById(characterId));
  const loading = useSelector(Store.selectCharactersLoading);
  const error = useSelector(Store.selectCharactersError);
  const homePlanet = useSelector(Store.selectPlanetById(homePlanetId));
  const planetLoading = useSelector(Store.selectPlanetsLoading);
  const vehicles = useSelector(Store.selectVehiclesById(vehicleIds));
  const vehiclesLoading = useSelector(Store.selectVehiclesLoading);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const descriptionItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Home planet",
      children: character?.homeworld ? (
        planetLoading.fetchPlanet ? (
          <Spin
            indicator={<LoadingOutlined style={{ color: secondaryBlack }} />}
          />
        ) : (
          <Typography.Link
            href={`${Types.PATH.PLANETS}/${homePlanetId}`}
            style={{ fontSize: md }}
          >
            {homePlanet?.name}
          </Typography.Link>
        )
      ) : (
        "---"
      ),
    },
    {
      key: "2",
      label: "Vehicles",
      children:
        character?.vehicles.length !== 0 ? (
          vehiclesLoading.fetchVehicles ? (
            <Spin
              indicator={<LoadingOutlined style={{ color: secondaryBlack }} />}
            />
          ) : (
            vehicles.map((vehicle, index) => (
              <Fragment key={vehicle.id}>
                <Typography.Link
                  href={`${Types.PATH.VEHICLES}/${vehicle.id}`}
                  style={{ fontSize: md }}
                >
                  {vehicle.name}
                </Typography.Link>
                {index !== vehicles.length - 1 && <Divider type="vertical" />}
              </Fragment>
            ))
          )
        ) : (
          "---"
        ),
    },
    {
      key: "3",
      label: "Birth year",
      children: character?.birth_year,
    },
    {
      key: "4",
      label: "Height",
      children: character?.height,
    },
    {
      key: "5",
      label: "Mass",
      children: character?.mass,
    },
    {
      key: "6",
      label: "Hair color",
      children: character?.hair_color,
    },
    {
      key: "7",
      label: "Skin color",
      children: character?.skin_color,
    },
    {
      key: "8",
      label: "Eye color",
      children: character?.eye_color,
    },
  ];

  useEffect(() => {
    if (characterId) dispatch(Store.fetchCharacter(characterId));
  }, [dispatch, characterId]);

  useEffect(() => {
    if (characterId && character?.homeworld) {
      setHomePlanetId(Utils.extractIdFrom(character.homeworld));
    }
  }, [characterId, character?.homeworld]);

  useEffect(() => {
    if (homePlanetId) {
      dispatch(Store.fetchPlanet(homePlanetId));
    }
  }, [dispatch, homePlanetId]);

  useEffect(() => {
    if (characterId && character?.vehicles) {
      setVehicleIds(
        character?.vehicles.map((vehicle) => Utils.extractIdFrom(vehicle))
      );
    }
  }, [characterId, character?.vehicles]);

  useEffect(() => {
    if (vehicleIds.length !== 0) {
      dispatch(Store.fetchVehiclesById(vehicleIds));
    }
  }, [dispatch, vehicleIds]);

  if (loading.fetchCharacter) return <Pages.Loading />;

  if (error.fetchCharacter) return <Pages.NotFound />;

  return (
    <>
      <Components.TitleRow>
        <Components.Avatar src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
        {character?.name}
      </Components.TitleRow>
      <Descriptions
        items={descriptionItems}
        column={1}
        labelStyle={{ width: "120px", fontSize: md }}
        contentStyle={{
          display: "flex",
          alignItems: "center",
          fontSize: md,
        }}
      />
      <Button
        style={{ marginTop: md }}
        size="large"
        onClick={() => navigate(`${Types.PATH.CHARACTERS}`)}
      >
        Go to characters
      </Button>
    </>
  );
};
