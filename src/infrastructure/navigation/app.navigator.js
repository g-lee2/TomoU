import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeTab } from "../../features/home/screens/home.screen";
import { StudyStackNavigator } from "./study.navigator";
import { ProfileStackNavigator } from "./profile.navigator";
import { SearchStackNavigator } from "./search.navigator";
import { ProfileTab } from "../../features/profile/screens/profile.screen";

const screenOptions = ({ route }) => {
  let iconName;

  if (route.name === "Profile") {
    iconName = "md-person";
  } else if (route.name === "Search") {
    iconName = "md-search";
  } else if (route.name === "Study") {
    iconName = "md-reader";
  } else if (route.name === "Home") {
    iconName = "home";
  }

  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarOptions: {
      activeTintColor: `${(props) => props.theme.colors.brandGreen.secondary}`,
      inactiveTintColot: `${(props) => props.theme.colors.ui.secondary}`,
    },
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Study" component={StudyStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};
