import React from 'react';
import style from './Cart.module.css';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext"; 


export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center my-5">
        <h2>Your cart is empty!</h2>
        <Link to="/" className="btn btn-primary"> 
          Go to Shop
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container my-4">
      <h1>Your Cart</h1>
      <div className="row gy-4">
        {cartItems.map((item) => (
          <div key={item.id} className={`${style.cartItem} col-lg-3 col-md-4 col-sm-6`}>
            <div className="card h-100">
              <img
                src={Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : '/placeholder.png'}
                alt={item.title}
                className="card-img-top img-fluid"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.price} EGP</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-end">Total: {cartItems.reduce((total, item) => total + item.price, 0)} EGP</h3>
      <Link to="/checkout" className="btn btn-success">
         Checkout
      </Link>
    </div>
  );
}
