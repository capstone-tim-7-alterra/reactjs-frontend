import {
  fetchAllProducts,
  searchProducts,
  editProduct,
  fetchProductById,
  deleteProduct,
} from "../../services/ProductAdmin/api/productAPI";
// import axiosInstance from "../../services/ProductAdmin/api/axiosInstance";

export const getAllProducts = async (page = 1) => {
  const response = await fetchAllProducts(page);
  console.log("Response Data:", response.data);
  return response.data.data;
};

export const searchForProducts = async (searchTerm) => {
  try {
    const response = await searchProducts(searchTerm);
    console.log("Response Data:", response.data);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error searching products:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getProductById = async (id) => {
  const response = await fetchProductById(id);
  console.log("Data Edit:", response.data);
  return response.data.data;
};

export const updateProduct = async (id, formData) => {
  const response = await editProduct(id, formData);
  return response.data.data;
};

export const removeProduct = async (id) => {
  const response = await deleteProduct(id);
  return response.data.data;
};
