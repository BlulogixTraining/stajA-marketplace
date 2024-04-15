import axios from "axios";
const userToken = localStorage.getItem("authToken");
const headers = {
  "Content-Type": "application/json",
  withCredentials: true,
  Accept: "application/json",

  Authorization: "Bearer " + userToken,
};
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: headers,
});

// export const getProducts = () => {
//   const response = api.get("/products");
//   return response.data;
// };

// export const products = () => {
//   api.get("/products").then((res) => {
//     return res.data;
//   });
// };
