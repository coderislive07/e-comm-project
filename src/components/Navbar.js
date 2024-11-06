import React, { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import { NavLink, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi"; // Import the user icon
import "./NavbarStyles.css";

const nav_links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/electronics",
    title: "Electronics",
  },
  {
    url: "/mobandaccess",
    title: "Mobile and Accessories",
  },
  {
    url: "/more",
    title: "More",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.username) { // Added check for currentUser.username
        setUsername(currentUser.username);
      }

    };
  
    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      setUsername('');
      navigate('/login');
    };


    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const menuList = nav_links.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} className="menu-links nav-link-ltr">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSignIn = () => {
    navigate("/Login/");
    if (username) {
      localStorage.removeItem('currentUser');
      setUsername('');
    } else {
      navigate("/Login/");
    }
  };

  return (
    <>
      <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="nav-wrapper">
          <div className="logo" onClick={() => navigate("/")}>
            <h1>
              Tech<strong>Nexus</strong>
            </h1>
          </div>

          <div className="navigation">
            <ul
              className={clicked ? "menu" : "menu close"}
              onClick={handleClick}
            >
              {menuList}
            </ul>
          </div>

          <div className="nav-icons">
            <span
              className="search-icon"
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <TbSearch />
            </span>
            <span className="sign-in-icon" onClick={handleSignIn}>
              <FiUser />
            </span>
            <span
              onClick={() => {
                setShowCart(true);
              }}
              className="cart-icon"
            >
              <BsCart />
              {!!cartCount && <span className="cart-num">{cartCount}</span>}
            </span>
            <div className="grid-icon">
              <span onClick={handleClick}>
                {clicked ? <FaTimes /> : <FiGrid />}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Navbar;