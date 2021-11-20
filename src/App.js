import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
// import './img/font-awesome/css/font-awesome.css';
// import 'jquery/dist/jquery.min.js';

import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import RecentProducts from "./components/recentProducts";
import AboutUS from "./components/aboutUs";
import Engine from "./components/engine";
import BodyKit from "./components/bodyKit";
import Interior from "./components/interior";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Navbar />
              <RecentProducts />
            </>
          }
        ></Route>
        <Route
          path="/aboutUs"
          element={
            <>
              <Navbar />
              <AboutUS />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Intro />
              <Navbar />
              <RecentProducts />
            </>
          }
        ></Route>
        <Route
          path="/engine"
          element={
            <>
              <Navbar />
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <Engine />
            </>
          }
        ></Route>
         <Route
          path="/BodyKit"
          element={
            <>
              <Navbar />
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <BodyKit />
            </>
          }
        ></Route>
         <Route
          path="/Interior"
          element={
            <>
              <Navbar />
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <Interior />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
