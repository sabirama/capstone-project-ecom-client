import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export default request;
