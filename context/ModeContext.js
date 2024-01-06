import React, { useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultValues = {
  mode: "eco",
  toggleMode: async () => {},
  getMode: async () => {},
};
const ModeContext = createContext(defaultValues);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("eco");

  useEffect(() => {
    getMode();
  }, []);

  const toggleMode = async () => {
    try {
      const toggledMode = mode === "eco" ? "sape" : "eco";
      setMode(toggledMode);
      await AsyncStorage.setItem("@mode", toggledMode);
    } catch (e) {
      console.log(e);
    }
  };

  const getMode = async () => {
    try {
      const updateMode = await AsyncStorage.getItem("@mode");
      setMode(updateMode);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, getMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
