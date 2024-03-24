import React from "react";
import { View } from "react-native";
import { Surface } from "react-native-paper";

function BaseCarouselCard({ children, index, ...props }) {
  return (
    <Surface
      style={{
        flex: 1,
        justifyContent: "center",
        shadowOpacity: 0,
        marginLeft: index > 0 ? 10 : 0,
        backgroundColor: "#D9D9D9",
        ...props.style,
      }}
    >
      {children}
    </Surface>
  );
}

export default BaseCarouselCard;
