import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../config/Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import listings from "../api/listings";
import AppText from "../config/AppText";
import AppButton from "../config/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const { data: list, error, loading, request: loadListings } = useApi(
    listings.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve feeds try again</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={list}
        keyExtractor={(m) => m.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            title={item.title}
            subtitle={item.price}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
    padding: 15,
    paddingTop: 35,
  },
});

export default ListingScreen;
