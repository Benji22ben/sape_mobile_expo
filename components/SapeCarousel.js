import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { View, Text, Dimensions } from "react-native";

function SapeCarousel({
  data,
  loop = false,
  label = "",
  onSnapToItem = () => {},
  renderItem,
  ...props
}) {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{label}</Text>
      <Carousel
        loop={loop}
        style={{
          width: "100%",
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        width={width / 2}
        height={width / 1.2}
        data={data}
        onSnapToItem={onSnapToItem}
        renderItem={renderItem}
        {...props}
      />
    </View>
  );
}

export default SapeCarousel;
