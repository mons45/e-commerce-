// import React, { Component } from 'react';

// class Product extends Component {
//   render() {
//     const { product, addToCart } = this.props;

//     return (
//       <div className="product">
//         <h2>{product.name}</h2>
//         <img src={product.image} alt={product.name} />
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     );
//   }
// }

// export default Product;






// src/components/Product.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className="product">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        
        {/* View Details Link */}
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    );
  }
}

export default Product;
