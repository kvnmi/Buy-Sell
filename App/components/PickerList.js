import React from "react";
import AppText from "../config/AppText";
import { TouchableOpacity } from "react-native";

function PickerList({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 15 }}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerList;
