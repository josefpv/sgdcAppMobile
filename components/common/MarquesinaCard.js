import React from "react";
import { Text } from "react-native-elements";
import { View, Pressable } from "react-native";
import Toast from "react-native-toast-message";
//styles
import { utils } from "./../../styles/styles";
import config from "./../../config.json";
//gradient
import { LinearGradient } from "expo-linear-gradient";

const goIntoMarquesina = (data, navigation) => {
  Toast.show({
    type: "info",
    text1: `Entrando a marquesina ${data.nombre}...`,
  });
  navigation.navigate("Marquesina", { data });
};

const MarquesinaCard = ({ data, navigation }) => {
  return (
    <Pressable onPress={() => goIntoMarquesina(data, navigation)}>
      <LinearGradient
        colors={config.colors.gradient}
        style={[utils.marquesinaCard, utils.elevation]}
      >
        <Text style={{ fontFamily: "lato-light", color: "#ffffff" }}>
          Entrar a marquesina:
        </Text>
        <Text
          style={{
            fontFamily: "lato-bold",
            fontSize: 60,
            color: data.estado
              ? config.colors["neutro-light"]
              : config.colors["neutro-light"],
          }}
        >
          {data.nombre}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default MarquesinaCard;
