import React, { Component } from "react";
import Link from "../link/Link";
import "./new-password.css";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      repassword: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.password });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-container">
            <h1 className="title">Crie uma nova senha</h1>
            <h2 className="subtitle">Tente lembrar dela dessa vez</h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Senha</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirmar Senha</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={this.state.repassword}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="centered-button">
            <Link
              to="/new-password"
              type="submit"
              className="button is-link is-large"
              onSubmit={this.handleFormSubmit}
            >
              Enviar email
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPassword;
