import { CameraType, Camera } from "expo-camera";
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View>
      <Camera type={type}>
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;
