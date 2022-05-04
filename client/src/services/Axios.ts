import axios from "axios";
import config from "@src/config";

const instance = axios.create({
  baseURL: config.app.api,
});

export default instance;
