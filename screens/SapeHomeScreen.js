import React from "react";
import { View, Text } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

function EcoHomeScreen({ toggleMode }) {
  const theme = useTheme();

  return (
    <View>
      <Text>Bonjour Julien</Text>
      <Text>Tu as créer 46 outfits</Text>
      <IconButton
        icon={"entropy_leaf"}
        iconColor={theme.colors.primary}
        size={20}
      />
    </View>
  );
}

export default EcoHomeScreen;
