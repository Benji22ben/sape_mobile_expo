import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sape_theme, eco_theme } from "./sape_theme";
import LoginScreen from "./screens/LoginScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ModeContext from "./context/ModeContext";
import TabNavigator from "./TabNavigator";
import CameraScreen from "./screens/CameraScreen";
import AddSapeForm from "./screens/AddSapeForm";
import AddedSape from "./screens/AddedSape";
import { AuthContext } from "./context/AuthContext";

function Routes() {
  const Stack = createNativeStackNavigator();
  const { mode } = useContext(ModeContext);
  const { isAuth, checkAuth } = useContext(AuthContext);

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
      case "fontawesome":
        const fontawesome_props = {
          ...props,
          name: props.name.split("_")[1],
        };
        return <FontAwesome5 {...fontawesome_props} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <PaperProvider
      theme={mode === "eco" ? eco_theme : sape_theme}
      settings={{
        icon: (props) => <Icon {...props} />,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAuth ? "StackHome" : "Authentication"}
          screenOptions={{
            headerShown: false, // This will hide the title bar
          }}
        >
          <Stack.Screen
            name="Authentication"
            component={AuthenticationScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="StackHome" component={TabNavigator} />

          {/* Camera Navigation */}
          <Stack.Group>
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="AddSapeForm" component={AddSapeForm} />
            <Stack.Screen name="AddedSape" component={AddedSape} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Routes;
