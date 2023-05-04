import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";

const Buttons = styled(TouchableOpacity)`
  border-width: 1px;
  border-radius: 3px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const NewList = () => {
  return (
    <View>
      <TextInput placeholder="Title" />
      <Buttons>
        <Text>Create New List</Text>
      </Buttons>
    </View>
  );
};
