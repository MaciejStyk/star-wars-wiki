import { createReducer } from "@reduxjs/toolkit";

import { PLANET_IMAGES, PLANET_AVATAR } from "const";
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
      state.count = action.payload.count;
      state.data = action.payload.results.map((planet: Types.IPlanet) => {
        const planetId = Utils.extractIdFrom(planet.url);
        return {
          ...planet,
          id: planetId,
          image: PLANET_IMAGES[Number(planetId) - 1] || PLANET_AVATAR,
        };
      });
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
      const planetId = Utils.extractIdFrom(action.payload.url);
      const fetchedPlanet = {
        ...action.payload,
        id: planetId,
        image: PLANET_IMAGES[Number(planetId) - 1] || PLANET_AVATAR,
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
