import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, size, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.mediumgrey}
          size={25}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        style={styles.text}
        {...otherProps}
        placeholderTextColor={colors.mediumgrey}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightgrey,
    padding: 8,
    paddingLeft: 13,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    width: "100%",
  },
  iconStyle: {
    marginRight: 8,
  },
});

export default AppTextInput;
