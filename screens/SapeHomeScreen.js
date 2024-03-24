import React, { useContext } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";
import useSape from "../hooks/useSape";
import { useNavigation } from "@react-navigation/native";
import ScrollBox from "../components/core/ScrollBox";
import ImageCarousel from "../components/ImageCarousel";

function SapeHomeScreen({}) {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const { fits } = useSape();
  const navigation = useNavigation();

  return (
    <ScrollBox gap={88}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 6 }}>
          <Text style={{ fontSize: 28 }}>Bonjour Julien</Text>
          <Text style={{ fontSize: 16 }}>Tu as créer 46 outfits</Text>
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
            // @ts-ignore
            onPress={() => navigation.navigate("FitCreation")}
          />
        </View>
        <Text style={{ alignSelf: "center", fontSize: 24 }}>
          Génère ton outfit 😎
        </Text>
      </View>
      <ImageCarousel fits={fits} label="Tes tenues de la semaine" />
      <ImageCarousel fits={fits} label="Tes tenues favorites" />
    </ScrollBox>
  );
}

export default SapeHomeScreen;
