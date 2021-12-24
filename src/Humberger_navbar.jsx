import React from "react";
import { Link } from "react-router-dom";

import "./Humberger NavBar/style.css";
import "./Humberger NavBar/menu-container.css";

function Humberger_navbar() {
  return (
    <div className="Main">
      <div className="menu-container">
        <input type="checkbox" className="toggler" />

        <div className="humburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  {/* <a> */}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                  <Link to="/checkout" style={{ textDecoration: "none" }}>
                    Checkout
                  </Link>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href="#"> */}
                  <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                    Dashboard
                  </Link>
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Humberger_navbar;
