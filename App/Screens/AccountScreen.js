import React from "react";
import Screen from "../config/Screen";
import { View, StyleSheet, FlatList } from "react-native";

import ListItems from "../components/ListItems";
import colors from "../config/colors";
import Icons from "../components/Icons";
import ListSeparator from "../components/ListSeparator";

import useAuth from "../Auth/useAuth";

const listitems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  return (
    <Screen style={styles.screen}>
      <View style={styles.listContainer}>
        <ListItems
          title={user.name}
          subtitle={user.email}
          image={require("../assets/Tomiwa.jpg")}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listitems}
          keyExtractor={(x) => x.title}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icons
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>
      <View style={styles.listContainer}>
        <ListItems
          title="Log Out"
          IconComponent={
            <Icons name="logout" backgroundcolor={colors.logout} />
          }
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
});

export default AccountScreen;
