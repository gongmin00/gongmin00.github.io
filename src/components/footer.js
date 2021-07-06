import React from "react"
import { Row, Col, Container} from "react-bootstrap";
import section12Icon from "../images/section-12-icon.svg";
import emailImg from "../images/mail 1.svg";
import facebookImg from "../images/facebook 1.svg";
import twitterImg from "../images/twitter 1.svg";
import instImg from "../images/inst 1.svg";
import section10Icon from "../images/section-10-icon.svg";
import {BrowserRouter as Router} from "react-router-dom"
import "../App.css";
const Footer =()=>{
    return (
        <Container className="section-12-container" id="contact-container">
        {/* <div className="mobile-contact-us">Contact Us</div> */}
        <Row style={{ flexWrap: "unset" }}>
          <Col
            sm="2"
            md="2"
            lg="2"
            style={{ paddingTop: "20px", width: "unset" }}
          >
            <img
              className="bot-icon1"
              src={section10Icon}
              alt="section-9-icon"
              style={{ width: "100%" }}
            />
          </Col>
          <Col
            sm="3"
            md="3"
            lg="3"
            style={{ paddingTop: "20px", width: "unset" }}
          >
            <img
              className="bot-icon2"
              src={section12Icon}
              alt="section-9-icon"
              style={{ width: "100%" }}
            />
          </Col>
          <Col
            sm="2"
            md="2"
            lg="2"
            style={{ paddingTop: "20px", width: "unset" }}
          ></Col>
          <Col
            className="contact-us"
            sm="2"
            md="2"
            lg="1.5"
            style={{ paddingTop: "20px" }}
          >
            {/* <div className="section-12-text" style={{ textAlign: "right" }}>
              Contact Us
            </div> */}
          </Col>
          <Col
            className="socialIcon-container"
            sm="5"
            md="5"
            lg="3"
            style={{ paddingTop: "20px", width: "100%", textAlign: "right" }}
          >
            <a
              href="mailto:events@hackhub.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bot-social-icon1"
                src={emailImg}
                alt="social media-icon"
                style={{
                  paddingLeft: "24px",
                }}
              />
            </a>
            <Router>
              <a
                href="https://www.facebook.com/hackhubio/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="bot-social-icon1"
                  src={facebookImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "24px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/hackhubio?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="bot-social-icon1"
                  src={twitterImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "24px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/hackhub.io/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="bot-social-icon1"
                  src={instImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "24px",
                  }}
                />
              </a>
            </Router>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer