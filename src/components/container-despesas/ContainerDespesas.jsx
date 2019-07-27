import React, { Component } from "react";
import "./container-despesas.css";
import Link from "../link/Link";
import DespesaTile from "./DespesaTile";

class ContainerDespesas extends Component {
  constructor (props) {
    super(props);

    this.state = {
      total: 0,
    }
  }

  static getDerivedStateFromProps (props, state) {
    const { expenses } = props;
    if (expenses.length > 0) {
      const values = expenses.map(element => element.value);
      const total = values.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
      state.total = total;
    }
    return null;
  }

  render() {
    const { rachada, users, expenses } = this.props;

    return (
      <div className="despesa-container">
        <div className="totals-container">
          <div className="info-total">
            <p className="title is-5">Total Rachada</p>
            <p>R${this.state.total},00</p>
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
        </div>

        <div>
          {expenses.map((element, index) => (
            <DespesaTile key={index} expense={element} users={users} rachada={rachada}/>
          ))}
        </div>
      </div>
    );
  }
}

export default ContainerDespesas;
