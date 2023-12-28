import React from "react";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const sape_theme = {
  ...DefaultTheme,
  paddings: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "#80EDB9",
    secondary: "#F6F6F4",
    tertiary: "#202020",
    error: "#BA1A1A",
  },
};

const eco_theme = {
  ...DefaultTheme,
  paddings: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "#ED8080",
    secondary: "#F6F6F4",
    tertiary: "#202020",
    error: "#BA1A1A",
  },
};

export { sape_theme, eco_theme };
