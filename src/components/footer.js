import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../App.css";
const Footer = () => {
  return (
    <Container className="section-12-container" id="contact-container">
      <Row>
        <Col
          className="socialIcon-container"
          sm="12"
          md="12"
          lg="12"
          style={{ paddingTop: "20px", width: "100%", textAlign: "right" }}
        >
          <a
            href="https://github.com/gongmin00"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              style={{ height: "3rem", width: "3rem", fill: "#264653" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mingong1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              style={{ height: "3rem", width: "3rem", fill: "#264653" }}
            />
          </a>
          <a href="mailto:gongmin00@gmail.com" target="_blank" rel="noreferrer">
            <FiMail
              style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
            />
          </a>
          <a
            href="https://www.facebook.com/min.gong.10/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook
              style={{ height: "3rem", width: "3rem", fill: "#264653" }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
