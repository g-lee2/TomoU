import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StudyTab } from "../../features/study/screens/study.screen";
import { NewList } from "../../features/study/screens/new-list.screen";
import { NewVocab } from "../../features/study/screens/add-vocabulary.screen";
import { ListDetails } from "../../features/study/screens/list-details.screen";

const Stack = createStackNavigator();

export const StudyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Lists" component={StudyTab} />
      {/* <Stack.Screen name="Create New List" component={NewList} /> */}
      <Stack.Screen name="Add New Vocab" component={NewVocab} />
      <Stack.Screen name="List Details" component={ListDetails} />
    </Stack.Navigator>
  );
};
