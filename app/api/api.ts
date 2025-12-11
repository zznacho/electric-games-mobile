import axios from "axios";
export const BASE_URL = "http://192.168.0.17:5000"; // <-- TU IP y puerto 5000
const api = axios.create({
  baseURL: BASE_URL + "/api"
});
export default api;