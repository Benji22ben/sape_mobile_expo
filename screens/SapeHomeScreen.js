import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import { useMode } from "../hooks/useMode";
import { useNavigation } from "@react-navigation/native";

function SapeHomeScreen({}) {
  const theme = useTheme();

  const { toggleMode } = useMode();

  return (
    <View
      style={{
        paddingBottom: 30,
        paddingTop: 50,
        gap: 32,
        flex: 1,
        flexDirection: "column",
        ...theme.paddings,
        backgroundColor: theme.colors.tertiary,
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
    </View>
  );
}

export default SapeHomeScreen;
