import styled from "styled-components";
import { TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { Chip, TextInput } from "react-native-paper";

export const ProfileView = styled.View`
  align-self: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-horizontal: 10px;
`;

export const Buttons = styled(TouchableOpacity)`
  border-width: 1px;
  border-radius: 3px;
  height: 25px;
  justify-content: center;
  padding: 3px;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const StyledChipJapan = styled(Chip)`
  background-color: ${(props) => props.theme.colors.brandBlue.secondary};
`;

export const StyledChipJlpt = styled(Chip)`
  background-color: ${(props) => props.theme.colors.brandPink.secondary};
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
`;

export const NameBioTextInput = styled(TextInput)`
  height: 30px;
  width: 200px;
`;
