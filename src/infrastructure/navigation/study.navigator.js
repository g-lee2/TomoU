import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StudyTab } from "../../features/study/screens/study.screen";
import { NewList } from "../../features/study/screens/new-list.screen";
import { NewVocab } from "../../features/study/screens/add-vocabulary.screen";

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Study" component={StudyTab} />
      <Stack.Screen name="NewList" component={NewList} />
      <Stack.Screen name="NewVocabulary" component={NewVocab} />
    </Stack.Navigator>
  );
};
