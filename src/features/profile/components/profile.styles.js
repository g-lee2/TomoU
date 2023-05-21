import styled from "styled-components";
import { TouchableOpacity, SafeAreaView, StatusBar, Text } from "react-native";
import { Chip, TextInput, Avatar, List, Button } from "react-native-paper";

export const ProfileView = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const AvatarIcon = styled(Avatar.Icon)`
  width: 80px;
  height: 80px;
  border-radius: 60px;
  margin-bottom: 16px;
`;

export const BioText = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
`;

export const UsernameText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Buttons = styled(TouchableOpacity)`
  width: 30%;
  padding: 12px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
`;

export const ButtonText = styled(Text)`
  color: #333;
  font-weight: bold;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const StyledChipJapan = styled(Chip)`
  background-color: ${(props) => props.theme.colors.brandBlue.muted};
  margin: 5px;
  height: 35px;
`;

export const StyledChipJlpt = styled(Chip)`
  background-color: ${(props) => props.theme.colors.brandPink.muted};
  margin: 5px;
  height: 35px;
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

export const NameBioTextInput = styled(TextInput)`
  height: 30px;
  width: 200px;
`;

export const ScreenContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const EditProfileInput = styled(TextInput)`
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 15px;
  background-color: #f5f5f5;
`;

export const ChipScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const SaveButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.brandGreen.primary};
`;
