import React from 'react';
import Product from './productpage';

const products = [
    { id: 1, name: 'Potatoes', price: 19, description: 'Description for product 1' },
    { id: 2, name: 'Tomatoes', price: 29, description: 'Description for product 2' },
    { id: 3, name: 'Eggs', price: 39, description: 'Description for product 3' },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;