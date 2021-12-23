import React from "react";
import { Text } from "react-native-elements";
import { View, Pressable } from "react-native";
import Toast from "react-native-toast-message";
//styles
import { utils } from "./../../styles/styles";
import config from "./../../config.json";

const MarquesinaCard = ({ data }) => {
  return (
    <Pressable
      onPress={() =>
        Toast.show({
          type: "info",
          text1: `Entrando a marquesina ${data.nombre}...`,
        })
      }
    >
      <View style={[utils.marquesinaCard, utils.elevation]}>
        <Text style={{ fontFamily: "lato-light" }}>Entrar a marquesina:</Text>
        <Text
          style={{
            fontFamily: "lato-bold",
            fontSize: 60,
            color: data.estado
              ? config.colors["primary-light"]
              : config.colors.danger,
          }}
        >
          {data.nombre}
        </Text>
      </View>
    </Pressable>
  );
};

export default MarquesinaCard;
