import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const Helper = () => {
  const authHeader = useAuthHeader();

  const headers = {
    "Content-Type": "multipart/form-data",
    withCredentials: true,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: authHeader(),
  };

  return axios.create({
    baseURL: "https://staja-marketplace.onrender.com",
    headers: headers,
  });
};

export default Helper;
