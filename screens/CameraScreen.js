import { CameraType, Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme, IconButton } from "react-native-paper";
import Box from "../components/core/Box";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/core/GoBack";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(false);
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    // const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    // console.log(imagePermission.status);

    // setGalleryPermission(imagePermission.status === 'granted');

    if (
      // imagePermission.status !== 'granted' &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const theme = useTheme();

  return (
    <Camera
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
      type={type}
    >
      <View
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          paddingLeft: 10,
          backgroundColor: "black",
        }}
      >
        <GoBack color={theme.colors.tertiary} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "black",
          justifyContent: "space-between",
          ...theme.paddings,
          paddingTop: 30,
          paddingBottom: 100,
        }}
      >
        <IconButton
          icon={"ant_retweet"}
          iconColor={theme.colors.tertiary}
          size={30}
          rippleColor={"#FFFFFF"}
          onPress={toggleCameraType}
        />
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            borderColor: theme.colors.tertiary,
            borderWidth: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => navigation.navigate("AddSapeForm")}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                padding: 10,
                backgroundColor: theme.colors.tertiary,
              }}
            />
          </TouchableOpacity>
        </View>
        <IconButton
          icon={"ant_picture"}
          iconColor={theme.colors.tertiary}
          size={30}
          rippleColor={"#FFFFFF"}
        />
      </View>
    </Camera>
  );
}

export default CameraScreen;
