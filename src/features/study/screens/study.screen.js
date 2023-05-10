import React from "react";
import { View, TouchableOpacity } from "react-native";
import { List, TextInput, Chip } from "react-native-paper";
import {
  StyledAddListView,
  TextView,
  ChipView,
} from "../components/study-screen-styles.component";

export const StudyTab = ({ navigation }) => {
  return (
    <>
      <StyledAddListView>
        <TextView>
          <TextInput />
        </TextView>
        <ChipView>
          <TouchableOpacity
            onPress={() => navigation.navigate("Create New List")}
          >
            <Chip>Add</Chip>
          </TouchableOpacity>
        </ChipView>
      </StyledAddListView>
      <View>
        <List.Section>
          <List.Item
            title="Shin Kanzen Master"
            onPress={() => navigation.navigate("List Details")}
          />
        </List.Section>
      </View>
    </>
  );
};
