import React from "react";
import { Logo } from "../assets";
import "./style.scss";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-header">
            <img src={Logo} alt="" />
            <p>Yoruba aloud</p>
          </div>
          <div className="sidebar-body">
            <ul className="">
              <li className="mt-5 active">
                <i class="lar la-chart-bar"></i>
                <span>Dashboard</span>
              </li>
              <li className="mt-5">
                <i class="las la-layer-group"></i>
                <span>Categories</span>
              </li>
              <li className="mt-5">
                <i class="las la-file-upload"></i>
                <span>Learning</span>
              </li>
              <li className="mt-5">
                <i class="las la-file-upload"></i>
                <span>Quiz</span>
              </li>
              <li className="mt-5">
                <i class="las la-file-upload"></i>
                <span>Admin Profile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
