import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface ITheme {
  palette: IPalette;
  spacing: ISpacing;
}

interface ISpacing {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface IPalette {
  darkGray: string;
  gray: string;
  lightBlueGray: string;
  lightGray: string;
  primaryBlue: string;
  primaryOrange: string;
  primaryWhite: string;
  primaryYellow: string;
  secondaryBlack: string;
  secondaryBlue: string;
  secondaryGreen: string;
  secondaryLightBlue: string;
  secondaryPink: string;
  secondaryRed: string;
  secondaryTeal: string;
  secondaryViolet: string;
  secondaryYellow: string;
}

export const theme: ITheme = {
  palette: {
    darkGray: "#808080",
    gray: "#979797",
    lightBlueGray: "#EFF3F9",
    lightGray: "#ADB5BD",
    primaryBlue: "#003DA5",
    primaryOrange: "#E87722",
    primaryWhite: "#FFFFFF",
    primaryYellow: "#F1B434",
    secondaryBlack: "#000000",
    secondaryBlue: "#012169",
    secondaryGreen: "#00B140",
    secondaryLightBlue: "#00A3E0",
    secondaryPink: "#F277C6",
    secondaryRed: "#EF3340",
    secondaryTeal: "#9ADBE8",
    secondaryViolet: "#AF1685",
    secondaryYellow: "#FEDB00",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
};

export const useTheme = () => {
  const theme = useContext(ThemeContext) as ITheme;

  if (!theme) {
    throw new Error("ThemeContext is not defined");
  }

  return theme;
};
