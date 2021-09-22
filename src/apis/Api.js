import axios from "axios";

let BaseApi = axios.create({
  baseURL: process.env.VUE_API_BASE_URL
});

let Api = function() {
  let token = localStorage.getItem("auth")

  if (token) {
    
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
