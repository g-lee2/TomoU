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
      <Stack.Screen name="Lists" component={StudyTab} />
      <Stack.Screen name="NewList" component={NewList} />
      <Stack.Screen name="NewVocab" component={NewVocab} />
      <Stack.Screen name="ListDetails" component={ListDetails} />
    </Stack.Navigator>
  );
};
