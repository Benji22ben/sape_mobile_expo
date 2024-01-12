import { useAssets } from "expo-asset";
import React from "react";
import { ImageBackground, View } from "react-native";
import { useTheme } from "react-native-paper";
import GoBack from "../components/core/GoBack";
import SecondaryButton from "../components/core/Buttons/SecondaryButton";
import { useNavigation } from "@react-navigation/native";

function AddedSape() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [assets, error] = useAssets([
    // @ts-ignore
    require("../assets/images/mesapes.png"),
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ImageBackground
        style={{
          flex: 1,
          marginTop: 60,
          paddingBottom: 30,
          // @ts-ignore
          ...theme.paddings,
          justifyContent: "space-between",
        }}
        source={assets ? assets[0] : null}
        resizeMode="cover"
      >
        <GoBack style={{ top: -30 }} />
        <SecondaryButton onPress={() => navigation.navigate("StackHome")}>
          Retourner à mon dressing
        </SecondaryButton>
      </ImageBackground>
    </View>
  );
}

export default AddedSape;
