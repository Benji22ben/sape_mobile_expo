import React from "react";
import { View } from "react-native";

function BaseCarouselCard({ children, index, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: index > 0 ? 10 : 0,
        backgroundColor: "#D9D9D9",
        ...props.style,
      }}
    >
      {children}
    </View>
  );
}

export default BaseCarouselCard;
