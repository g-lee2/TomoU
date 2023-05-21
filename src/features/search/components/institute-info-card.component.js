import React from "react";
import {
  Address,
  InstituteCard,
  InstituteCardCardCover,
  Info,
  Name,
  AddressView,
} from "./info-card-styles.component";
import Icon from "react-native-vector-icons/FontAwesome";
import { Icon as Ionicon } from "react-native-vector-icons/Ionicons";

export const InstituteInfoCard = ({ name, address, image }) => {
  return (
    <InstituteCard elevation={5}>
      <InstituteCardCardCover source={{ uri: image }} />
      <Info>
        <Name>{name}</Name>
        <AddressView>
          <Icon name="map-marker" size={20} color="#BA0021" margin={3} />
          <Address>{address}</Address>
        </AddressView>
      </Info>
    </InstituteCard>
  );
};
