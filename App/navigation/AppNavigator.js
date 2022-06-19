import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "../Screens/ListingEditScreen";
import expoPushTokenApi from "../api/expoPushToken";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    requestPushNotificationToken();
  }, []);

  const requestPushNotificationToken = async () => {
    try {
      const response = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!response.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      //console.log(token.data);
      try {
        expoPushTokenApi.regToken(token.data);
      } catch (error) {
        console.log(("Couldn't", error));
      }
    } catch (error) {
      console.log("Couldn't get token", error);
    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={40}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
