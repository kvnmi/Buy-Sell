import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../config/AppText";
import ListItems from "../components/ListItems";

function ListingDetailsScreen({ route }) {
  const listings = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listings.images[0].url}
        preview={{ uri: listings.images[0].thumbnailUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listings.title}</AppText>
        <AppText style={styles.price}>₦{listings.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/Tomiwa.jpg")}
            title="Olujulo Tomiwa"
            subtitle="2 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
