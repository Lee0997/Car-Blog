import React from "react";

//import stock
import stock from "../img/image2.png";
import stock1 from "../img/image1.png";
import stock2 from "../img/image3.png";
import stock3 from "../img/image4.png";
import stock4 from "../img/image5.png";
import stock5 from "../img/image5.png";

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
                      <h2 className="w-title">Artist Browser (Project)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Bulma, HTML, CSS, JavaScript, Jquery, Favicon, Google
                          fonts, 2 external API documentation
                          <br></br>
                          <br></br>
                          <a
                            href=" https://dan297.github.io/Project1MusicAPI/index.html"
                            alt="The URL of the deployed application"
                          >
                            Live URL
                          </a>
                          <br></br>
                          <a
                            href="https://github.com/dan297/Project1MusicAPI"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>
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
                      <h2 className="w-title">Car reviews (Project)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Node.js, JavaScript, MYSQL, Express.JS, Sequlize.js,
                          HandleBars.js
                          <br></br>
                          <br></br>
                          <a
                            href=" https://v8-car-reviews.herokuapp.com/"
                            alt="The URL of the deployed application"
                          >
                            Live URL
                          </a>
                          <br></br>
                          <a
                            href="https://github.com/dan297/V8-car-reviews"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>
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
                      <h2 className="w-title">Code Quiz</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          BootStrap, CSS, HTML, JavaScript, Google fonts
                          <br></br>
                          <br></br>
                          <a
                            href=" https://dan297.github.io/UNIT-4-Code-Quiz/index.html"
                            alt="The URL of the deployed application"
                          >
                            Live URL
                          </a>
                          <br></br>
                          <a
                            href="https://github.com/dan297/UNIT-4-Code-Quiz"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>
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
                      <h2 className="w-title">Team Profile Generator</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Bootstrap, HTML, CSS, Sequlize,
                          <br></br>
                          <br></br>
                          <a
                            href="https://github.com/dan297/UNIT-10-TeamGenerator"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>
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
                      <h2 className="w-title">Note Taker</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Node.js, JavaScript, MYSQL, Express.JS, Sequlize.js,
                          HandleBars.js
                          <br></br>
                          <br></br>
                          <a
                            href=" https://morning-basin-49394.herokuapp.com"
                            alt="The URL of the deployed application"
                          >
                            Live URL
                          </a>
                          <br></br>
                          <a
                            href="https://github.com/dan297/Unit-11-NoteTaker"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>
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
                      <h2 className="w-title">Employee Management System</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Node.js, Inquirer, MySQL.
                          <br></br>
                          <br></br>
                          <a
                            href="https://drive.google.com/file/d/1Dk-FGlUBdDLLATp0JbA9lfQ0X4CWXSbP/view"
                            alt="The URL of the deployed application"
                          >
                            Live URL
                          </a>
                          <br></br>
                          <a
                            href="https://github.com/dan297/EmployeeTracker_Unit_12"
                            alt="The URL of GITHUB"
                          >
                            Github URL
                          </a>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
                <a
                  href={stock}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RecentProducts;