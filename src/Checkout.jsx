import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout ">
      <div className="checkout_left">
        <h4 className="checkout_title">Your Shopping Basket</h4>
        {/* Shopping Basket */}
      </div>
      <div className="checkout_right">
        {/* <h3>THe Subtotal will go here</h3> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
