import React, { Component } from "react";
import "./container-equilibrio.css";
import ResultTile from "./ResultTile";
import EquilibrioTile from "./EquilibrioTile";

class ContainerEquilibrio extends Component {
  render() {
    const results = [0, 1, 2];
    const equilibrios = [0, 1, 2];
    return (
      <div className="equilibrio-container">
        <div className="result-container">
          <p className="title is-4">Resumo</p>
          {results.map(() => (
            <ResultTile />
          ))}
        </div>
        <div className="how-to-container">
          <p className="title is-4">Como equilibrar ?</p>
          {equilibrios.map(() => (
            <EquilibrioTile />
          ))}
        </div>
      </div>
    );
  }
}

export default ContainerEquilibrio;
