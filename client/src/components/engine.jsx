import React from "react";
import "./navbar";

import stock from "../img/engine5.png";
import stock1 from "../img/engine2.png";
import stock2 from "../img/engine3.png";
import stock3 from "../img/engine4.png";
import stock4 from "../img/engine.png";
import stock5 from "../img/image4.png";

class Engine extends React.Component {
  render() {
    return (
      <section id="recent" className="portfolio-mf sect-pt4 route">
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Engine</h3>
                <p className="subtitle-a"></p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href="recentProducts1" data-lightbox="gallery-vmarine">
                    <img src={stock} alt="" className="img-fluid" />
                  </a>
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Oil Filter</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Oil Filter
                          <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐⭐⭐
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Water Pump</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Water Pump
                          <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐⭐
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock3} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Exhaust Manifold</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Exhaust Manifold
                          <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐⭐⭐⭐
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock4} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Air Filter</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Air Filter
                          <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐⭐⭐
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock1} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Induction Kit</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Induction Kit <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Cherry Bomb Exhaust</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Cherry Bomb Exhaust
                          <br></br>
                          <span className="w-ctegory">
                            Number of Reviews:
                            <br></br>
                            ⭐⭐⭐⭐⭐
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-basic">
          <footer>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#work">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#work">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#work">Privacy Policy</a>
              </li>
            </ul>
            <p class="copyright">With ♡ from Dan, Abdi, Lee, Mahmoud</p>
          </footer>
        </div>
      </section>
    );
  }
}

export default Engine;
