import React, { Component } from "react";
import Link from "../link/Link";
import "./carteira.css";

class PendenciaTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEarning: false
    };
  }

  render() {
    const { expense } = this.props;
    return (
      <div className="notification pendency-tile">
        <div className="info-pendency-tile">
          <p className="title is-5">{expense[1].name}</p>
          {this.state.isEarning ? (
            <p className="subtitle is-7">te deve</p>
          ) : (
            <p className="subtitle is-7">espera</p>
          )}
          <p className="title is-5">R${expense[1].total}</p>
        </div>
        <div>
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
