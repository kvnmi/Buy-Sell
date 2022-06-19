import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermision = async () => {
    try {
      const result = await ImagePicker.requestCameraRollPermissionsAsync();
      if (!result.granted) {
        alert("You need to enable permission to use this functionality");
      }
    } catch (error) {
      console.log("Something Went Wrong", error);
    }
  };

  useEffect(() => {
    requestPermision();
  }, []);

  const handleChange = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!imageUri && !result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleChange}>
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    height: 70,
    width: 70,
    borderRadius: 15,
    marginRight: 4,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
});

export default ImageInput;
