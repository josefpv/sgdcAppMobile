import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//React Native Elements
import { SafeAreaProvider } from "react-native-safe-area-context";
//Fonts
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
//Navigator
import Navigator from "./navigation/Navigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "titilliumWeb-regular": require("./assets/fonts/TitilliumWeb-Regular.ttf"),
    "titilliumWeb-bold": require("./assets/fonts/TitilliumWeb-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={() => console.log("error")}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
