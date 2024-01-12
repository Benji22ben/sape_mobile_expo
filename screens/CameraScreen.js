import { CameraType, Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "react-native-paper";
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
        ...theme.paddings,
        paddingTop: 50,
        paddingBottom: 30,
      }}
      type={type}
    >
      {/* <Box
      style={{
        backgroundColor: "#020202",
        justifyContent: "space-between",
      }}
    > */}
      <GoBack color={theme.colors.tertiary} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "stretch",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={toggleCameraType}>
          <Text style={{ color: "#FFF" }}>Flip</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            borderColor: "#FFF",
            borderWidth: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0)",
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
        <TouchableOpacity onPress={toggleCameraType}>
          <Text style={{ color: "#FFF" }}>Gallery</Text>
        </TouchableOpacity>
      </View>
      {/* </Box> */}
    </Camera>
  );
}

export default CameraScreen;
