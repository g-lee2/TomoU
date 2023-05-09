import React, { useState, useContext } from "react";
import { TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  CenteredContainer,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <CenteredContainer>
      <AccountContainer>
        <Text>TomoU</Text>
        <Icon name="angle-left" size={30} onPress={() => navigation.goBack()} />
        <TextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && <Text>{error}</Text>}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            color="blue"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </AccountContainer>
    </CenteredContainer>
  );
};
