import { createReducer } from "@reduxjs/toolkit";

import * as Types from "types";
import * as Utils from "utils";

import { fetchPlanets, fetchPlanet } from "./actions";

const initialState: Types.IPlanetsReducer = {
  data: [],
  loading: {},
  error: {},
};

export const planetsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPlanets.pending, (state, action) => {
      state.error.fetchPlanets = undefined;
      state.loading.fetchPlanets = true;
    })
    .addCase(fetchPlanets.fulfilled, (state, action) => {
      state.error.fetchPlanets = undefined;
      state.loading.fetchPlanets = false;
      state.data = action.payload.map((planet: Types.IPlanet) => ({
        ...planet,
        id: Utils.extractIdFrom(planet.url),
      }));
    })
    .addCase(fetchPlanets.rejected, (state, action) => {
      state.error.fetchPlanets = action.payload;
      state.loading.fetchPlanets = false;
    })
    .addCase(fetchPlanet.pending, (state, action) => {
      state.error.fetchPlanet = undefined;
      state.loading.fetchPlanet = true;
    })
    .addCase(fetchPlanet.fulfilled, (state, action) => {
      const fetchedPlanet = {
        ...action.payload,
        id: Utils.extractIdFrom(action.payload.url),
      };
      state.error.fetchPlanet = undefined;
      state.loading.fetchPlanet = false;
      state.data =
        state.data.length !== 0
          ? state.data.map((character) =>
              character?.id === fetchedPlanet?.id ? fetchedPlanet : character
            )
          : [fetchedPlanet];
    })
    .addCase(fetchPlanet.rejected, (state, action) => {
      state.error.fetchPlanet = action.payload;
      state.loading.fetchPlanet = false;
    });
});
