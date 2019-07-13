import React, { Component } from "react";
import "./container-despesas.css";
import { Link } from "react-router-dom";
import DespesaTile from "./DespesaTile";

class ContainerDespesas extends Component {
  render() {
    const despesas = [0, 1, 2];
    return (
      <div className="despesa-container">
        {despesas.map(() => (
          <DespesaTile />
        ))}
        <div className="totals-container">
          <div className="info-total">
            <p className="title is-5">Total Rachada</p>
            <p>numero</p>
          </div>
          <Link
            to="/despesa-form"
            className="button is-primary is-rounded is-large"
          >
            Adicionar Despesa
          </Link>
          <div className="info-total">
            <p className="title is-5">Meu Total</p>
            <p>numero</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerDespesas;
