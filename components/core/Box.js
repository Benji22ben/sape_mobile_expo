import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

function Box({
  paddingBottom = 30,
  paddingTop = 65,
  flexDirection = "column",
  ...props
}) {
  const theme = useTheme();

  return (
    <View
      {...props}
      style={{
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        flex: 1,
        flexDirection: flexDirection,
        justifyContent: "flex-start",
        // @ts-ignore
        ...theme.paddings,
        backgroundColor: theme.colors.tertiary,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
}

export default Box;
