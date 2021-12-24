// import React, { Component } from "react";
// import Data from "./Data";
// import axios from "axios";
import "./product.css";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product_info container align-item-center">
        <p>{title}</p>

        <p className="product_price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              <p>*</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />

      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default Product;
