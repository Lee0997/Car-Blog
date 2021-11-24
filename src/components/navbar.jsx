import React from "react";

import logo1 from "../img/male1.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
            />
         
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="home">
                  Home
                </a>
              </li>{" "}

              

              <div class="nav-link js-scroll activ">
  <div class="ui simple dropdown item">
    Products
    <i class="dropdown icon"></i>
    <div class="menu">
    <a href="engine">Engine </a>
    <br></br>
    <br></br>


      <a href="Interior" >Interior</a>
    <br></br>
    <br></br>

      <a href="BodyKit">Body Kit</a>
    </div>
  </div>
</div>







              <li className="nav-item">
                <a className="nav-link js-scroll" href="aboutUs">
                  Abous Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
