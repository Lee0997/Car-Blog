import React from "react";
import imageOverlay from "../img/carbk.png";
import "./navbar";

class Contact extends React.Component {
  render() {
    return (
      <div
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage"></div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          If you want to get in touch, we'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send us an email.
                          <br></br>
                          <br></br>
                          View our GitHubs below
                          <br></br>
                          <br></br>
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/dan297"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Dan
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://github.com/Lee0997"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Lee
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/a89ball"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Abdi
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/Mahmoudcali02"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Mahmoud
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default Contact;
