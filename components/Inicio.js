import React, { useEffect } from "react";
import { View } from "react-native";
import { Text, ListItem, Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "./../config.json";
//redux
import { connect } from "react-redux";
import { fetchMarquesinas } from "./../redux/actions/cargas";
//styles
import { utils } from "./../styles/styles";

const Inicio = ({ fetchMarquesinas, marquesinas }) => {
  useEffect(() => {
    fetchMarquesinas();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <View style={[utils.container]}>
        <View>
          <Text style={{ fontFamily: "lato-bold" }}>Marqueisnas</Text>
          <Text style={{ fontFamily: "lato-light" }}>
            Seleccione una marquesina para ver sus cargadores.
          </Text>
        </View>
        <View>
          {marquesinas
            ? marquesinas.map((marquesina, index) => (
                <ListItem key={index} bottomDivider topDivider>
                  <Avatar
                    title={marquesina.nombre.split(0)}
                    rounded
                    containerStyle={{
                      backgroundColor: config.colors["primary-light"],
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{`Marquesina ${marquesina.nombre}`}</ListItem.Title>
                    <ListItem.Subtitle>{`Cargadores ${marquesina.totalCargadores}`}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({ marquesinas: state.cargas.marquesinas });

export default connect(mapStateToProps, { fetchMarquesinas })(Inicio);

//export default connect(mapStateToProps, {})(Inicio);
