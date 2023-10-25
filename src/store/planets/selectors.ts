import { createSelector, Selector } from "reselect";

import * as Types from "types";

export const selectPlanets: Selector<Types.AppState, Types.IPlanet[]> = ({
  planets,
}) => planets.data;

export const selectPlanetById = (id?: string) =>
  createSelector(selectPlanets, (planets) =>
    planets.find((planet) => planet?.id === id)
  );

export const selectPlanetsCount: Selector<
  Types.AppState,
  number | undefined
> = ({ planets }) => planets.count;

export const selectPlanetsLoading: Selector<
  Types.AppState,
  Types.IPlanetsLoading
> = ({ planets }) => planets.loading;

export const selectPlanetsError: Selector<
  Types.AppState,
  Types.IPlanetsError
> = ({ planets }) => planets.error;
