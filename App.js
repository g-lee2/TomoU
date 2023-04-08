import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import { Navigation } from "./src/infrastructure/navigation/app.navigator";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <SafeArea>
        <Navigation />
      </SafeArea>
      <StatusBar style="auto" />
    </>
  );
}
