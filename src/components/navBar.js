import React, {useState} from "react";
import "../App.css";
import SideDrawer from "./sidemenu/SideDrawer";
import BackDrop from "./backdrop/BackDrop";
import Toolbar from "./ToolBar";


const NavBar = () => {
    const [state, setState]=useState(false)

     const drawerToggleClickHandler = () => {
        setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
     const backDropClickHandler = () => {
        setState({ sideDrawerOpen: false });
      };

      let backdrop;

    if (state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={state.sideDrawerOpen} />
        {backdrop}
      </div>
    );

//   return (
    // <div className="nav-container">
    //     <div className="nav-logo">
    //         <img src='images/nav-logo.png' alt="nav-logo"/>
    //     </div>
    //     <div className="nav-menu">
    //         <ul className="nav-menu-list">
    //             <li className="nav-menu-item">SCHEDULE</li>
    //             <li className="nav-menu-item">SPONSORS</li>
    //             <li className="nav-menu-item">CONTACT</li>
    //         </ul>
    //     </div>
    // </div>
   
   
//   );
};

export default NavBar;
