import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ListDetails = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("NewVocab")}>
        <Icon name="plus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
