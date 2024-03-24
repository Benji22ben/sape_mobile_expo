import React, { useContext } from "react";
import { TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { useTheme, Text, TextInput, Icon } from "react-native-paper";
import Logo from "../components/svg/Logo";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WrittenSape from "../components/svg/WrittenSape";
import GoBack from "../components/core/GoBack";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";
import ModeContext from "../context/ModeContext";
import Box from "../components/core/Box";
import { useAuth } from "../hooks/useAuth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/AuthContext";

function LoginScreen({}) {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { toggleMode } = useContext(ModeContext);
  const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { checkAuth } = useContext(AuthContext);
  const [seeText, setSeeText] = React.useState(true);

  const handleSeeText = () => {
    setSeeText(!seeText);
  };

  const handleLogin = async () => {
    // toggleMode();
    const statut = await login(email, password);

    if (statut.status === 200) {
      //@ts-ignore
      // navigation.navigate("StackHome");
      checkAuth();
    }
  };

  return (
    <Box style={{ justifyContent: "space-between" }}>
      <GoBack />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          gap: 50,
          paddingTop: 65,
          paddingBottom: 30,
        }}
      >
        <Logo style={{ alignSelf: "center" }} />
        <View>
          <Text>Se Connecter</Text>
          <Text>
            Entrez votre email et{"\n"}mot de passe afin de vous connectez
          </Text>
        </View>
        <TextInput
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
          left={
            <TextInput.Icon icon="ant_user" color={theme.colors.secondary} />
          }
          placeholder="Email"
        />
        <TextInput
          autoCorrect={false}
          onChangeText={(pwd) => setPassword(pwd)}
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
      </KeyboardAwareScrollView>
      <WrittenSape style={{ alignSelf: "center" }} />
    </Box>
  );
}

export default LoginScreen;
