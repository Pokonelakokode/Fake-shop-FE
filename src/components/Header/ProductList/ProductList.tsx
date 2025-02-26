import React, { useState, useEffect } from 'react';
import { getProducts, Product } from '../../../api/products';
import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(page, limit);
                setProducts(data);
            } catch (err: any) {
                setError('Could not load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.cardGrid}>
            {products.map((product) => (
                <div key={product.id} className={styles.card}>
                    <h2>{product.product_name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>In Stock: {product.quantity_in_stock}</p>
                    <p>Released on: {product.release_date}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
