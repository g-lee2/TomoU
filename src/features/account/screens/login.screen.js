import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  CenteredContainer,
  AccountContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CenteredContainer>
      <Text>TomoU</Text>
      <AccountContainer>
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
      </AccountContainer>
    </CenteredContainer>
  );
};
