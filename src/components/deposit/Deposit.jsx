import React, { Component } from "react";
import Link from "../link/Link";
import "./deposit.css";

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      value: this.state.value
    };
    this.props.loginUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-container">
            <h1 className="title">Deposite Grana na sua Carteira virtual</h1>
            <h2 className="subtitle">Entre o montante que deseja depositar</h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Montante</label>
              <div>
                <input
                  className="input"
                  type="number"
                  name="value"
                  placeholder="ex: 10,00"
                  value={this.state.value}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="centered-button">
            <Link
              to="/"
              type="submit"
              className="button is-link is-large"
              onSubmit={this.handleFormSubmit}
            >
              Depositar
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Deposit;
