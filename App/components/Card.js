import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../config/AppText";
import colors from "../config/colors";

function Card({ imageUrl, title, subtitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          uri={imageUrl}
          tint="light"
          preview={{ uri: thumbnailUrl }}
        />
        <View style={styles.imageTitle}>
          <AppText>{title}</AppText>
          <AppText style={styles.subtitle}>₦{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: 175,
    width: "100%",
  },
  imageTitle: {
    padding: 10,
  },
  subtitle: {
    color: colors.secondary,
    marginTop: 5,
  },
});

export default Card;
