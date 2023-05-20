import styled from "styled-components";
import { Avatar } from "react-native-paper";

export const PostView = styled.View`
  padding: 16px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  border-radius: 10px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const ProfilePicture = styled(Avatar.Icon)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

export const PostName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const PostDateTime = styled.Text`
  font-size: 12px;
  color: #999;
  margin-left: 6px;
`;

export const PostContent = styled.Text`
  color: #000;
`;
