import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../container-equilibrio/container-equilibrio.css";

class EquilibrioTile extends Component {
  render() {
    return (
      <div>
        <Link to="/despesa-form">
          <article className="notification despesa-tile">
            <div className="info-tile">
              <p>Name Member</p>
              <p>Montante</p>
            </div>
          </article>
        </Link>
      </div>
    );
  }
}

export default EquilibrioTile;
