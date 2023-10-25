import { createSelector, Selector } from "reselect";

import * as Types from "types";

export const selectVehicles: Selector<Types.AppState, Types.IVehicle[]> = ({
  vehicles,
}) => vehicles.data;

export const selectVehicleById = (id?: string) =>
  createSelector([selectVehicles], (vehicles) =>
    vehicles.find((vehicle) => vehicle?.id === id)
  );

export const selectVehiclesById = (ids: string[]) =>
  createSelector(selectVehicles, (vehicles) =>
    vehicles.filter((vehicle) => ids.includes(vehicle.id))
  );

export const selectVehiclesLoading: Selector<
  Types.AppState,
  Types.IVehiclesLoading
> = ({ vehicles }) => vehicles.loading;

export const selectVehiclesError: Selector<
  Types.AppState,
  Types.IVehiclesError
> = ({ vehicles }) => vehicles.error;
