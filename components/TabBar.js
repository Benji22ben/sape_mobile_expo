import React from "react";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import UserSVG from "./svg/User";
import SVGButton from "./svg/SVGButton";
import PlusSVG from "./svg/Plus";
import HomeSVG from "./svg/Home";
import TeeSVG from "./svg/Tee";

function TabBar({ navigation }) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        height: 86,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.05)",
        backgroundColor: theme.colors.tertiary,
      }}
    >
      <SVGButton onPress={() => navigation.navigate("TabHome")}>
        <HomeSVG />
      </SVGButton>
      <SVGButton
      // onPress={() => navigation.navigate("TabHome")} 
      >
        <TeeSVG />
      </SVGButton>
      <IconButton
        icon={"entypo_shuffle"}
        style={{ top: -20 }}
        iconColor={theme.colors.tertiary}
        containerColor={theme.colors.primary}
        size={40}
        rippleColor={"#FFFFFF"}
        onPress={() => navigation.navigate("FitCreation")}
      />
      <SVGButton onPress={() => navigation.navigate("Camera")}>
        <PlusSVG />
      </SVGButton>
      <SVGButton onPress={() => navigation.navigate("UserOptions")}>
        <UserSVG />
      </SVGButton>
    </View>
  );
}

export default TabBar;
