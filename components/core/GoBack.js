import { useNavigation } from "@react-navigation/native";
import React from "react";
import { IconButton } from "react-native-paper";

function GoBack({ color = "#020202", style = {} }) {
  const navigation = useNavigation();

  return (
    <IconButton
      style={style}
      size={30}
      icon="ant_left"
      iconColor={color}
      onPress={() => navigation.goBack()}
    />
  );
}

export default GoBack;
