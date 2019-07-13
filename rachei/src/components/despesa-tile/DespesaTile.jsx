import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../container-despesas/container-despesas.css";

class DespesaTile extends Component {
  render() {
    return (
      <div>
        <Link to="/despesa-form">
          <article className="notification despesa-tile">
            <div className="info-tile">
              <p>Name Despesa</p>
              <p>Paid by</p>
            </div>
            <div className="info-tile">
              <p>Creation Date</p>
              <p>Total</p>
            </div>
          </article>
        </Link>
      </div>
    );
  }
}

export default DespesaTile;
