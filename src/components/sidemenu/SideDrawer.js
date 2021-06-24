import React from "react";
import "./sidedrawer.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <Router>
      <ul>
        <li>
        <HashLink smooth to="/#section-4-content">
          {/* <a href="/" target="_blank" rel="noreferrer">SCHEDULE</a> */}
          <div>SCHEDULE</div>
        </HashLink>
        </li>
        {/* <li>
          <a href="/">SPONSORS</a>
        </li> */}
        <li>
        <HashLink smooth to="/#contact-container">
          {/* <a href="/">CONTACT</a> */}
          <div>CONTACT</div>
          </HashLink>
        </li>
        {/* <li >
                  <a href="https://event.hackhub.com/signup_policy" target="_blank" rel="noreferrer">
                  TERMS & CONDITIONS
                  </a>
                </li> */}
      </ul>
      </Router>
    </nav>
  );
};
export default sideDrawer;
