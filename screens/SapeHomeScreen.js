import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import useSape from "../hooks/useSape";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../components/ImageCarousel";

function SapeHomeScreen({}) {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const { fits, getSape, outfit } = useSape();
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          gap: 88,
          ...theme.paddings,
          paddingTop: 65,
          paddingBottom: 30,
        }}
      >
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
          <Text style={{ alignSelf: "center", fontSize: 24, marginBottom: 88 }}>
            Génère ton outfit 😎
          </Text>
        </View>
      </View>
      <View style={{ gap: 88 }}>
        <ImageCarousel fits={fits} label="Tes tenues de la semaine" />
        <ImageCarousel fits={fits} label="Tes tenues favorites" />
      </View>
    </ScrollView>
  );
}

export default SapeHomeScreen;
