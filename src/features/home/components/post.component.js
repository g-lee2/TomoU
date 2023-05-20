import React from "react";
import { Text } from "react-native";
import {
  PostView,
  PostHeader,
  ProfilePicture,
  PostName,
  PostDateTime,
  PostContent,
} from "./home.styles";

export const Post = (props) => {
  return (
    <PostView>
      <PostHeader>
        <ProfilePicture size={80} icon="account" />
        <PostName>{props.name}</PostName>
        <PostDateTime>{props.date}</PostDateTime>
      </PostHeader>
      <PostContent>{props.post}</PostContent>
    </PostView>
  );
};
