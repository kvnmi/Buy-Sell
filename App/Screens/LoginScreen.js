import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../config/Screen";
import FormFields from "../components/FormFields";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import useAuth from "../Auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      return setLoginError(true);
    }
    setLoginError(false);

    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Email and/or password is not valid"
          visible={loginError}
        />
        <FormFields
          fieldName="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={true}
        />
        <FormFields
          fieldName="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  image: {
    height: 80,
    width: 80,
    marginVertical: 35,
    alignSelf: "center",
  },
});

export default LoginScreen;
