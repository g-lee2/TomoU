import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { EventsTab } from "./events.navigator";
import { ProfileTab } from "./profile.navigator";
import { SearchTab } from "./search.navigator";
import { StudyTab } from "./study.navigator";

const screenOptions = ({ route }) => {
  let iconName;

  if (route.name === "Profile") {
    iconName = "md-person";
  } else if (route.name === "Search") {
    iconName = "md-search";
  } else if (route.name === "Study") {
    iconName = "md-reader";
  } else if (route.name === "Events") {
    iconName = "md-beer";
  }

  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarOptions: {
      activeTintColor: `${(props) => props.theme.colors.brandBlue.primary}`,
      inactiveTintColot: `${(props) => props.theme.colors.ui.secondary}`,
    },
  };
};

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Events" component={EventsTab} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Study" component={StudyTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};