import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import ModeContext from "../context/ModeContext";
import { AnimatedCircularProgress } from "react-native-circular-progress";

function EcoHomeScreen() {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  const [score, setScore] = useState(Math.random() * 100);

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
          <Text>Ton score est au top 🤩​</Text>
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
      <AnimatedCircularProgress
        size={180}
        rotation={0}
        width={20}
        fill={score}
        style={{ alignSelf: "center" }}
        tintColor={theme.colors.primary}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#E1E1E1"
      >
        {(score) => (
          <Text
            style={{
              color: theme.colors.primary,
              fontWeight: "bold",
              fontSize: 50,
            }}
          >
            {Math.round(score)}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

export default EcoHomeScreen;
