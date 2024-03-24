import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EcoHomeScreen from "./screens/EcoHomeScreen";
import SapeHomeScreen from "./screens/SapeHomeScreen";
import ModeContext from "./context/ModeContext";
import TabBar from "./components/TabBar";
import FitCreationScreen from "./screens/FitCreationScreen";
import UserOptions from "./screens/UserOptions";

function TabNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
  const { mode } = useContext(ModeContext);
  return (
    <Tab.Navigator
      initialRouteName={"TabHome"}
      screenOptions={{
        headerShown: false, // This will hide the title bar
      }}
      tabBar={(props) => <TabBar navigation={navigation} {...props} />}
    >
      <Tab.Screen
        name="TabHome"
        component={mode === "eco" ? EcoHomeScreen : SapeHomeScreen}
      />
      <Tab.Screen name="FitCreation" component={FitCreationScreen} />
      <Tab.Screen name="UserOptions" component={UserOptions} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
