import React from "react";
import { useFormikContext } from "formik";

import AppButtons from "../config/AppButton";

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return <AppButtons title={title} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;
