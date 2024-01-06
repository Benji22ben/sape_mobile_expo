import { CameraType, Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraPermission, setCameraPermission] = useState(false);

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

  return (
    <Camera style={{ flex: 1, justifyContent: "center" }} type={type}>
      <View>
        <TouchableOpacity onPress={toggleCameraType}>
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

export default CameraScreen;
