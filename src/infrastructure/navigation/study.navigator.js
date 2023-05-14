import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StudyTab } from "../../features/study/screens/study.screen";
import { ListDetails } from "../../features/study/screens/list-details.screen";

const Stack = createStackNavigator();

export const StudyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Lists" component={StudyTab} />
      <Stack.Screen name="List Details" component={ListDetails} />
    </Stack.Navigator>
  );
};
