import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const ProfileTab = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const SearchTab = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const StudyTab = () => {
  return (
    <View>
      <Text>Study</Text>
    </View>
  );
};

const EventsTab = () => {
  return (
    <View>
      <Text>Events</Text>
    </View>
  );
};

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
  };
};

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColot: "gray",
        }}
      >
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Study" component={StudyTab} />
        <Tab.Screen name="Events" component={EventsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
