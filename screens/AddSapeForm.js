import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, Dimensions } from "react-native";
import ScrollBox from "../components/core/ScrollBox";
import GoBack from "../components/core/GoBack";
import useSape from "../hooks/useSape";
import { IconButton, useTheme } from "react-native-paper";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";

function AddSapeForm() {
  const navigation = useNavigation();
  const { pull } = useSape();
  const theme = useTheme();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <ScrollBox
      contentContainerStyle={{
        alignItems: "center",
        height: height * 2,
      }}
    >
      <GoBack style={{ alignSelf: "flex-start" }} />
      <Image
        source={pull.image}
        style={{ height: "25%", resizeMode: "contain", alignSelf: "center" }}
      />
      {/* @ts-ignore */}
      <View
        style={{
          backgroundColor: theme.colors.quaternary,
          width: width,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.secondary,
          paddingTop: 16,
          paddingBottom: 16,
          ...theme.paddings,
          flexDirection: "row",
          alignSelf: "center",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.primary,
            width: 70,
            height: 50,
            paddingTop: 8,
            paddingBottom: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Printemps</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            width: 70,
            height: 50,
            paddingTop: 8,
            paddingBottom: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Ete</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            width: 70,
            height: 50,
            paddingTop: 8,
            paddingBottom: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Automne</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            width: 70,
            height: 50,
            paddingTop: 8,
            paddingBottom: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Hiver</Text>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: theme.colors.quaternary,
          width: width,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.secondary,
          backgroundColor: theme.colors.quaternary,
          paddingTop: 8,
          paddingBottom: 8,
          ...theme.paddings,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
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
      </View>
      <View
        style={{
          //   backgroundColor: theme.colors.quaternary,
          width: width,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.secondary,
          paddingTop: 8,
          paddingBottom: 8,
          ...theme.paddings,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.quaternary,
        }}
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
      </View>
      <View
        style={{
          //   backgroundColor: theme.colors.quaternary,
          width: width,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.secondary,
          paddingTop: 8,
          paddingBottom: 8,
          ...theme.paddings,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.quaternary,
        }}
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
      </View>
      <View
        style={{
          //   backgroundColor: theme.colors.quaternary,
          width: width,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.secondary,
          paddingTop: 8,
          paddingBottom: 8,
          ...theme.paddings,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.quaternary,
        }}
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
      </View>
      <PrimaryButton
        onPress={() => navigation.navigate("AddedSape")}
        style={{ marginTop: 10 }}
      >
        Ajouter{" "}
      </PrimaryButton>
    </ScrollBox>
  );
}

export default AddSapeForm;