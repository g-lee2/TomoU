import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { List } from "react-native-paper";

export const StudyTab = ({ navigation }) => {
  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Create New List")}
        >
          <Icon name="plus-circle" size={40} color="#000" />
        </TouchableOpacity>
      </View>
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
