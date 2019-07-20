import React, { Component } from "react";
import "./my-rachadas.css";
import { Link } from "react-router-dom";
import RachadaTile from "./RachadaTile";

class MyRachadas extends Component {
  render() {
    const rachadas = this.props.groups;
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Seu Painel de Rachadas</h1>
          <h2 className="subtitle">
            Clique em uma rachada para ver o detalhe das despesas
          </h2>
        </div>

        <div className="search-bar">
          <input
            className="input"
            type="text"
            placeholder="Procure uma rachada"
          />
          <button className="button">Buscar</button>
        </div>

        <div className="rachada-tile-container">
          {rachadas.map(rachada => (
            <RachadaTile rachada={rachada} />
          ))}
        </div>
        <div className="centered-button">
          <Link
            className="button is-primary is-rounded is-large"
            to="/rachada-form"
          >
            Criar Rachada
          </Link>
        </div>
      </div>
    );
  }
}

export default MyRachadas;
