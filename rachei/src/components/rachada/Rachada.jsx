import React, { Component } from "react";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./rachada.css";

class Rachada extends Component {
  render() {
    return (
      <div>
        <div className="actions-container">
          <a className="button is-warning" href="/">
            <FontAwesomeIcon icon={faEdit} />
          </a>
          <a className="button is-danger" href="/">
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
        </div>
        <div className="container-cool">
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
        </div>

        <ContainerDespesas />
        <ContainerEquilibrio />
      </div>
    );
  }
}

export default Rachada;
