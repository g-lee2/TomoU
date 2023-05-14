import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileTab } from "../../features/profile/screens/profile.screen";
import { EditProfile } from "../../features/profile/screens/edit-profile.screen";

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name="My Profile" component={ProfileTab} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
};
