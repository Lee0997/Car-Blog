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
import LatestReviews1 from "./components/latestReviews1";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/regForm";

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
          path="/login"
          element={
            <>
              <Navbar />
              <LoginForm />
            </>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            <>
              <Navbar />
              <RegistrationForm />
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
              

              <Engine />
            </>
          }
        ></Route>
        <Route
          path="/BodyKit"
          element={
            <>
              <Navbar />
              

              <BodyKit />
            </>
          }
        ></Route>
        <Route
          path="/Interior"
          element={
            <>
              <Navbar />
              

              <Interior />
            </>
          }
        ></Route>
         <Route
          path="/recentProducts1"
          element={
            <>
              <Navbar />
              
              <LatestReviews1 />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
