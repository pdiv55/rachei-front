import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <div>
        <p>THIS IS THE SIGNIN PAGE</p>
        <p>
          Ainda nao é cadastrado? <a href="/signup">Crie sua conta</a>
        </p>
      </div>
    );
  }
}

export default Signin;
