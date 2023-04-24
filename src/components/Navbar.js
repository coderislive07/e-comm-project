import React, { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import "./NavbarStyles.css";
import { Context } from "../utils/context";

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
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const handleClick = () => setClick(!click)

  const { cartCount } = useContext(Context);

  //my code start
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 800) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  //my code end

  const menuList = nav_links.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url}  className="menu-links nav-link-ltr">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="nav-wrapper">
          <div className="logo" onClick={() => navigate("/")}>
            <h1>
              ZOCO-<span className="xxx">X</span>
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
            <span
              className="cart-icon"
              onClick={() => {
                setShowCart(true);
              }}
            >
              <BsCart />
              {!!cartCount && <span>{cartCount}</span>}
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
