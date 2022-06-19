import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

function FormFields({ fieldName, iconName, ...otherProps }) {
  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        icon={iconName}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        value={values[fieldName]}
        {...otherProps}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default FormFields;
