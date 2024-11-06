import React, { useState, useEffect } from "react";
import "./Cart.css";
import { GrClose } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ setShowCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartSubTotal(total);
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
          <>
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
            </div>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="button">
                <button className="checkout-cta cool-checkout-btn">
                  <span className="btn-text">Checkout</span>
                  <span className="btn-icon">
                    <FaShoppingCart />
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;