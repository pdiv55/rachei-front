import React, { Component } from "react";
import "./container-equilibrio.css";

class EquilibrioTile extends Component {
  render() {
    return (
      <div className="notification equilibrio-tile">
        <div className="info-equilibrios-tile">
          <p className="title is-6">Name Member</p>
          <p>deve</p>
          <p className="title is-6">Name Member</p>
        </div>
        <div className="info-total">
          <p className="title is-4">Total</p>
        </div>
      </div>
    );
  }
}

export default EquilibrioTile;
