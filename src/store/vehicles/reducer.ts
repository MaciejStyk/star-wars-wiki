import { createReducer } from "@reduxjs/toolkit";

import { VEHICLE_IMAGES, VEHICLE_AVATAR } from "const";
import * as Types from "types";
import * as Utils from "utils";

import { fetchVehicles, fetchVehicle, fetchVehiclesById } from "./actions";

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
      state.count = action.payload.count;
      state.data = action.payload.results.map((vehicle: Types.IVehicle) => {
        const vehicleId = Utils.extractIdFrom(vehicle.url);
        return {
          ...vehicle,
          id: vehicleId,
          image: VEHICLE_IMAGES[Number(vehicleId) - 1] || VEHICLE_AVATAR,
        };
      });
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
      const vehicleId = Utils.extractIdFrom(action.payload.url);
      const fetchedVehicle = {
        ...action.payload,
        id: vehicleId,
        image: VEHICLE_IMAGES[Number(vehicleId) - 1] || VEHICLE_AVATAR,
      };
      state.error.fetchVehicle = undefined;
      state.loading.fetchVehicle = false;
      state.data =
        state.data.length !== 0
          ? state.data.map((character) =>
              character?.id === fetchedVehicle?.id ? fetchedVehicle : character
            )
          : [fetchedVehicle];
    })
    .addCase(fetchVehicle.rejected, (state, action) => {
      state.error.fetchVehicle = action.payload;
      state.loading.fetchVehicle = false;
    })
    .addCase(fetchVehiclesById.pending, (state, action) => {
      state.error.fetchVehicles = undefined;
      state.loading.fetchVehicles = true;
    })
    .addCase(fetchVehiclesById.fulfilled, (state, action) => {
      const fetchedVehicles = action.payload.map((vehicle) => ({
        ...vehicle,
        id: Utils.extractIdFrom(vehicle.url),
      }));
      state.error.fetchVehicles = undefined;
      state.loading.fetchVehicles = false;
      state.data = fetchedVehicles;
    })
    .addCase(fetchVehiclesById.rejected, (state, action) => {
      state.error.fetchVehicles = action.payload;
      state.loading.fetchVehicles = false;
    });
});
