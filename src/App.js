import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
// import './img/icons/css/ionicons.css';
// import './img/font-awesome/css/font-awesome.css';
// import 'jquery/dist/jquery.min.js';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import RecentProducts from './components/recentProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Intro />
              <Navbar/>
            </Route>
            <Route exact path="/recentProducts">
              <RecentProducts />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
