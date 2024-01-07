import React from "react";
import { Badge } from "react-native-paper";
import { Image } from "react-native";
import BaseCarouselCard from "./BaseCarouselCard";

function SapeImageCard(index, getScoreColor, item) {
  return (
    <BaseCarouselCard
      index={index}
      style={{
        padding: 8,
        backgroundColor: "#FFFF",
      }}
    >
      <Badge
        style={{
          alignSelf: "flex-start",
          backgroundColor: getScoreColor(item.score),
        }}
      />
      <Image
        style={{
          flex: 1,
          width: "100%",
          height: undefined,
          resizeMode: "contain",
        }}
        source={item.image}
      />
    </BaseCarouselCard>
  );
}

export default SapeImageCard;
