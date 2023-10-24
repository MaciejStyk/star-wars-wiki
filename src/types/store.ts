import { ICharacter, IPlanet, IVehicle } from "./index";

export enum ENDPOINTS {
  CHARACTERS = "people/",
  PLANETS = "planets/",
  VEHICLES = "vehicles/",
}

export interface AppState {
  characters: ICharactersReducer;
  vehicles: IVehiclesReducer;
  planets: IPlanetsReducer;
}

export interface ICharactersReducer {
  data: ICharacter[];
  loading: ICharactersLoading;
  error: ICharactersError;
}

export interface ICharactersLoading {
  fetchCharacters?: boolean;
  fetchCharacter?: boolean;
}

export interface ICharactersError {
  fetchCharacters?: unknown;
  fetchCharacter?: unknown;
}

export interface IVehiclesReducer {
  data: IVehicle[];
  loading: IVehiclesLoading;
  error: IVehiclesError;
}

export interface IVehiclesLoading {
  fetchVehicles?: boolean;
  fetchVehicle?: boolean;
}

export interface IVehiclesError {
  fetchVehicles?: unknown;
  fetchVehicle?: unknown;
}

export interface IPlanetsReducer {
  data: IPlanet[];
  loading: IPlanetsLoading;
  error: IPlanetsError;
}

export interface IPlanetsLoading {
  fetchPlanets?: boolean;
  fetchPlanet?: boolean;
}

export interface IPlanetsError {
  fetchPlanets?: unknown;
  fetchPlanet?: unknown;
}
