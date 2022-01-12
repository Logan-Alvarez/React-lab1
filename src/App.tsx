import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import "./components/styles.css";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <Header user="Chirpus" />
      {/* <div className="AllAdContainer">
        <Ad flavor="Blue Moon" fontSize={40} darkTheme={true} />
        <Ad flavor="Vanilla" fontSize={40} darkTheme={false} />
        <Ad flavor="SuperMan" fontSize={40} darkTheme={true} />
      </div> */}
      <div className="bodyContainer">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
