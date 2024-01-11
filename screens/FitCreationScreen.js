import React from "react";
import { Text } from "react-native-paper";
import useSape from "../hooks/useSape";
import ScrollBox from "../components/core/ScrollBox";
import SapeImageCard from "../components/SapeImageCard";

function FitCreationScreen() {
  const { outfitOfTheDay } = useSape();

  return (
    <ScrollBox gap={38}>
      <Text>La Tenue du jour</Text>
      <Text>
        Sape te propose cette tenue pour aujourd’hui te convient elle ? 😍​
      </Text>
      <Text>N’hésite pas à changer d’habit en appuyant dessus</Text>

      {outfitOfTheDay &&
        outfitOfTheDay.map((clothing, index) => (
          <SapeImageCard key={index} index={index} item={clothing} />
        ))}
    </ScrollBox>
  );
}

export default FitCreationScreen;
