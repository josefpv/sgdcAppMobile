import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import config from "./../config.json";
//Components
import Inicio from "./../components/Inicio";
import Ajustes from "./../components/Ajustes";
import Marquesinas from "./../components/Marquesinas";

//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import NavigatorAll from "./NavigatorAll";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Inicio") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Ajustes") {
              iconName = focused ? "md-settings" : "md-settings-outline";
            } else if (route.name === "Marquesinas") {
              iconName = focused
                ? "md-battery-charging"
                : "md-battery-dead-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: config.colors["primary"],
          tabBarInactiveTintColor: config.colors.disabled,
        })}
      >
        <Tab.Screen name="Inicio" component={NavigatorAll} />
        <Tab.Screen name="Marquesinas" component={Marquesinas} />
        <Tab.Screen name="Ajustes" component={Ajustes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
