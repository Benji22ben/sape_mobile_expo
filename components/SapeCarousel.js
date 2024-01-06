import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { View, Text, Dimensions } from "react-native";

function SapeCarousel({
  data,
  loop = false,
  label = "",
  onSnapToItem = () => {},
  renderItem,
}) {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{label}</Text>
      <Carousel
        loop={loop}
        style={{ width: "100%" }}
        width={width / 3}
        height={width / 2}
        data={data}
        onSnapToItem={onSnapToItem}
        renderItem={renderItem}
      />
    </View>
  );
}

export default SapeCarousel;
