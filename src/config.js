export const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4001" // Local development
    : "https://blank-server.onrender.com"; // Render backend URL

console.log("API_URL:", API_URL);
