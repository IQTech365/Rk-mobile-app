import axios from "axios";
import CONFIG from "../constants";

export const BASE_URL = CONFIG.API_ENDPOINT;

const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.interceptors.response.use((response) => {
  switch (response.status) {
    case 200:
      const { code, data, error } = response.data;
      if (code >= 400) {
        return Promise.reject({ message: error, code });
      }
      return data;
    case 402:
      return Promise.reject("Server is offline");
  }
});

export default Axios;