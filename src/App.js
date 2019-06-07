import React, { Component } from "react";
import List from "./components/List-item";
import Item from "./components/Item";
import "./App.css";
import Header from "./components/header";
import Video from "./components/video";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <br />
        <br />
        <br />
        <List />
      </div>
    );
  }
}

export default App;
