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
    primary: "#EDB480",
    onPrimary: "#FFE7D0",
    secondary: "#202020",
    tertiary: "#F6F6F4",
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
    primary: "#80EDB9",
    onPrimary: "#BFFFE1",
    secondary: "#202020",
    tertiary: "#F6F6F4",
    error: "#BA1A1A",
  },
};

export { sape_theme, eco_theme };
