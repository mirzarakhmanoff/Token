import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://trade.namtech.uz",
});

export default mainUrl;
