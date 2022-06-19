import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushToken";

export default useNotification = () => {
  useEffect(() => {
    requestPushNotificationToken();

    Notifications.addNotificationReceivedListener((notification) =>
      navigation.navigate("Account")
    );
  }, []);

  const requestPushNotificationToken = async () => {
    try {
      const response = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!response.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.regToken(token.data);
      //expoPushTokenApi.regToken(token.data);
    } catch (error) {
      console.log("Couldn't get token", error);
    }
  };
};
