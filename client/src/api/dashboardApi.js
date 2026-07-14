import axios from "axios";

const API = axios.create({
  baseURL: "https://mis-financial-dashboard.onrender.com/api",
});

export default API;
