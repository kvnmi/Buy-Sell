import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../config/AppText";
import colors from "../config/colors";
import Screen from "../config/Screen";
import PickerList from "./PickerList";

function AppPicker({
  name,
  Placeholder,
  list,
  selectedItem,
  numColumns = 1,
  onSelectItem,
  PickerListComponent = PickerList,
}) {
  const [seeModal, setSeeModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setSeeModal(true)}>
        <View style={styles.container}>
          {name && (
            <MaterialCommunityIcons
              name={name}
              color={colors.mediumgrey}
              size={25}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : Placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.mediumgrey}
            size={30}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={seeModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setSeeModal(false)} />
          <FlatList
            data={list}
            keyExtractor={(x) => x.value.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <PickerListComponent
                item={item}
                onPress={() => {
                  setSeeModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightgrey,
    width: "100%",
    padding: 8,
    borderRadius: 25,
    marginVertical: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "grey",
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
});

export default AppPicker;
