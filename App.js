import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
//React Native Elements
import { SafeAreaProvider } from "react-native-safe-area-context";
//Fonts
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
//Navigator
import Navigator from "./navigation/Navigator";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers";

//to use redux dev tools
const store = createStore(rootReducers, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("./assets/fonts/Lato-Light.ttf"),
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
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
        <Toast />
      </SafeAreaProvider>
    </Provider>
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
