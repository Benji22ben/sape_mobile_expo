import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

function TabBar({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 66,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FitCreation")}>
        <Text>FitCreation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Text>Add Sape</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabBar;
