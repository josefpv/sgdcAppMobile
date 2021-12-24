import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, ListItem, Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "./../config.json";

//redux
import { connect } from "react-redux";
import { fetchMarquesinas } from "./../redux/actions/cargas";
import { fetchLastEvents } from "../redux/actions/lastEvents";
//styles
import { utils } from "./../styles/styles";
import MarquesinaCard from "./common/MarquesinaCard";
import EventCard from "./common/EventCard";

const Inicio = ({
  fetchMarquesinas,
  fetchLastEvents,
  marquesinas,
  lastEvents,
  navigation,
}) => {
  useEffect(() => {
    fetchMarquesinas();
    fetchLastEvents();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[utils.container]}>
          <View>
            <Text
              style={{
                fontFamily: "lato-bold",
                color: "#0a2940",
                fontSize: 40,
              }}
            >
              Marquesinas
            </Text>
            <Text style={{ fontFamily: "lato-light", color: "#000000" }}>
              Seleccione una marquesina para ver sus cargadores.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal>
              {marquesinas.map((marquesina, index) => (
                <MarquesinaCard
                  data={marquesina}
                  navigation={navigation}
                  key={index}
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  fontFamily: "lato-bold",
                  color: "#000000",
                  fontSize: 20,
                }}
              >
                Últimos eventos
              </Text>
            </View>
          </View>
        </View>
        <View style={[utils.containerLastEvents]}>
          <ScrollView horizontal>
            {lastEvents.map((lastEvent, index) => (
              <EventCard data={lastEvent} key={index} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  marquesinas: state.cargas.marquesinas,
  lastEvents: state.lastEvents.lastEvents,
});

export default connect(mapStateToProps, { fetchMarquesinas, fetchLastEvents })(
  Inicio
);

//export default connect(mapStateToProps, {})(Inicio);
