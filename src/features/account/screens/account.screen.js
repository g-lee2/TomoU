import React, { useEffect } from "react";
import {
  BackgroundImage,
  AppName,
  Overlay,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <BackgroundImage>
      <Overlay>
        <AppName>TomoU</AppName>
      </Overlay>
    </BackgroundImage>
  );
};
