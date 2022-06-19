import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import FormFields from "../components/FormFields";
import SubmitButton from "../components/SubmitButton";
import Screen from "../config/Screen";
import regApi from "../api/userReg";
import loginApi from "../api/auth";
import useAuth from "../Auth/useAuth";
import AppText from "../config/AppText";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const [errorMessage, setErrorMessage] = useState();
  const { logIn } = useAuth();

  const handleRegister = async (userCred) => {
    const result = await regApi.register(userCred);
    if (!result.ok) {
      if (result.data) setErrorMessage(result.data.error);
      else {
        setErrorMessage("Unecpected error occoured.");
      }
      return;
    }

    const { data: authToken } = await loginApi.login(
      userCred.email,
      userCred.password
    );
    logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <AppText>{errorMessage}</AppText>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <FormFields
          placeholder="Name"
          icon="account"
          fieldName="name"
          autoCapitalize="sentences"
          autoCorrect={true}
        />
        <FormFields
          icon="email"
          fieldName="email"
          autoCorrect={false}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <FormFields
          fieldName="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});

export default RegisterScreen;
