import { FETCH_MARQUESINAS, FETCH_CARGADORES } from "./types";
import http from "./../../services/httpService";
import config from "./../../config.json";

export const fetchMarquesinas = () => async (dispatch) => {
  http.setJwt("");
  const url = `${config.global}${config.resources.consultaMarquesinas}`;
  const { data } = await http.get(url);

  console.log(data);

  dispatch({
    type: FETCH_MARQUESINAS,
    payload: data.marquesinas,
  });
};

export const fetchMarquesinasCargadores = () => async (dispatch, getState) => {
  const url = `${config.global}${config.resources.consultaCargadores}`;
  const { data } = await http.get(url);

  dispatch({
    type: FETCH_CARGADORES,
    payload: data.marquesinas,
  });
};
