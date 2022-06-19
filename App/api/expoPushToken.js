import client from "./client";

const regToken = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  regToken,
};
