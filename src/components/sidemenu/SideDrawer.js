import React from "react";
import "./sidedrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">SCHEDULE</a>
        </li>
        <li>
          <a href="/">SPONSORS</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
