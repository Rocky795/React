import React, { Component } from "react";
// import Product from "./product";

export default class Navbar extends Component {
  // handleSearch = (e) => {
  //   this.setState({ search: e.target.value });
  // };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/#">
                  Disabled
                </a>
              </li>
            </ul>
            {this.props.from}
          </div>
        </nav>
      </div>
    );
  }
}
