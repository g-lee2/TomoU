import React, { useContext, useReducer } from "react";
import { Text, ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import {
  ProfileView,
  ButtonContainer,
  Buttons,
  SafeArea,
  StyledChip,
  ChipContainer,
} from "../components/profile.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProfileTab = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <ButtonContainer>
        <Buttons>
          <Text>Edit</Text>
        </Buttons>
        <Buttons>
          <Text onPress={onLogout}>Logout</Text>
        </Buttons>
      </ButtonContainer>
      <ProfileView>
        <Avatar.Icon size={80} icon="account" />
        <Text>Tony August</Text>
      </ProfileView>
      <ProfileView>
        <Text>Goals: Pass N1 July 2023</Text>
      </ProfileView>
      <ChipContainer>
        <StyledChip>JLPT N1</StyledChip>
        <StyledChip>&#x1F4CD; Japan</StyledChip>
      </ChipContainer>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="JLPT Textbooks">
            <List.Item title="Shin Kanzen Master" />
            <List.Item title="Sou Matome" />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <List.Item title="満月珈琲店 1" />
            <List.Item title="満月珈琲店 2" />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <List.Item title="Aimyon" />
            <List.Item title="Radwimps" />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <List.Item title="One Piece" />
            <List.Item title="Demon Slayer" />
            <List.Item title="Naruto" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
