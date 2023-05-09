import React from "react";
import { Text } from "react-native";
import {
  Address,
  InstituteCard,
  InstituteCardCardCover,
  Info,
} from "./info-card-styles.component";

export const InstituteInfoCard = ({ name, address, image }) => {
  return (
    <InstituteCard elevation={5}>
      <InstituteCardCardCover source={{ uri: image }} />
      <Info>
        <Text>{name}</Text>
        <Address>{address}</Address>
      </Info>
    </InstituteCard>
  );
};
