import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    </>
  );
};
