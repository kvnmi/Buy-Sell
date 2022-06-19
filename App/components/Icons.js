import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

function Icons({ name, size = 40, backgroundcolor, iconColor = "white" }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundcolor,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

export default Icons;
