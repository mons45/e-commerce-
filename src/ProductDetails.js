// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();  // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id));  // Find the product by ID

  if (!product) {
    return <h2>Product not found</h2>;  // Show a message if no product is found
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
