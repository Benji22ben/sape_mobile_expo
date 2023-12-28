import { useNavigation } from "@react-navigation/native";
import { useAssets } from "expo-asset";
import React from "react";
import { View, ImageBackground, Image, Pressable } from "react-native";
import { useTheme, Button, Text } from "react-native-paper";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";
import SecondaryButton from "../components/core/Buttons/SecondaryButton";
import WrittenLogo from "../components/svg/WrittenLogo";

function AuthenticationScreen() {
  const theme = useTheme();
  const [noAccountIsPressed, setNoAccountIsPressed] = React.useState(false);
  const navigation = useNavigation();

  const handleNoAccountPress = () => {
    setNoAccountIsPressed(!noAccountIsPressed);
  };

  const [assets, error] = useAssets([
    // @ts-ignore
    require("../assets/images/loginScreenBg.png"),
    // @ts-ignore
    require("../assets/images/sape_logo.png"),
  ]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 180,
          paddingBottom: 60,
          ...theme.paddings,
        }}
        source={assets ? assets[0] : null}
        resizeMode="cover"
      >
        <WrittenLogo style={{ alignSelf: "center" }} />
        <View style={{ gap: 50 }}>
          <PrimaryButton onPress={() => console.log("register")}>
            S'inscrire
          </PrimaryButton>
          <SecondaryButton onPress={() => navigation.navigate("Login")}>
            Se connecter
          </SecondaryButton>
        </View>
        <Pressable
          style={{ alignSelf: "center" }}
          onPressOut={handleNoAccountPress}
          onPressIn={handleNoAccountPress}
        >
          <Text
            style={{
              color: noAccountIsPressed
                ? theme.colors.secondary
                : theme.colors.tertiary,
              textDecorationLine: "underline",
            }}
          >
            Utiliser Sape sans compte ?
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default AuthenticationScreen;
