import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModeProvider } from "./context/ModeContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ModeProvider>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
          </GestureHandlerRootView>
        </AuthProvider>
      </ModeProvider>
    </SafeAreaProvider>
  );
}
