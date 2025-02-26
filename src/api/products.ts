export interface Product {
    id: number;
    product_name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    quantity_in_stock: number;
    release_date: string;
    weight: number;
    color: string;
    material: string;
}

export type CreateProductDto = Omit<Product, 'id'>;
export type UpdateProductDto = Partial<Omit<Product, 'id'>>;

import api from "./apiService";

export const getProducts = async (page?: number, limit?: number): Promise<Product[]> => {
    try {
        const response = await api.get('/products', { params: { page, limit } });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
    }
};

export const createProduct = async (productData: CreateProductDto): Promise<Product> => {
    try {
        const response = await api.post('/products', productData);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (id: number, productData: UpdateProductDto): Promise<Product> => {
    try {
        const response = await api.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error(`Error updating product ${id}:`, error);
        throw error;
    }
};

export const deleteProduct = async (id: number): Promise<void> => {
    try {
        const response = await api.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product ${id}:`, error);
        throw error;
    }
};