import React, { useState } from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import logo from "../images/favicon_img.png";
import "./toolbar.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
const Toolbar = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Row>
        <header className="toolbar">
          <nav className="toolbar_navigator">
            <div />
            {/*     
        <Col sm='3'> */}

            {/* </Col> */}
            <Col sm="9" md="5" lg="6" style={{ width: "100%" }}>
              <div className="toolbar_logo">
                <a href="/">
                  <img src={logo} alt="nav-logo" />
                </a>
              </div>
              <div className="spacer" />
            </Col>
            <Col md="6" lg="6" style={{ width: "58%" }}>
              <Router>
                <div className="toolbar_navigation-items">
                  <ul>
                    <li>
                      <HashLink smooth to="/#section-10-portfolios">
                        <div>PORTFOLIOS</div>
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#contact-container">
                        <div>CONTACT ME</div>
                      </HashLink>
                    </li>
                    <li>
                      {!show && (
                        <div
                          onClick={() => setShow(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>SERVICES</div>
                        </div>
                      )}
                      <Alert show={show} variant="success">
                        <Alert.Heading>What's going on?</Alert.Heading>
                        <p>
                          I am still working on service pages, please direct
                          contact me via email if you need web development
                          service.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                          <Button
                            onClick={() => setShow(false)}
                            variant="outline-success"
                          >
                            Close me!
                          </Button>
                        </div>
                      </Alert>
                    </li>
                  </ul>
                </div>
              </Router>
            </Col>
            <Col md="1" lg="0">
              <div className="toggle-btn">
                <SideMenu click={props.drawerToggleClickHandler} />
              </div>
            </Col>
          </nav>
        </header>
      </Row>
    </Container>
  );
};

export default Toolbar;
