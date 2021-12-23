import { StyleSheet } from "react-native";

const utils = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    height: "100%",
    padding: 4,
    flexDirection: "column",
  },
  marquesinaCard: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: 300,
    height: 400,
    marginVertical: 10,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 0.5,
    margin: 10,
  },
  elevation: {
    elevation: 8,
    shadowColor: "#52006A",
  },
});

export { utils };
