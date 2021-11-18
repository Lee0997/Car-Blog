import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
// import './img/icons/css/ionicons.css';
// import './img/font-awesome/css/font-awesome.css';
// import 'jquery/dist/jquery.min.js';


import './style.css';


import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import RecentProducts from './components/recentProducts';


ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <Intro />
      <RecentProducts />

  </React.StrictMode>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
