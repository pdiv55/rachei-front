import React, { Component } from "react";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import "./rachada.css";

class Rachada extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <h1 className="title">NOME DA RACHADA</h1>
          <h2 className="subtitle">Descriçao da rachada</h2>
        </div>
        <div className="button-container">
          <a className="button is-link is-large" href="/">
            Despesas
          </a>
          <a className="button is-link is-large" href="/">
            Equilibrio
          </a>
        </div>
        <ContainerDespesas />
        <ContainerEquilibrio />
        <a className="button is-primary is-rounded centered is-large" href="/">
          Adicionar Despesa
        </a>
      </div>
    );
  }
}

export default Rachada;
