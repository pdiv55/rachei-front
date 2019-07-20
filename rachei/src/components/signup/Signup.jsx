import React, { Component } from "react";
import "./signup.css";
import axios from "axios";
require("dotenv").config();

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      surname: "",
      cpf: "",
      email: "",
      password: "",
      message: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleFormSubmit() {
    const state = this.state;
    axios
      .post(process.env.REACT_APP_DEV_API_URL + "/users/create", state)
      .then(response => {
        if (response.data.message) {
          this.setState({
            username: "",
            name: "",
            surname: "",
            cpf: "",
            email: "",
            password: "",
            message: response.data.message
          });
        } else {
          this.setState({
            message: "Tentar novamente"
          });
        }
      });
  }

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
              <input
                name="username"
                className="input"
                type="text"
                placeholder="ex: sicuts"
                value={this.state.username}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input is-success"
                type="text"
                placeholder="ex: Gabriel"
                value={this.state.name}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Surname</label>
            <div className="control">
              <input
                name="surname"
                className="input"
                type="text"
                placeholder="ex: Sicutinho"
                value={this.state.surname}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">CPF</label>
            <div className="control">
              <input
                name="cpf"
                className="input"
                type="number"
                placeholder="ex: 23647902802"
                value={this.state.cpf}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="input is-danger"
                type="email"
                placeholder="ex: sicutinho@ironhack.com"
                value={this.state.email}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                value={this.state.password}
                name="password"
                className="input"
                type="text"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>
          <div className="centered-button">
            <button
              className="button is-link is-large"
              onClick={this.handleFormSubmit}
            >
              Criar conta
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
