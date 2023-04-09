import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation/app.navigator";
import styled from "styled-components";
import { theme } from "./src/infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Navigation />
        </SafeArea>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
