import axios from "axios";
import Toast from "react-native-toast-message";

//fisrt argument => positive requests
//second argument => negative requests
axios.interceptors.response.use(
  function (config) {
    //console.log(config.status);
    return config;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log(error);
      Toast.show({
        type: "error",
        text1:
          "Ha ocurrido un error inesperado, por favor intente nuevamente o contacte al administrador del sistema.",
      });
    }

    //401 Not authorized : redirecting to login page
    if (error.response.status === 401) {
      //window.location = "/login";
    }

    return Promise.reject(error);
  }
);

function setJwt({ token }) {
  axios.defaults.headers.common["token"] =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEsIm5vbWJyZSI6Ikpvc2UgVml2YXMiLCJwZXJmaWxJZCI6MX0.GakbaGLmny5WAksXNoT_gncUUVJqyTY8L3R37dO2shU";
  //axios.defaults.headers.common["token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
