import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const StudyTab = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("NewList")}>
        <Icon name="plus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
