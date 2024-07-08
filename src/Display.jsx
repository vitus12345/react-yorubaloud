import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./components";
import {Sidebar , Dashboard , DashTable} from "./pages";
import {Page404} from "./error404";
// import DashTable from "./pages/DashTable";



const Display = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/error" element={<Page404 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashtable" element={<DashTable />} />




        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default Display;
