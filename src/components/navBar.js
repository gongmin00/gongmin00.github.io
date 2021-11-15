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
      <div>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
};

export default NavBar;
