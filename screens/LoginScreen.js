import React from "react";
import { View } from "react-native";
import { useTheme, Text, TextInput, Icon } from "react-native-paper";
import Logo from "../components/svg/Logo";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WrittenSape from "../components/svg/WrittenSape";
import GoBack from "../components/core/GoBack";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";

function LoginScreen({ toggleMode }) {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [seeText, setSeeText] = React.useState(true);

  const handleSeeText = () => {
    setSeeText(!seeText);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
    toggleMode();
  };

  return (
    <View
      style={{
        paddingBottom: 30,
        paddingTop: 50,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        ...theme.paddings,
        backgroundColor: theme.colors.tertiary,
      }}
    >
      <GoBack />
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
        <TextInput
          left={
            <TextInput.Icon icon="ant_user" color={theme.colors.secondary} />
          }
          placeholder="Nom d'utilisateur"
        />
        <TextInput
          left={
            <TextInput.Icon icon="ant_lock" color={theme.colors.secondary} />
          }
          right={
            <TextInput.Icon
              onPress={handleSeeText}
              color={theme.colors.secondary}
              icon="ant_eye"
            />
          }
          placeholder="Mot de passe"
          secureTextEntry={seeText}
        />
        <PrimaryButton onPress={() => handleLogin()}>Connexion</PrimaryButton>
      </View>
      <WrittenSape style={{ alignSelf: "center" }} />
    </View>
  );
}

export default LoginScreen;
