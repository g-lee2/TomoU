import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { ProfileContextProvider } from "./src/services/profile/profile-info.context";
import { SearchContextProvider } from "./src/services/search/search.context";
import {
  useFonts as useKosugiMaru,
  KosugiMaru_400Regular,
} from "@expo-google-fonts/kosugi-maru";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
          <ProfileContextProvider>
            <SearchContextProvider>
              <Navigation />
            </SearchContextProvider>
          </ProfileContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
