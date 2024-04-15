import axios from "./axios";

const getAPI = async (url, data) => {
  try {
    const response = await axios.get(url, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
