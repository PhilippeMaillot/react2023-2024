import React from 'react';

function Checkout({ items, onPay, onReturn }) {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
    return (
      <div className="container mt-5">
        <h1>Checkout</h1>
        <ul className="list-group mb-3">
          {items.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.title} x{item.quantity}
              <span className="badge bg-secondary rounded-pill">{(item.price * item.quantity).toFixed(2)}€</span>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Total:</h4>
          <h4>{totalPrice}€</h4>
        </div>
        <button className="btn btn-outline-secondary mt-3" onClick={onPay}>Pay</button>
        <button className="btn btn-outline-secondary mt-3 ms-3" onClick={onReturn}>Return to Shop</button>
      </div>
    );
  }
  
  export default Checkout;