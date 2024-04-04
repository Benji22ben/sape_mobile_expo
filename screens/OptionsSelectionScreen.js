import React from "react";
import { Text, Image, Dimensions } from "react-native";
import GoBack from "../components/core/GoBack";
import FormSelectable from "../components/FormSelectable";
import ScrollBox from "../components/core/ScrollBox";

function OptionsSelectionScreen({ route }) {

  return (
    <ScrollBox
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <GoBack style={{ alignSelf: "flex-start", marginLeft: -20 }} />
      <Image
        source={{ uri: `data:image/png;base64,${route.params.image}` }}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
          alignSelf: "center",
        }}
      />
      <FormSelectable>
        <Text>Option 1</Text>
      </FormSelectable>
      <FormSelectable>
        <Text>Option 1</Text>
      </FormSelectable>
      <FormSelectable>
        <Text>Option 1</Text>
      </FormSelectable>
      <FormSelectable>
        <Text>Option 1</Text>
      </FormSelectable>
    </ScrollBox>
  );
}

export default OptionsSelectionScreen;
