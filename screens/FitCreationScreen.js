import React from "react";
import { Surface, Text } from "react-native-paper";
import useSape from "../hooks/useSape";
import ScrollBox from "../components/core/ScrollBox";
import SapeImageCard from "../components/SapeImageCard";
import { Dimensions, View, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/core/GoBack";

function FitCreationScreen() {
  const { outfitOfTheDay } = useSape();

  const margin = 4;
  const navigation = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <ScrollBox gap={38}>
      <Text style={{ alignSelf: "center" }}>La Tenue du jour</Text>
      <Text>
        Sape te propose cette tenue pour aujourd’hui te convient elle ? 😍​
      </Text>
      <Text>N’hésite pas à changer d’habit en appuyant dessus</Text>

      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {outfitOfTheDay.map((item, index) => (
          <Surface
            key={index}
            style={{ padding: 8, margin: 4, flexGrow: 1, alignItems: "center" }}
          >
            <Image
              source={item.image}
              style={{
                width: width * (30 / 100),
                height: height * (25 / 100),
                resizeMode: "contain",
              }}
            />
          </Surface>
        ))}
      </View>
    </ScrollBox>
  );
}

export default FitCreationScreen;
