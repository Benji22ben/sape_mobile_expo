import React from "react";
import { Text } from "react-native-paper";
import useSape from "../hooks/useSape";
import Box from "../components/core/Box";
import SapeImageCard from "../components/SapeImageCard";
import { Dimensions, View, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FitCreationScreen() {
  const { outfitOfTheDay } = useSape();

  const margin = 4;
  const navigation = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <Box gap={38}>
      <Text>La Tenue du jour</Text>
      <Text>
        Sape te propose cette tenue pour aujourd’hui te convient elle ? 😍​
      </Text>
      <Text>N’hésite pas à changer d’habit en appuyant dessus</Text>

      {/* <View
        style={{
          flex: 1,
          alignSelf: "center",
          flexWrap: "wrap",
          gap: 38,
        }}
      >
        {outfitOfTheDay.map((item, index) => (
          <SapeImageCard
            key={index}
            index={index}
            item={item}
            style={{
              width: width - 64,
              alignSelf: "center",
              height: height / 12,
            }}
          />
        ))}
      </View> */}
      <FlatList
        style={{ flexWrap: "wrap" }}
        data={outfitOfTheDay}
        // numColumns={2}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              margin: 5,
            }}
          >
            <Image source={item.image} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </Box>
  );
}

export default FitCreationScreen;
