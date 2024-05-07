import axios from "axios";
const userToken = localStorage.getItem("authToken");

const headers = {
  "Content-Type": "application/json",
  withCredentials: true,
  Accept: "application/json",
  Authorization: userToken,
};
export default axios.create({
  baseURL: "https://staja-marketplace.onrender.com",
  headers: headers,
});
