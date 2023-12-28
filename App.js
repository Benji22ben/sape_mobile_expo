// @ts-nocheck
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sape_theme } from "./sape_theme";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  const isAuth = 0;

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider
        theme={sape_theme}
        settings={{
          icon: (props) => <AntDesign {...props} />,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isAuth ? "Home" : "Authentication"}
            screenOptions={{
              headerShown: false, // This will hide the title bar
            }}
          >
            <Stack.Screen
              name="Authentication"
              component={AuthenticationScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
