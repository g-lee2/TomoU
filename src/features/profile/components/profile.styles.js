import styled from "styled-components";
import { TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { Chip } from "react-native-paper";

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

export const StyledChip = styled(Chip)`
  background-color: ${colorChips};
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
`;
