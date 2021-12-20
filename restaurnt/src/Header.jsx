import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput " />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>

            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
      </div>

      {/* <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>

            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
      </div> */}

      <div className="header_nav">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>

            <span className="header_optionLineTwo">Orders</span>
          </div>
        </Link>
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
          </div>
          <div className="header_option">
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="header_optionBasket">
          <ShoppingCartIcon className="header_shoppingIcon" />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
