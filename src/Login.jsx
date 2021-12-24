import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-main container col-lg-9 ">
      <h4 className="m-1 p1 border-bottom">Login</h4>
      <div className="form-group form-row">
        <label className="">Email:</label>
        <input type="email" className="form-control" />
      </div>

      <div className="form-group form-row">
        <label className="col-lg-4">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
      </div>

      <div className="text-right">
        <div className="btn btn-primary m-2">Login</div>
      </div>
    </div>
  );
}

export default Login;
