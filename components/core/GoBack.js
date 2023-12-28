import React from "react";
import { Pressable } from "react-native";
import { Icon } from "react-native-paper";

function GoBack(navigation) {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon size={30} source="left" />
    </Pressable>
  );
}

export default GoBack;
