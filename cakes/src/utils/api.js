import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3005",
  headers: { "Content-Type": "application/json" },
});