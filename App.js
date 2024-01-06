import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModeProvider } from "./context/ModeContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ModeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ModeProvider>
    </SafeAreaProvider>
  );
}
