import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./carteira.css";

class PendenciaTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEarning: false
    };
  }

  render() {
    return (
      <div className="notification equilibrio-tile">
        <div className="info-equilibrios-tile">
          <p className="title is-5">Name Member</p>
          {this.state.isEarning ? (
            <p className="subtitle is-7">te deve</p>
          ) : (
            <p className="subtitle is-7">espera</p>
          )}
          <p className="title is-5">Total</p>
        </div>
        <div className="centered-button">
          {this.state.isEarning ? (
            <Link className="button is-primary" to="/">
              Cobrar
            </Link>
          ) : (
            <Link className="button is-danger" to="/">
              Pagar
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default PendenciaTile;
