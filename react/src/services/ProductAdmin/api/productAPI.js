import axiosInstance from "./axiosInstance";

// export const fetchAllProducts = (page = 1) =>
//   axiosInstance.get(`/api/v1/admin/products?page=${page}&limit=6`);

export const fetchAllProducts = (page = 1, limit = 6) =>
  axiosInstance.get(`/api/v1/admin/products`, {
    params: { page, limit },
  });

export const searchProducts = (item) =>
  axiosInstance.get("/api/v1/admin/products/search", {
    params: { item, limit: 5, offset: 0 },
  });

export const createProduct = (productData) =>
  axiosInstance.post("/api/v1/admin/products", productData);

export const editProduct = (id, productData) =>
  axiosInstance.put(`/api/v1/admin/products/${id}`, productData);

export const fetchProductById = (id) =>
  axiosInstance.get(`/api/v1/admin/products/${id}`);

export const deleteProduct = (id) =>
  axiosInstance.delete(`/api/v1/admin/products/${id}`);

export const fetchProductsByCategory = (category) =>
  axiosInstance.get(`/api/v1/admin/products/category/${category}`);
