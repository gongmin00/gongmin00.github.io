import React from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import logo from "../images/nav-logo.png";
import "./toolbar.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Link} from "react-router-dom";



const Toolbar = (props) => {
  // let history = useHistory()
  // const handleTermClick =()=>{
  //   history.push("/terms")
  // }
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
                      <HashLink smooth to="/#section-4-content">
                        {/* <a href="https://event.hackhub.com/event/oppohack2021" target="_blank" rel="noreferrer"> */}
                        <div>SCHEDULE</div>
                        {/* </a> */}
                      </HashLink>
                    </li>

                    {/* <li>
            <a href="/user">SPONSORS</a>
            </li> */}
                    <li>
                      <HashLink smooth to="/#contact-container">
                        <div>CONTACT</div>
                      </HashLink>
                    </li>
                    <li style={{ minWidth: "230px" }}>
                     
                      <Link to="/terms" target="_blank" rel="noreferrer">
                        <div>TERMS OF SERVICE</div>
                      </Link>
                      {/* <a href="https://event.hackhub.com/signup_policy" target="_blank" rel="noreferrer"><div>TERMS OF SERVICE</div></a> */}
 
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
