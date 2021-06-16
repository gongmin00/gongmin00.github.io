import React from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import logo from "../images/nav-logo.png";
import "./toolbar.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
const Toolbar = (props) => (
  <Container>
    <Row>
      <header className="toolbar">
        <nav className="toolbar_navigator">
          <div />
          {/*     
        <Col sm='3'> */}
          <div className="toggle-btn">
            <SideMenu click={props.drawerToggleClickHandler} />
          </div>
          {/* </Col> */}
          <Col sm="9" md="7" lg="7" style={{ width: "100%" }}>
            <div className="toolbar_logo">
              <a href="/">
                <img src={logo} alt="nav-logo" />
              </a>
            </div>
            <div className="spacer" />
          </Col>
          <Col md="5" lg="5" style={{ width: "58%" }}>
            <Router>
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <a href="https://event.hackhub.com/event/oppohack2021">
                    SCHEDULE
                  </a>
                </li>
                {/* <li>
            <a href="/user">SPONSORS</a>
            </li> */}
                <li>
                  <HashLink smooth to="/#contact-container">
                    <a href="/music">CONTACT</a>
                  </HashLink>
                </li>
              </ul>
            </div>
            </Router>
          </Col>
        </nav>
      </header>
    </Row>
  </Container>
);

export default Toolbar;
