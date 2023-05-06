import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.english};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const InstituteCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: 6px;
`;

export const InstituteCardCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
