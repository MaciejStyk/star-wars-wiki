import { createReducer } from "@reduxjs/toolkit";

import * as Types from "types";
import * as Utils from "utils";

import { fetchVehicles, fetchVehicle } from "./actions";

const initialState: Types.IVehiclesReducer = {
  data: [],
  loading: {},
  error: {},
};

export const vehiclesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchVehicles.pending, (state, action) => {
      state.error.fetchVehicles = undefined;
      state.loading.fetchVehicles = true;
    })
    .addCase(fetchVehicles.fulfilled, (state, action) => {
      state.error.fetchVehicles = undefined;
      state.loading.fetchVehicles = false;
      state.data = action.payload.map((vehicle: Types.IVehicle) => ({
        ...vehicle,
        id: Utils.extractIdFrom(vehicle.url),
      }));
    })
    .addCase(fetchVehicles.rejected, (state, action) => {
      state.error.fetchVehicles = action.payload;
      state.loading.fetchVehicles = false;
    })
    .addCase(fetchVehicle.pending, (state, action) => {
      state.error.fetchVehicle = undefined;
      state.loading.fetchVehicle = true;
    })
    .addCase(fetchVehicle.fulfilled, (state, action) => {
      const fetchedPlanet = action.payload;
      state.error.fetchVehicle = undefined;
      state.loading.fetchVehicle = false;
      state.data =
        state.data.length !== 0
          ? state.data.map((planet) =>
              planet?.id === fetchedPlanet?.id ? fetchedPlanet : planet
            )
          : [fetchedPlanet];
    })
    .addCase(fetchVehicle.rejected, (state, action) => {
      state.error.fetchVehicle = action.payload;
      state.loading.fetchVehicle = false;
    });
});
