import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log(API_BASE_URL, 'API_BASE_URL');
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here, like authorization tokens
  },
});

// Add more API functions as needed (e.g., createProduct, updateProduct, deleteProduct)

export default api;