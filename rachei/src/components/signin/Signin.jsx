import React, { Component } from "react";
import Offheader from "../off-header/Offheader";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <div>
        <Offheader />
        <p>THIS IS THE SIGNIN PAGE</p>
        <p>
          Ainda nao é cadastrado? <a href="/signup">Crie sua conta</a>
        </p>
      </div>
    );
  }
}

export default Signin;
