import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Cadastro de Rachador</h1>
          <h2 className="subtitle">
            Comece a rachar com seus amigos em um click !
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
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                placeholder="ex: Gabriel"
              />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">CPF</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="ex: 23647902802"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input is-danger"
                type="email"
                placeholder="ex: sicutinho@ironhack.com"
              />
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Criar conta</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
