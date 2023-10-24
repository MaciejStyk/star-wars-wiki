export enum PATH {
  HOME = "/",
  CHARACTERS = "/characters",
  CHARACTER = "/characters/:characterId",
  VEHICLES = "/vehicles",
  VEHICLE = "/vehicles/:vehicleId",
  PLANETS = "/planets",
  PLANET = "/planets/:planetId",
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
