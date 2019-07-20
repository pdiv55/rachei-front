import React, { Component } from "react";
import Link from "../link/Link";
import "./container-despesas.css";

class DespesaTile extends Component {
  render() {
    return (
      <Link to="/despesa-form" className="notification despesa-tile">
        <div className="info-tile">
          <p>Name Despesa</p>
          <p>Paid by</p>
        </div>
        <div className="info-tile">
          <p>Creation Date</p>
          <p>Total</p>
        </div>
      </Link>
    );
  }
}

export default DespesaTile;
