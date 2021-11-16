import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


//import components
import Navbar from './components/intro';
import Intro from './components/navbar';


ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
    </React.Fragment>,
document.getElementById('root'));
