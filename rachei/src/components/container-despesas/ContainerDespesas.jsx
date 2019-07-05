import React, { Component } from "react";
import "./container-despesas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Despesa from "../despesa/Despesa";

class ContainerDespesas extends Component {
  render() {
    const despesas = [0, 1, 2];
    return (
      <div>
        {despesas.map(() => (
          <Despesa />
        ))}
        <div className="flex-totals">
          <div>
            <p className="title is-5">Total Rachada</p>
          </div>
          <a className="button is-primary is-rounded is-large" href="/">
            Adicionar Despesa
          </a>
          <div>
            <p className="title is-5">Meu Total</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerDespesas;
