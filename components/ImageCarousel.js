import React from "react";
import { Image, Dimensions } from "react-native";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";
import { ScrollView } from "react-native-gesture-handler";

function ImageCarousel({ fits, label }) {
  const margin = 4;
  const width = Dimensions.get("window").width / 2 - margin * (2 + 1);
  const height = Dimensions.get("window").height / 3 - margin * (3 + 1);

  return (
    <SapeCarousel
      label={label}
      data={fits}
      renderItem={({ index, item }) => {
        return (
          <BaseCarouselCard
            key={index}
            index={index}
            style={{
              flexWrap: "wrap",
              alignContent: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            {item &&
              item.map((item, index) => {
                return (
                  <Image
                    style={{
                      width: width / 3,
                      height: height / 3,
                      margin: margin,
                      resizeMode: "contain",
                    }}
                    key={index}
                    source={item.image}
                  />
                );
              })}
          </BaseCarouselCard>
        );
      }}
    />
  );
}

export default ImageCarousel;
