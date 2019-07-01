import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="title-container">
            <h1 className="title">Faça seu Login</h1>
            <h2 className="subtitle">
              Conecte-se a sua conta para acessar todas suas rachadas
            </h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="ex: sicuts" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-danger" type="text" />
              </div>
              <p className="help is-danger">This password is invalid</p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Acessar</button>
              </div>
            </div>

            <p>
              Ainda nao é cadastrado? <a href="/signup">Crie sua conta</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
