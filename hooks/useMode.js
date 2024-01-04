import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useMode() {
  const [mode, setMode] = React.useState("eco");

  const toggleMode = async () => {
    try {
      setMode(mode === "eco" ? "sape" : "eco");
      await AsyncStorage.setItem("@mode", mode);
      console.log("mode :", mode);
    } catch (e) {
      console.log(e);
    }
  };

  const getMode = async () => {
    try {
      const mode = await AsyncStorage.getItem("@mode");
      setMode(mode);
      return mode;
    } catch (e) {
      console.log(e);
    }
  };

  return { mode, toggleMode, getMode };
}

export { useMode };
