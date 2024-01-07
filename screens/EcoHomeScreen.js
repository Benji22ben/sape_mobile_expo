import React, { useContext, useState } from "react";
import { View, Text, Image } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Box from "../components/core/Box";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";
import useSape from "../hooks/useSape";

function EcoHomeScreen() {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const { sape } = useSape();

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
        data={sape}
        renderItem={({ index, item }) => {
          return (
            <>
              {item && (
                <>
                  <BaseCarouselCard
                    index={index}
                    style={{
                      padding: 8,
                      backgroundColor: "#FFFF",
                    }}
                  >
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
                </>
              )}
            </>
          );
        }}
      />
    </Box>
  );
}

export default EcoHomeScreen;
