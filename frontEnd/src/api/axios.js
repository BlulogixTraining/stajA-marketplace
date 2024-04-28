import axios from "axios";
const userToken = localStorage.getItem("authToken");
const headers = {
  "Content-Type": "application/json",
  withCredentials: true,
  Accept: "application/json",
  Authorization: "Bearer " + userToken,
};
export default axios.create({
  baseURL: "https://staja-marketplace.onrender.com",
  headers: headers,
});

export const getCategories = async () => {
  try {
    const response = await axios.get(
      "https://staja-marketplace.onrender.com/categories"
    );
    return response.data.categories;
  } catch (error) {
    console.error(error);
  }
};
