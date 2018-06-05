import axios from "axios";

const cors = "https://cors-anywhere.herokuapp.com/";
const apiRoot = "http://simontintin.azurewebsites.net";

const instance = axios.create();

// Add a request interceptor

instance.interceptors.request.use(
  function(config) {
    config.url = `${cors}${apiRoot}${config.url}`;
    console.log(config.url);
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;