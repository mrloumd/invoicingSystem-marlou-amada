import axios from "axios";

const API_URL = "/api/products/";

// Get user blogs
const getProducts = async (token) => {
  const response = await axios.get(API_URL);
  return response.data;
};

const productService = {
  getProducts,
};

export default productService;
