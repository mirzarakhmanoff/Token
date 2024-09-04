import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://trade.namtech.uz",
});

mainUrl.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default mainUrl;
