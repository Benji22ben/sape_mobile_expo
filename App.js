import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./Routes";
import { ModeProvider } from "./context/ModeContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ModeProvider>
        <Routes />
      </ModeProvider>
    </SafeAreaProvider>
  );
}
