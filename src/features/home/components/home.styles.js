import styled from "styled-components";
import { Button } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

export const PostView = styled.View`
  padding: 16px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  border-radius: 10px;
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

export const ScreenContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const PostInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PostInput = styled(TextInput)`
  flex: 1;
  margin-right: 10px;
  background-color: #fff;
`;

export const PostButton = styled(Button)`
  color: ${(props) => props.theme.colors.brandGreen.primary};
`;

export const PostCard = styled.View`
  flex-direction: row;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const PostDetails = styled.View`
  flex: 1;
`;

export const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PostContent = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const PostDateTime = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;
