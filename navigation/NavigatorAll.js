import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componetns
import Marquesina from "../components/Marquesina";
import Inicio from "../components/Inicio";

const Stack = createNativeStackNavigator();

const NavigatorAll = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Marquesina" component={Marquesina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorAll;
