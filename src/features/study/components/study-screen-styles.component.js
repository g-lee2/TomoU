import styled from "styled-components/native";
import { Button, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export const StyledListView = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ButtonView = styled.View`
  flex: 1;
`;

export const ListItems = styled.Text`
  flex: 1;
  margin-left: 16px;
  font-size: 18px;
  color: #333;
`;

export const ListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const PostInput = styled(TextInput)`
  flex: 1;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  color: #333;
`;

export const PostButton = styled(Button).attrs((props) => ({
  mode: "contained",
  color: props.theme.colors.brandGreen.primary,
}))`
  height: 40px;
  width: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
  size: "large",
  color: props.theme.colors.brandGreen.primary,
}))``;

export const StyledView = styled.View`
  padding: 16px;
`;

export const StyledTextInput = styled.TextInput`
  height: 40px;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 8px;
  margin-bottom: 12px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.brandGreen.primary};
  border-radius: 8px;
  padding: 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const ListItem = styled.Text`
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
`;
export const StyledFlatList = styled(FlatList)`
  margin-top: 16px;
`;

export const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ListItemText = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #333;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const DeleteIcon = styled(Icon).attrs((props) => ({
  name: "trash-o",
  size: 20,
  color: props.theme.colors.brandGreen.primary,
}))``;
