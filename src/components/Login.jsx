import React from "react";
import {Signimg1 } from "../assets";
import "./style.scss";

const Login = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5 text-center loginimg">
          <img src={Signimg1} alt="" />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-7 loginimg2">
          <h2>Login</h2>
          <div className="container">
            <form action="POST" className="login">
                <label htmlFor="Email address">Email address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
            </form>

            <form action="POST" className="password">
                <label htmlFor="Password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
            </form>
            <button>Login</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
