import axios from "axios";
import { config } from "services";

axios.defaults.params = {};
axios.defaults.params["APPID"] = config.API_KEY;
axios.defaults.params["units"] = config.API_UNITS;

export const request = axios.create({
  baseURL: config.API_ROOT,
});
