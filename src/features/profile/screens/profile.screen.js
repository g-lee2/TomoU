import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Avatar, Chip, List } from "react-native-paper";
import styled from "styled-components";

const ProfileView = styled.View`
  align-self: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-horizontal: 10px;
`;

const Buttons = styled(TouchableOpacity)`
  border-width: 1px;
  border-radius: 3px;
  height: 25px;
  justify-content: center;
  padding: 3px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const colorChips = (props) => {
  const randomNumb = Math.floor(Math.random() * 4);
  let color;
  if (randomNumb === 0) {
    color = props.theme.colors.brandBlue.secondary;
  } else if (randomNumb === 1) {
    color = props.theme.colors.brandGreen.secondary;
  } else if (randomNumb === 2) {
    color = props.theme.colors.brandPurple.secondary;
  } else {
    color = props.theme.colors.brandPink.secondary;
  }
  return color;
};

const StyledChip = styled(Chip)`
  background-color: ${colorChips};
`;

const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
`;

export const ProfileTab = () => {
  return (
    <SafeArea>
      <ButtonContainer>
        <Buttons>
          <Text>Edit</Text>
        </Buttons>
        <Buttons>
          <Text>Logout</Text>
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
