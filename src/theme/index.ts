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
  black: string;
  darkGray: string;
  gray: string;
  lightBlueGray: string;
  lightGray: string;
}

export const theme: ITheme = {
  palette: {
    black: "#000000",
    darkGray: "#808080",
    gray: "#979797",
    lightBlueGray: "#EFF3F9",
    lightGray: "#ADB5BD",
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
