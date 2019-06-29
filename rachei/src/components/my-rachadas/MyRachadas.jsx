import React, { Component } from "react";
import Onheader from "../on-header/Onheader";
import "./my-rachadas.css";

class MyRachadas extends Component {
  render() {
    return (
      <div>
        <Onheader />
        <p>THIS IS THE MY RACHADAS PAGE</p>
        <a href="/create-rachada">Create Rachada</a>
      </div>
    );
  }
}

export default MyRachadas;
