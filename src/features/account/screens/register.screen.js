import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  return (
    <>
      <Text>TomoU</Text>
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
      <TextInput
        label="Confirm Password"
        value={repeatedPassword}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p) => setRepeatedPassword(p)}
      />
    </>
  );
};
