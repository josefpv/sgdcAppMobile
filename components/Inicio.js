import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, ListItem, Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "./../config.json";
//redux
import { connect } from "react-redux";
import { fetchMarquesinas } from "./../redux/actions/cargas";
//styles
import { utils } from "./../styles/styles";
import MarquesinaCard from "./common/MarquesinaCard";

const Inicio = ({ fetchMarquesinas, marquesinas }) => {
  useEffect(() => {
    fetchMarquesinas();
  }, []);

  return (
    <SafeAreaView>
      <View style={[utils.container]}>
        <View>
          <Text
            style={{ fontFamily: "lato-bold", color: "#000000", fontSize: 20 }}
          >
            Marquesinas
          </Text>
          <Text style={{ fontFamily: "lato-light", color: "#000000" }}>
            Seleccione una marquesina para ver sus cargadores.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ScrollView horizontal>
            {marquesinas.map((marquesina) => (
              <MarquesinaCard data={marquesina} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({ marquesinas: state.cargas.marquesinas });

export default connect(mapStateToProps, { fetchMarquesinas })(Inicio);

//export default connect(mapStateToProps, {})(Inicio);
