import React from "react";
import { Text } from "react-native";
import {
  Address,
  InstituteCard,
  InstituteCardCardCover,
  Info,
} from "./info-card-styles.component";

export const InstituteInfoCard = () => {
  return (
    <InstituteCard elevation={5}>
      <InstituteCardCardCover
        source={require("../../../../assets/akamonkai.jpeg")}
      />
      <Info>
        <Text>Akamonkai</Text>
        <Address>
          2 Chome-54-4 Nishinippori, Arakawa City, Tokyo 116-0013, Japan
        </Address>
      </Info>
    </InstituteCard>
  );
};
