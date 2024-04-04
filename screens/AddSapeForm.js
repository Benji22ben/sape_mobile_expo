import React, { useEffect, useRef } from "react";
import { Image, View, Text, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import ScrollBox from "../components/core/ScrollBox";
import GoBack from "../components/core/GoBack";
import { Divider, IconButton, useTheme } from "react-native-paper";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";
import { useImage } from "../hooks/useImage";
import SapeToggleButton from "../components/SapeToggleButton";
import FormSelectable from "../components/FormSelectable";

function AddSapeForm({ route, navigation }) {
  const theme = useTheme();
  const { photoData } = route.params;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const { rembgImage, isPendingImage, removedBgImage } = useImage();

  useEffect(() => {
    rembgImage(photoData);
  }, [photoData]);

  return (
    <ScrollBox
      contentContainerStyle={{
        alignItems: "center",
        height: height * 2,
        gap: 16,
      }}
    >
      <GoBack style={{ alignSelf: "flex-start", marginLeft: -20 }} />
      {isPendingImage ? (
        <ActivityIndicator
          size={100}
          style={{ marginBottom: 20 }}
          animating={true}
          color={theme.colors.primary}
        />
      ) : (
        <Image
          source={{ uri: `data:image/png;base64,${removedBgImage?.image}` }}
          style={{
            width: "100%",
            height: 400,
            resizeMode: "cover",
            alignSelf: "center",
          }}
        />
      )}
      <View>
        <FormSelectable>
          <SapeToggleButton label={"Printemps"} />
          <SapeToggleButton label={"Ete"} />
          <SapeToggleButton label={"Automne"} />
          <SapeToggleButton label={"Hiver"} />
        </FormSelectable>
        <Divider />
        <FormSelectable
          spaceBetween
          onPress={() => navigation.navigate("OptionsSelection", { image: removedBgImage?.image, text: "Catégorie" })}
        >
          <Text style={{ color: theme.colors.secondary }}>Catégorie</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Sweatshirt</Text>
            <IconButton
              size={20}
              icon="ant_right"
              iconColor={theme.colors.secondary}
            />
          </View>
        </FormSelectable>
        <Divider />
        <FormSelectable
          spaceBetween
        >
          <Text style={{ color: theme.colors.secondary }}>Motifs</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Pas de motif</Text>
            <IconButton
              size={20}
              icon="ant_right"
              iconColor={theme.colors.secondary}
            />
          </View>
        </FormSelectable>
        <Divider />
        <FormSelectable
          spaceBetween
        >
          <Text style={{ color: theme.colors.secondary }}>Couleur(s)</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 20,
                backgroundColor: theme.colors.primary,
              }}
            />
            <IconButton
              size={20}
              icon="ant_right"
              iconColor={theme.colors.secondary}
            />
          </View>
        </FormSelectable>
        <Divider />
        <FormSelectable
          spaceBetween
        >
          <Text style={{ color: theme.colors.secondary }}>Marque</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Carhartt</Text>
            <IconButton
              size={20}
              icon="ant_right"
              iconColor={theme.colors.secondary}
            />
          </View>
        </FormSelectable>
      </View>
      <PrimaryButton
        textColor="white"
        style={{ width: width * 0.8, paddingVertical: 4 }}
        onPress={() => navigation.navigate("AddedSape")}
      >
        Ajouter{" "}
      </PrimaryButton>
    </ScrollBox>
  );
}

export default AddSapeForm;
