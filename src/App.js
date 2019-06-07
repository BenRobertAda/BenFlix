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
        <div class="row">
          <div class="col-sm">
            <Video />
          </div>
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <List />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
