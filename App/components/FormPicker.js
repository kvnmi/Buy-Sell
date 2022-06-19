import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({
  list,
  fieldName,
  placeholder,
  iconName,
  PickerListComponent,
  numColumns,
}) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        PickerListComponent={PickerListComponent}
        numColumns={numColumns}
        name={iconName}
        Placeholder={placeholder}
        list={list}
        selectedItem={values[fieldName]}
        onSelectItem={(selectedItem) => setFieldValue(fieldName, selectedItem)}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormPicker;
