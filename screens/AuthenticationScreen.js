import { useNavigation } from "@react-navigation/native";
import { useAssets } from "expo-asset";
import React from "react";
import { View, ImageBackground, Image, Pressable } from "react-native";
import { useTheme, Button, Text } from "react-native-paper";

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
        <Image
          style={{ alignSelf: "center" }}
          source={assets ? assets[1] : null}
        />
        <View style={{ gap: 50 }}>
          <Button
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: 0,
            }}
            textColor={theme.colors.tertiary}
            // onPress={() => navigation.navigate('Login')}
          >
            S'inscrire
          </Button>
          <Button
            style={{
              backgroundColor: theme.colors.tertiary,
              borderRadius: 0,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Se connecter
          </Button>
        </View>
        <Pressable
          style={{ alignSelf: "center" }}
          onPressOut={handleNoAccountPress}
          onPressIn={handleNoAccountPress}
        >
          <Text
            style={{
              color: noAccountIsPressed
                ? theme.colors.tertiary
                : theme.colors.secondary,
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
