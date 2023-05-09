import styled from "styled-components";
import { Button } from "react-native-paper";

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.brandBlue.primary};
`;
