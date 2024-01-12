import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

function TabBar({ navigation }) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 66,
      }}
    >
      <IconButton
        icon={"entypo_home"}
        iconColor={theme.colors.secondary}
        size={30}
        rippleColor={"#FFFFFF"}
        onPress={() => navigation.navigate("TabHome")}
      />
      <IconButton
        icon={"entypo_shuffle"}
        style={{ top: -20 }}
        iconColor={theme.colors.tertiary}
        containerColor={theme.colors.primary}
        size={40}
        rippleColor={"#FFFFFF"}
        onPress={() => navigation.navigate("FitCreation")}
      />
      <IconButton
        icon={"ant_plus"}
        iconColor={theme.colors.secondary}
        size={30}
        rippleColor={"#FFFFFF"}
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

export default TabBar;
