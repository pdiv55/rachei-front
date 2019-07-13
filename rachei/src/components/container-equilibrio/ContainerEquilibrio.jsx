import React, { Component } from "react";
import "./container-equilibrio.css";
import EquilibrioTile from "../equilibrio-tile/EquilibrioTile";

class ContainerEquilibrio extends Component {
  render() {
    const equilibrios = [0, 1, 2];
    return (
      <div className="equilibrio-container">
        {equilibrios.map(() => (
          <EquilibrioTile />
        ))}
      </div>
    );
  }
}

export default ContainerEquilibrio;
