import React from "react";
import { Badge } from "react-native-paper";
import { Image } from "react-native";
import BaseCarouselCard from "./BaseCarouselCard";
import useSape from "../hooks/useSape";

function SapeImageCard(index, item) {
  const { getScoreColor } = useSape();

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
          backgroundColor: item.score
            ? getScoreColor(item.score)
            : "transparent",
        }}
        size={10}
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
