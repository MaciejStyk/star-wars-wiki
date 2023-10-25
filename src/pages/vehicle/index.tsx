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

export const Vehicle: FC = () => {
  const {
    spacing: { md },
    palette: { secondaryBlack },
  } = useTheme();

  const { vehicleId } = useParams();

  const [characterIds, setCharacterIds] = useState<string[]>([]);

  const vehicle = useSelector(Store.selectVehicleById(vehicleId));
  const loading = useSelector(Store.selectVehiclesLoading);
  const error = useSelector(Store.selectVehiclesError);
  const characters = useSelector(Store.selectCharactersById(characterIds));
  const charactersLoading = useSelector(Store.selectCharactersLoading);
  const dispatch = useDispatch<Store.DispatchType>();
  const navigate = useNavigate();

  const descriptionItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Model",
      children: vehicle?.model,
    },
    {
      key: "2",
      label: "Pilots",
      children:
        vehicle?.pilots.length !== 0 ? (
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
      label: "Manufacturer",
      children: vehicle?.manufacturer,
    },
    {
      key: "4",
      label: "Cost in credits",
      children: vehicle?.cost_in_credits,
    },
    {
      key: "5",
      label: "Length",
      children: vehicle?.length,
    },
    {
      key: "6",
      label: "Max speed",
      children: vehicle?.max_atmosphering_speed,
    },
    {
      key: "7",
      label: "Crew",
      children: vehicle?.crew,
    },
    {
      key: "8",
      label: "Passengers",
      children: vehicle?.passengers,
    },
    {
      key: "9",
      label: "Cargo capacity",
      children: vehicle?.cargo_capacity,
    },
    {
      key: "10",
      label: "Consumables",
      children: vehicle?.consumables,
    },
    {
      key: "11",
      label: "Vehicle class",
      children: vehicle?.vehicle_class,
    },
  ];

  useEffect(() => {
    if (vehicleId) dispatch(Store.fetchVehicle(vehicleId));
  }, [dispatch, vehicleId]);

  useEffect(() => {
    if (vehicleId && vehicle?.pilots) {
      setCharacterIds(
        vehicle?.pilots.map((pilot) => Utils.extractIdFrom(pilot))
      );
    }
  }, [vehicleId, vehicle?.pilots]);

  useEffect(() => {
    if (characterIds.length !== 0) {
      dispatch(Store.fetchCharactersById(characterIds));
    }
  }, [dispatch, characterIds]);

  if (loading.fetchVehicle) return <Pages.Loading />;

  if (error.fetchVehicle) return <Pages.NotFound />;

  return (
    <Components.Wrapper>
      <Components.TitleRow>
        <Components.Avatar src="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
        {vehicle?.name}
      </Components.TitleRow>
      <Descriptions
        items={descriptionItems}
        column={1}
        labelStyle={{ width: "140px", fontSize: md }}
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
        onClick={() => navigate(`${Types.PATH.VEHICLES}`)}
      >
        Go to vehicles
      </Button>
    </Components.Wrapper>
  );
};
