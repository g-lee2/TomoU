import React from "react";
import { Text } from "react-native";
import {
  PostView,
  PostHeader,
  ProfilePicture,
  PostName,
  PostDateTime,
  PostContent,
  PostCard,
  PostTitle,
  PostDetails,
} from "./home.styles";

export const Post = (props) => {
  return (
    <PostCard>
      <ProfilePicture size={80} icon="account" />
      <PostDetails>
        <PostTitle>{props.name}</PostTitle>
        <PostContent>{props.post}</PostContent>
        <PostDateTime>{props.date}</PostDateTime>
      </PostDetails>
    </PostCard>
  );
};
