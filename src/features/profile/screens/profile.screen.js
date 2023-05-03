import React from "react";
import { Text } from "react-native";
import { Avatar, Badge } from "react-native-paper";
import styled from "styled-components";

const ProfilePicView = styled.View`
  align-self: center;
  margin: 20px;
`;

const colorBadges = (props) => {
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

const StyledBadge = styled(Badge)`
  background-color: ${colorBadges};
`;

export const ProfileTab = () => {
  return (
    <>
      <ProfilePicView>
        <Avatar.Icon size={80} icon="account" />
        <Text>Tony August</Text>
        <Text>Logout</Text>
        <Text>Edit</Text>
        <StyledBadge>JLPT N1</StyledBadge>
        <StyledBadge>Lives in Japan</StyledBadge>
        <StyledBadge>JLPT textbooks</StyledBadge>
        <StyledBadge>Books I read</StyledBadge>
        <StyledBadge>Goals</StyledBadge>
        <StyledBadge>Playlist</StyledBadge>
        <StyledBadge>Shows</StyledBadge>
        <StyledBadge>Movies</StyledBadge>
      </ProfilePicView>
    </>
  );
};
