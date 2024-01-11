import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

function ScrollBox({
  paddingBottom = 30,
  paddingTop = 50,
  flexDirection = "column",
  gap = 0,
  ...props
}) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        gap: gap,
        // @ts-ignore
        ...theme.paddings,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        ...props.contentContainerStyle,
      }}
    >
      {props.children}
    </ScrollView>
  );
}

export default ScrollBox;
