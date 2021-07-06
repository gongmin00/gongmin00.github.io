import React from "react";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import mainTitle from "./images/main-title.svg";
import Footer from "./components/footer";
import MetaInfo from "./components/MetaInfo";
import MainContent from "./mainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Terms from "./components/terms"
const App = () => {
  // function checkLocation(){
  //   let location = useLocation()
  //   console.log(location)
  // }

  return (
    <div className="main-container">
      <MetaInfo />
      <NavBar />

      <Router>
        <Switch>
          <Route exact path="/"><MainContent /></Route>
          <Route path="/terms"><Terms /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
