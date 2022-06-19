import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ fieldName }) {
  const { errors, values, setFieldValue, touched } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(fieldName, [...values[fieldName], uri]);
  };
  const handleDelete = (uri) => {
    setFieldValue(
      fieldName,
      values[fieldName].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[fieldName]}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleDelete(uri)}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default FormImagePicker;
