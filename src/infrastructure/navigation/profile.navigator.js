import React from "react";
import { Avatar } from "react-native-paper";
import styled from "styled-components";

const ProfilePicView = styled.View`
  align-self: center;
  margin: 20px;
`;

export const ProfileTab = () => {
  return (
    <>
      <ProfilePicView>
        <Avatar.Icon size={80} icon="account" />
      </ProfilePicView>
    </>
  );
};
