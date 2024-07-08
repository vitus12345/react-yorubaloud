import React from 'react';
import {Error , Logo} from "../assets";
import "./page404.scss";

const Page404 = () => {
  return (
    <React.Fragment>
      <div className="page404">
        <img src={Logo} alt="" className='logo' />
        <img src={Error} alt="" className='error' />
        <h3 class="mb-3">We can't find that page</h3>
            <p>We advice you go through proper routing method to view </p>
            <p>this page or contact the service provider.</p>
            <button>Login page</button>
      </div>
      
    </React.Fragment>
  )
}

export default Page404
