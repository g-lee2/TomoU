import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { CenteredContainer } from "../components/account.styles";

const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
`;

const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.brandBlue.primary};
`;

export const AccountScreen = ({ navigation }) => {
  return (
    <CenteredContainer>
      <Text>TomoU</Text>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          color="blue"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          color="blue"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </CenteredContainer>
  );
};
