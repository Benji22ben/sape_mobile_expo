import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Icon } from "react-native-paper";

function GoBack() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon size={30} source="ant_left" />
    </Pressable>
  );
}

export default GoBack;
