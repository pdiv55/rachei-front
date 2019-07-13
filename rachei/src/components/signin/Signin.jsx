import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleFormSubmit() {
    console.log(this.state);
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    const result = this.props.loginUser(user);
    console.log(result);
  }

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
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="ex: sicuts"
                  value={this.state.username}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Senha</label>
              <div className="control">
                <input
                  className="input is-danger"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
              <p className="help is-danger">This password is invalid</p>
            </div>

            <div className="centered-button">
              <button
                className="button is-link is-large"
                onClick={this.handleFormSubmit}
              >
                Acessar
              </button>
              <p>
                Ainda não se cadastrou? <a href="/signup">Crie sua conta</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
