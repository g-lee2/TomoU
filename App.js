import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import styled from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  useFonts as useKosugiMaru,
  KosugiMaru_400Regular,
} from "@expo-google-fonts/kosugi-maru";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  const [oswaldLoaded] = useKosugiMaru({
    KosugiMaru_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
