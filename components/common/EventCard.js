import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import config from "./../../config.json";
import { utils } from "./../../styles/styles";

const EventCard = ({ data }) => {
  return (
    <View style={[utils.midCar, utils.elevation]}>
      <Text
        style={{
          fontFamily: "lato-light",
          color: data.tipo === 1 ? "#ad0d02" : "#2a9905",
          fontSize: 20,
        }}
      >
        {data.titulo}
      </Text>
    </View>
  );
};

export default EventCard;
