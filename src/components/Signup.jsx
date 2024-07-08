import React from 'react'
import {LoginBg1} from "../assets";
import "./style.scss";

const Signup = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5 text-center signupimg">
          <img src={LoginBg1} alt="" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7 signupimg2">
          <h2>Register</h2>
          <div className="container">
            <form action="POST" className='signup'>
              <label htmlFor="Name">Name</label>
              <input type="text" id='name'name='name'placeholder='Enter Name' />
            </form>
            <form action="POST" className='signupemail'>
              <label htmlFor="Email address">Email address</label>
              <input type="email" id='email'name='email'placeholder='Enter Email Address' />
            </form>
            <form action="POST" className='password'>
              <label htmlFor="Password">Password</label>
              <input type="password" id='pasword'name='password'placeholder='Enter Password' />
            </form>
            <form action="POST" className='password'>
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input type="password" id='password'name='password'placeholder='Confirm Password' />
            </form>
            <button>Create account</button>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Signup
