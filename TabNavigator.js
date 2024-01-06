import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EcoHomeScreen from "./screens/EcoHomeScreen";
import SapeHomeScreen from "./screens/SapeHomeScreen";
import ModeContext from "./context/ModeContext";
import { View, TouchableOpacity, Text } from "react-native";

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
    </Tab.Navigator>
  );
}

function TabBar({ navigation }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabNavigator;