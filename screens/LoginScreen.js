import React from "react";
import { View } from "react-native";
import { useTheme, Button, Text, TextInput } from "react-native-paper";
import Logo from "../components/svg/Logo";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WrittenSape from "../components/svg/WrittenSape";
import GoBack from "../components/core/GoBack";

function LoginScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingBottom: 30,
        paddingTop: insets.top,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        ...theme.paddings,
      }}
    >
      <GoBack navigation={navigation} />
      <Logo style={{ alignSelf: "center" }} />
      <View
        style={{
          gap: 50,
        }}
      >
        <View>
          <Text>Se Connecter</Text>
          <Text>
            Entrez votre nom d'utilisateur et{"\n"}mot de passe afin de vous
            connectez
          </Text>
        </View>
        <TextInput placeholder="Nom d'utilisateur" />
        <TextInput
          //   InputRightElement={<VisibilityIcon />}
          placeholder="Mot de passe"
        />
        <Button
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: 0,
          }}
          textColor={theme.colors.tertiary}
        >
          Connexion
        </Button>
      </View>
      <WrittenSape style={{ alignSelf: "center" }} />
    </View>
  );
}

export default LoginScreen;
