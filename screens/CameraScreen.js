import { CameraType, Camera } from "expo-camera";
import React, { useCallback, useEffect, useState } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme, IconButton } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import GoBack from "../components/core/GoBack";
import { useImage } from "../hooks/useImage";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(false);
  const navigation = useNavigation();
  const [camera, setCamera] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setMounted(true);

      return () => {
        setMounted(false);
      };
    }, [])
  );

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");
    if (cameraPermission.status !== "granted") {
      alert("Permission for media access needed.");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera && cameraReady && cameraPermission) {
      const photoData = await camera.takePictureAsync({
        ratio: "4:3",
        base64: true,
      });
      // const removedBgImage = await postImage(photoData);
      // @ts-ignore
      navigation.navigate("AddSapeForm", { photoData });
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const theme = useTheme();

  return (
    <>
      {mounted && (
        <Camera
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
          ref={(ref) => setCamera(ref)}
          type={type}
          ratio="4:3"
          onCameraReady={() => setCameraReady(true)}
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
              <TouchableOpacity onPress={() => takePicture()}>
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
      )}
    </>
  );
}

export default CameraScreen;
