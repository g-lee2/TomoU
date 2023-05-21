import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  CenteredContainer,
  AccountContainer,
  AuthButton,
  BackgroundImage,
  Overlay,
  TextInputs,
  AppNameTwo,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <BackgroundImage>
      <Overlay>
        <CenteredContainer>
          <AppNameTwo>TomoU</AppNameTwo>
          <AccountContainer>
            <Icon
              name="angle-left"
              size={30}
              onPress={() => navigation.goBack()}
            />
            <TextInputs
              label="Email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(e) => setEmail(e)}
            />
            <TextInputs
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <TextInputs
              label="Confirm Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
            {error && <Text>{error}</Text>}
            {!isLoading ? (
              <AuthButton
                icon="leaf"
                mode="contained"
                color="blue"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.blue300} />
            )}
          </AccountContainer>
        </CenteredContainer>
      </Overlay>
    </BackgroundImage>
  );
};
