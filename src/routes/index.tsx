import * as Pages from "pages";
import * as Types from "types";

export const ROUTES: Array<Types.IRoute> = [
  {
    path: Types.PATH.HOME,
    element: <Pages.Characters />,
  },
  {
    path: Types.PATH.CHARACTERS,
    element: <Pages.Characters />,
  },
  {
    path: Types.PATH.CHARACTER,
    element: <Pages.Character />,
  },
  {
    path: Types.PATH.PLANETS,
    element: <Pages.Planets />,
  },
  {
    path: Types.PATH.PLANET,
    element: <Pages.Planet />,
  },
  {
    path: Types.PATH.VEHICLES,
    element: <Pages.Vehicles />,
  },
  {
    path: Types.PATH.VEHICLE,
    element: <Pages.Vehicle />,
  },
  {
    path: "*",
    element: <Pages.NotFound />,
  },
];
