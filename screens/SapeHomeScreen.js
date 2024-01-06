import React, { useContext } from "react";
import { View, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import Box from "../components/core/Box";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";

function SapeHomeScreen({}) {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);

  return (
    <Box style={{ gap: 48 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Bonjour Julien</Text>
          <Text>Tu as créer 46 outfits</Text>
        </View>
        <IconButton
          mode="contained"
          containerColor={theme.colors.primary}
          icon={"entypo_leaf"}
          iconColor={"#FFFFFF"}
          rippleColor={"#FFFFFF"}
          size={20}
          onPress={() => toggleMode()}
        />
      </View>
      <View style={{ gap: 20 }}>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: 50,
            backgroundColor: theme.colors.primary,
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        >
          <IconButton
            style={{ alignSelf: "center" }}
            icon={"entypo_shuffle"}
            iconColor={"#FFFFFF"}
            size={100}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <Text style={{ alignSelf: "center" }}>Génère ton outfit 😎</Text>
      </View>
      <SapeCarousel
        label="Tes tenues favorites"
        data={[...new Array(10).fill({ brand: "Nike" })]}
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

export default SapeHomeScreen;
