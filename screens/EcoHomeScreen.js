import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Box from "../components/core/Box";
import Carousel from "react-native-reanimated-carousel";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";

function EcoHomeScreen() {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const [item, setItem] = useState();
  const carouselData = [
    {
      id: "1",
      name: "T-shirt",
      brand: "Nike",
      price: 50,
      image:
        "https://www.footkorner.com/16307-large_default/t-shirt-nike-sportswear-club-futura-tee-2.jpg",
      color: "white",
      type: "t-shirt",
      size: "M",
      material: "coton",
      eco_score: 80,
      eco_score_details: {
        production: 80,
        transport: 80,
        distribution: 80,
        end_of_life: 80,
        recycling: 80,
      },
    },
    {
      id: "2",
      name: "T-shirt",
      brand: "Nike",
      price: 50,

      image:
        "https://www.footkorner.com/16307-large_default/t-shirt-nike-sportswear-club-futura-tee-2.jpg",
      color: "white",
      type: "t-shirt",
      size: "M",
      material: "coton",
      eco_score: 80,
      eco_score_details: {
        production: 80,
        transport: 80,
        distribution: 80,
        end_of_life: 80,
        recycling: 80,
      },
    },
  ];

  const handleItem = (item) => {
    setItem(item);
  };

  // FROM API
  const [score, setScore] = useState(Math.random() * 100);

  return (
    <Box style={{ gap: 48 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 28 }}>Bonjour Julien</Text>
          <Text style={{ fontSize: 16 }}>Ton score est au top 🤩​</Text>
        </View>
        <IconButton
          mode="contained"
          containerColor={theme.colors.primary}
          icon={"entypo_leaf"}
          iconColor={"#FFFFFF"}
          size={20}
          rippleColor={"#FFFFFF"}
          onPress={() => toggleMode()}
        />
      </View>
      <AnimatedCircularProgress
        size={180}
        rotation={0}
        width={20}
        fill={score}
        style={{ alignSelf: "center" }}
        tintColor={theme.colors.primary}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#E1E1E1"
      >
        {(score) => (
          <Text
            style={{
              color: theme.colors.primary,
              fontWeight: "bold",
              fontSize: 50,
            }}
          >
            {Math.round(score)}
          </Text>
        )}
      </AnimatedCircularProgress>
      <SapeCarousel
        label="Tes derniers ajouts"
        data={carouselData}
        renderItem={({ index, item }) => {
          return (
            <>
              {item && (
                <BaseCarouselCard index={index}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {item.brand}
                  </Text>
                </BaseCarouselCard>
              )}
            </>
          );
        }}
      />
    </Box>
  );
}

export default EcoHomeScreen;
