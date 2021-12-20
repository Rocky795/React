import React from "react";
import Product from "./product";

import "./Home.css";

function Home() {
  return (
    <div className="home container justify-content-center">
      <img
        className="home_image "
        src="https://m.media-amazon.com/images/I/71WdluGr0uL._SX3000_.jpg"
        alt=""
      />

      <div className="container row home_row justify-content-center">
        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
      <div className="container row home_row justify-content-center">
        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="container col-6 product">
          <Product
            id="1212122"
            title="The learn Startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41pqEVq1MQL._SX320_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

// getSearch = (e) => {
//   // console.log(e.target.value);

//   console.log(e);
//   // this.setState({ search: e });

//   // return e.target.value;
// };

export default Home;
