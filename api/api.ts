import axios from "axios";

export const BASE_URL = "http://192.168.0.17:5000";

console.log("API BASE URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL + "/api"
});

export default api;
