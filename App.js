import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import { Tabs } from "./src/infrastructure/navigation/app.navigator";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <Tabs />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
