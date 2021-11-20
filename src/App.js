import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
// import './img/icons/css/ionicons.css';
// import './img/font-awesome/css/font-awesome.css';
// import 'jquery/dist/jquery.min.js';

import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import RecentProducts from "./components/recentProducts";
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
      </Routes>
    </Router>
  );
}

export default App;
