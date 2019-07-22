import React, { Component } from "react";
import "./container-despesas.css";
import Link from "../link/Link";
import DespesaTile from "./DespesaTile";

class ContainerDespesas extends Component {
  render() {
    const { expenses, groupId } = this.props;
    return (
      <div className="despesa-container">
        {expenses.map((element, index) => (
          <DespesaTile key={index} expense={element} />
        ))}
        <div className="totals-container">
          <div className="info-total">
            <p className="title is-5">Total Rachada</p>
            <p>numero</p>
          </div>
          <Link
            to={`/despesa-form/${groupId}`}
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
