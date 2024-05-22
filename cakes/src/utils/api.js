import axios from "axios";

const URL_API =
  window.location.hostname === "https://yum-yum-yummycakes.netlify.app"
    ? "yummycakes-production.up.railway.app"
    : "http://localhost:3005";

export const api = axios.create({
  baseURL: URL_API,
  // baseURL: "http://localhost:3005",
  headers: { "Content-Type": "application/json" },
});
