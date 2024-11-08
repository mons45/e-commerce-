// src/components/ProductList.js
import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  }
}

export default ProductList;
