import React from "react";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

function TabBar({ navigation }) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 86,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.05)",
        backgroundColor: theme.colors.tertiary,
      }}
    >
      <IconButton
        icon={"entypo_home"}
        iconColor={theme.colors.secondary}
        size={28}
        rippleColor={"#FFFFFF"}
        // onPress={() => navigation.navigate("TabHome")}
      />
      <IconButton
        icon={"fontawesome_tshirt"}
        iconColor={theme.colors.secondary}
        size={25}
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
        size={28}
        rippleColor={"#FFFFFF"}
        onPress={() => navigation.navigate("Camera")}
      />
      <IconButton
        icon={"fontawesome_user-tie"}
        iconColor={theme.colors.secondary}
        size={25}
        rippleColor={"#FFFFFF"}
        // onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

export default TabBar;
