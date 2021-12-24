import { StyleSheet } from "react-native";

const utils = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    padding: 4,
    flexDirection: "column",
  },
  marquesinaCard: {
    backgroundColor: "#b00202",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: 300,
    height: 200,
    marginVertical: 10,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 0.5,
    margin: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: "#52006A",
  },
  midCar: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 400,
    height: 180,
    marginVertical: 10,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 0.5,
    margin: 10,
  },
  containerLastEvents: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
});

export { utils };
