import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchTab } from "../../features/search/screens/search.screen";
import { InfoCardDetails } from "../../features/search/components/info-card-details.component";

const Stack = createStackNavigator();

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name="Search Tab" component={SearchTab} />
      <Stack.Screen name="School Details" component={InfoCardDetails} />
    </Stack.Navigator>
  );
};
