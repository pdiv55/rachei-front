import React, { Component } from "react";
import "./signin.css";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.loggedin) {
      this.setState({ redirect: true });
    }
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/my-rachadas" />;
    } else {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="title-container">
              <h1 className="title">Faça seu Login</h1>
              <h2 className="subtitle">
                Conecte-se a sua conta para acessar todas suas rachadas
              </h2>
            </div>

            <div className="form-container">
              <div className="field">
                <label className="label">Username</label>
                <div>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="ex: sicuts69"
                    value={this.state.username}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Senha</label>
                <div>
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
                  type="submit"
                  className="button is-link is-large"
                  onSubmit={this.handleFormSubmit}
                >
                  Acessar
                </button>
                <p>
                  Ainda não se cadastrou?{" "}
                  <a href="/user-form">Crie sua conta</a>
                </p>
                <p>
                  {" "}
                  Esqueceu sua senha?{" "}
                  <a href="/forgot-password">Crie uma nova</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Signin;
