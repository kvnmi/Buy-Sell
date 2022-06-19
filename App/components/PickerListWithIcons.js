import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../config/AppText";
import Icons from "./Icons";

function PickerListWithIcons({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <Icons
          backgroundcolor={item.backgroundcolor}
          name={item.iconName}
          size={80}
        />
      </View>
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default PickerListWithIcons;
