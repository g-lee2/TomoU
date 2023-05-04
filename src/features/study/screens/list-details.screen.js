import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ListDetails = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Add New Vocab")}>
        <Icon name="plus-circle" size={40} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
