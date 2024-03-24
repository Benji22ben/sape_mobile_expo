import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModeProvider } from "./context/ModeContext";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ModeProvider>
          <AuthProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Routes />
            </GestureHandlerRootView>
          </AuthProvider>
        </ModeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
