import React, {useState} from "react";
import "./sidedrawer.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router} from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];
  const [show, setShow] = useState(false);
  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <Router>
        <ul>
          <li>
            <HashLink smooth to="/#section-10-portfolios">
              <div>PORTFOLIOS</div>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact-container">
              <div>CONTACT</div>
            </HashLink>
          </li>
          <li>
            {!show && (
              <div onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
                <div>SERVICES</div>
              </div>
            )}
            <Alert show={show} variant="success">
              <Alert.Heading>What's going on?</Alert.Heading>
              <p>
                I am still working on service pages, please direct contact me
                via email if you need web development service.
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
      </Router>
    </nav>
  );
};
export default SideDrawer;
