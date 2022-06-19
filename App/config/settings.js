import Constants from "expo-constants";

const settings = {
  dev: {
    apiURL: "http://192.168.15.177:9000/api",
  },
  staging: {
    apiURL: "http://192.168.15.177:9000/api",
  },
  prod: {
    apiURL: "http://192.168.15.177:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
