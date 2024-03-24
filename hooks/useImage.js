import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UPLOAD_IMAGE } from "../constants";
import { useMutation } from "@tanstack/react-query";

export function useImage() {
  const postImage = async (image) => {
    const data = { image: image.base64 };

    const token = await AsyncStorage.getItem("token");
    const response = await fetch(UPLOAD_IMAGE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  };

  const {
    isPending: isPendingImage,
    mutate: rembgImage,
    data: removedBgImage,
  } = useMutation({
    mutationFn: (image) => postImage(image),
  });

  return { rembgImage, isPendingImage, removedBgImage };
}
