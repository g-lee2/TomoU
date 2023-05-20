import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const InfoCardDetails = ({ route, navigation }) => {
  const { schoolUrl } = route.params;
  return (
    <>
      <Icon name="angle-left" size={30} onPress={() => navigation.goBack()} />
      <Text>{schoolUrl}</Text>
      <Text>INFO</Text>
    </>
  );
};
