import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Buttons = styled(TouchableOpacity)`
  border-width: 1px;
  border-radius: 3px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const NewVocab = ({ navigation }) => {
  return (
    <View>
      <TextInput placeholder="Vocabulary" />
      <TextInput placeholder="Definition" />
      <Buttons>
        <Text onPress={() => navigation.navigate("ListDetails")}>
          Add Vocab
        </Text>
      </Buttons>
    </View>
  );
};