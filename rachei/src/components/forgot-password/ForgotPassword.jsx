import React, { Component } from "react";
import Link from "../link/Link";
import "./forgot-password.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.email });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.state.email
    };
    this.props.loginUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-container">
            <h1 className="title">Receba um email de recuperação</h1>
            <h2 className="subtitle">Confirme seu email de cadastro</h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Email</label>
              <div>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="ex: sicutinho@gmail.com"
                  value={this.state.email}
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

export default ForgotPassword;
