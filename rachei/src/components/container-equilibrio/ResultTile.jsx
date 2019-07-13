import React, { Component } from "react";
import "./container-equilibrio.css";

class ResultTile extends Component {
  render() {
    return (
      <div className="notification">
        <div className="result-tile">
          <div className="chart-tile">
            <div className="chart-negative" />
            <p>Montante</p>
          </div>
          <p>Name Member</p>
          <div className="chart-tile">
            <div className="chart-positive" />
            <p>Montante</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultTile;
