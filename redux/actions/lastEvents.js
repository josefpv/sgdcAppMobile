import { FETCH_LAST_EVENTS } from "./types";
import http from "./../../services/httpService";
import config from "./../../config.json";

export const fetchLastEvents = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_LAST_EVENTS,
    payload: dataSample,
  });
};

const dataSample = [
  {
    tipo: 1,
    titulo: "Próximo a finalizar",
    cargador: "A3-L",
    marquesina: "A",
    patente: "ABCD-88",
  },
  {
    tipo: 1,
    titulo: "Próximo a finalizar",
    cargador: "A8-R",
    marquesina: "A",
    patente: "ABCD-88",
  },
  {
    tipo: 2,
    titulo: "Reserva realizada",
    cargador: "C4-F",
    marquesina: "A",
    patente: "ABCD-88",
  },
  {
    tipo: 2,
    titulo: "Reserva realizada",
    cargador: "C4-F",
    marquesina: "A",
    patente: "ABCD-88",
  },
  {
    tipo: 2,
    titulo: "Reserva realizada",
    cargador: "C4-F",
    marquesina: "A",
    patente: "ABCD-88",
  },
  {
    tipo: 1,
    titulo: "Próximo a finalizar",
    cargador: "A8-R",
    marquesina: "A",
    patente: "ABCD-88",
  },
];
