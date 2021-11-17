import React from "react";

//import stock
import stock from "../img/image2.png";
import stock1 from "../img/image1.png";
import stock2 from "../img/image3.png";
import stock3 from "../img/image4.png";
import stock4 from "../img/image5.png";
import stock5 from "../img/image6.png";

class RecentProducts extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Latest Reviews</h3>
                <p className="subtitle-a">
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Ford Focus Car Mats</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          2018 Luxery Ford  Mats for model Ford
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
                      <h2 className="w-title">Titanium Alloy Wheels</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                        Titanium Alloy Wheels
                          <br></br>
                          <br></br>                       
                        </span>{" "}
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
                      <h2 className="w-title">Cherry Bomb exhaust</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                        Cherry Bomb exhaust
                                                  <br></br>
                          <br></br>
                        
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
                      <h2 className="w-title">GT wing</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                        GT wing
                                                  <br></br>
                          <br></br>
                          
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
                      <h2 className="w-title">Recaro Seats</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                        Recaro Seats                          <br></br>
                          <br></br>
                          
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
                      <h2 className="w-title">Sparco Mud Flaps</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                        Sparco Mud Flaps
                          <br></br>
                          <br></br>
                          
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
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">With ♡ from the UK</p>
           </footer>
           </div>


      </section>

    );
  }
}

export default RecentProducts;