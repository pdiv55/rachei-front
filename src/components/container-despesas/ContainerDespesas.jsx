import React, { Component } from "react";
import "./container-despesas.css";
import Link from "../link/Link";
import DespesaTile from "./DespesaTile";

class ContainerDespesas extends Component {
  render() {
    const { rachada, users, expenses } = this.props;

    return (
      <div className="despesa-container">
        {expenses.map((element, index) => (
          <DespesaTile key={index} expense={element} users={users} rachada={rachada}/>
        ))}
        <div className="totals-container">
          <div className="info-total">
            <p className="title is-5">Total Rachada</p>
            <p>numero</p>
          </div>
          <Link
            to={{
              pathname: `/despesa-form/${rachada}`,
              state: {
                users: users
              }
            }}
            className="button is-primary is-rounded is-large"
          >
            Adicionar Despesa
          </Link>
          <div className="info-total">
            <p className="title is-5">Meu Total</p>
            <p>numero</p>
          </div>
        </div>

        <div>
          {expenses.map((element, index) => (
            <DespesaTile key={index} expense={element} />
          ))}
        </div>
      </div>
    );
  }
}

export default ContainerDespesas;
