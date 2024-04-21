import axios from "./axios";

const backendUrl = "http://localhost:3000";

// const createProduct = async (product) => {
//   try {
//     const response = await axios.post(`${backendUrl}/products`, product);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const updateProduct = async (product) => {
//   try {
//     const response = await axios.put(
//       `${backendUrl}/products/${product._id}`,
//       product
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const deleteProduct = async (productId) => {
//   try {
//     const response = await axios.delete(`${backendUrl}/products/${productId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
