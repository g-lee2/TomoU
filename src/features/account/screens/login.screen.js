import React, { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  CenteredContainer,
  AccountContainer,
  AuthButton,
  BackgroundImage,
  SignUpContainer,
  SignUpText,
  Overlay,
  TextInputs,
  AppNameTwo,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { TouchableOpacity } from "react-native-gesture-handler";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <BackgroundImage>
      <Overlay>
        <CenteredContainer>
          <AppNameTwo>TomoU</AppNameTwo>
          <AccountContainer>
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
            <SignUpContainer>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <SignUpText>Sign Up</SignUpText>
              </TouchableOpacity>
            </SignUpContainer>
          </AccountContainer>
        </CenteredContainer>
      </Overlay>
    </BackgroundImage>
  );
};
