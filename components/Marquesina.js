import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Marquesina = ({ navigation, route }) => {
  const letraMarquesina = route.params.data.nombre;
  return (
    <SafeAreaView>
      <View>
        <Text>{`Cargadores M${letraMarquesina}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Marquesina;
