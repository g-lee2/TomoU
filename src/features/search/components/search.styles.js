import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar, Chip } from "react-native-paper";

export const SearchBar = styled(Searchbar)`
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

export const ChipSpaced = styled(Chip)`
  margin: 5px;
  background-color: ${(props) => props.theme.colors.brandGreen.muted};
`;

export const ResetChip = styled(Chip)`
  margin: 5px;
  background-color: #d5d5d5;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
