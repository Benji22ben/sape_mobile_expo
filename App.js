// @ts-nocheck
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sape_theme, eco_theme } from "./sape_theme";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EcoHomeScreen from "./screens/EcoHomeScreen";
import SapeHomeScreen from "./screens/SapeHomeScreen";

export default function App() {
  const isAuth = 0;
  const Stack = createNativeStackNavigator();

  const Icon = (props) => {
    switch (props.name.split("_")[0]) {
      case "ant":
        const antProps = {
          ...props,
          name: props.name.split("_")[1],
        };
        return <AntDesign {...antProps} />;
      case "entypo":
        const entypoProps = {
          ...props,
          name: props.name.split("_")[1],
        };
        return <Entypo {...entypoProps} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <PaperProvider
        theme={mode === "eco" ? eco_theme : sape_theme}
        settings={{
          icon: (props) => <Icon {...props} />,
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
            <Stack.Screen
              name="Home"
              component={mode === "eco" ? EcoHomeScreen : SapeHomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
