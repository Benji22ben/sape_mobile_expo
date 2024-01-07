import React, { useContext } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import SapeCarousel from "../components/SapeCarousel";
import BaseCarouselCard from "../components/BaseCarouselCard";
import useSape from "../hooks/useSape";

function SapeHomeScreen({}) {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const { fits } = useSape();
  const margin = 4;

  const width = Dimensions.get("window").width / 2 - margin * (2 + 1);
  const height = Dimensions.get("window").height / 3 - margin * (3 + 1);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        gap: 88,
        // @ts-ignore
        ...theme.paddings,
        paddingTop: 50,
        paddingBottom: 30,
      }}
    >
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
        data={fits}
        renderItem={({ index, item }) => {
          return (
            <BaseCarouselCard
              key={index}
              index={index}
              style={{
                flexWrap: "wrap",
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
              }}
            >
              {item &&
                item.map((item, index) => {
                  return (
                    <Image
                      style={{
                        width: width / 2.5,
                        height: height / 3.4,
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
      <SapeCarousel
        label="Tes tenues de la semaine"
        data={fits}
        renderItem={({ index, item }) => {
          return (
            <BaseCarouselCard
              key={index}
              index={index}
              style={{
                flexWrap: "wrap",
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
              }}
            >
              {item &&
                item.map((item, index) => {
                  return (
                    <Image
                      style={{
                        width: width / 2.5,
                        height: height / 3.4,
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
    </ScrollView>
  );
}

export default SapeHomeScreen;
