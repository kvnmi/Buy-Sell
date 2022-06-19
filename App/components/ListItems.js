import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../config/AppText";
import colors from "../config/colors";

function ListItems({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
        <View style={styles.conatiner}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={{ marginLeft: 15, justifyContent: "center", flex: 1 }}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subttitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 36,
  },
  title: {
    fontWeight: "500",
  },
  subttitle: {
    color: colors.mediumgrey,
  },
});

export default ListItems;
