import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import PickerListWithIcons from "../components/PickerListWithIcons";
import AppForm from "../components/AppForm";
import FormFields from "../components/FormFields";
import FormPicker from "../components/FormPicker";
import SubmitButton from "../components/SubmitButton";
import Screen from "../config/Screen";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listings from "../api/listings";
import UploadScreen from "../components/UploadScreen";

const categories = [
  {
    backgroundcolor: "#fc5c65",
    iconName: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundcolor: "#fd9644",
    iconName: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundcolor: "#fed330",
    iconName: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundcolor: "#26de81",
    iconName: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundcolor: "#2bcbba",
    iconName: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundcolor: "#45aaf2",
    iconName: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundcolor: "#4b7bec",
    iconName: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundcolor: "#a55eea",
    iconName: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundcolor: "#778ca3",
    iconName: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000000).label("Price"),
  description: Yup.string().optional().label("Description"),
  category: Yup.object().nullable().required(),
  images: Yup.array().min(1, "Please select at least one image"),
});

function ListingEditScreen(props) {
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await listings.addListings(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      alert("Sorry, could not post listings, try again");
      console.log(response.problem);
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker fieldName="images" />
        <FormFields
          iconName="card-text"
          maxLenght={225}
          fieldName="title"
          placeholder="Title"
          autoCapitalize="sentences"
          autoCorrect={true}
        />
        <FormFields
          iconName="cash"
          fieldName="price"
          maxLenght={8}
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <FormPicker
          numColumns={3}
          fieldName="category"
          list={categories}
          placeholder="Categories"
          iconName="apps"
          PickerListComponent={PickerListWithIcons}
        />
        <FormFields
          maxLenght={225}
          iconName="card-text"
          fieldName="description"
          placeholder="Description"
          autoCapitalize="sentences"
          multiline
          numberOfLines={3}
          autoCorrect={true}
        />
        <SubmitButton title="Post" color="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 5,
  },
});

export default ListingEditScreen;
