// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextBox from "./components/TextBox";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [bgMode, changeMode] = useState("light");
  const [alert, setAlert] = useState("NULL");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("NULL");
    }, 1500);
  };
  const toggleBgMode = () => {
    if (bgMode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "#39434f";
      showAlert("Lights are turned off", "secondary");
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lights are turned on", "light");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About us"
          toggleBgMode={toggleBgMode}
          bgMode={bgMode}
        ></Navbar>
        
        <Alert alert={alert}></Alert>
        

        {/* <About></About> */}
        <Switch>
          <Route path="/about">
            <About bgMode={bgMode}/>
          </Route>
          <Route path="/">
            <TextBox
              heading="Enter text here : "
              toggleBgMode={toggleBgMode}
              bgMode={bgMode}
              alert={showAlert}
            ></TextBox>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
