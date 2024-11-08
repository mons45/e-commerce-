import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { cartItems, removeFromCart } = this.props;
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    );
  }
}

export default Cart;
