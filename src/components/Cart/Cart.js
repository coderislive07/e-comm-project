import React, { useState, useEffect } from "react";
import "./Cart.css";
import { GrClose } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";

const Cart = ({ setShowCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  return (
    <div className="cart_panel">
      <div
        className="opac_layer"
        onClick={() => {
          setShowCart(false);
        }}
      ></div>
      <div className="cart_content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <GrClose className="close-btn" />
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty_cart">
            <BsCartPlus className="card_icon" />
            <span>No products in the cart.</span>
            <button
              className="return-cta"
              onClick={() => {
                setShowCart(false);
              }}
            >
              RETURN TO SHOP
            </button>
          </div>
        )}
        {!!cartItems?.length && (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: &#8377;{item.price.toLocaleString('en-IN')}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
          
              </div>
              
            ))}
            <button className="checkout">Checkout </button>
            
          </div>
        )}
      </div>
    
    </div>
  );
};

export default Cart;