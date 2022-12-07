import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

axios.interceptors.response.use(null, (err) => {
  if (err.code === "ERR_NETWORK") {
    toast.error("Network error");
  } else if (err.response?.status >= 403) {
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(err);
});

export function setCommonHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
