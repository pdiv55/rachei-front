import React, { Component } from "react";
import "./my-rachadas.css";

class MyRachadas extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Seu painel de Rachadas</h1>
          <h2 className="subtitle">
            Clique em uma rachada para ver o detalhe das despesas do grupo
          </h2>
        </div>

        <div className="search-bar">
          <input
            className="input"
            type="text"
            placeholder="Procure uma rachada"
          />
          <p className="control">
            <button className="button">Buscar</button>
          </p>
        </div>

        <div className="tile-container">
          <a className="cool-tile" href="/rachada">
            <article className="notification">
              <p className="title is-5">Name Rachada</p>
              <p className="subtitle is-7">Creation Date</p>
              <p className="subtitle is-6">Total</p>
            </article>
          </a>
          <div />
          <a className="cool-tile" href="/rachada">
            <article className="notification">
              <p className="title is-5">Name Rachada</p>
              <p className="subtitle is-7">Creation Date</p>
              <p className="subtitle is-6">Total</p>
            </article>
          </a>
        </div>

        <a
          className="button is-primary is-rounded is-large centered-rachadas"
          href="/create-rachada"
        >
          Criar Rachada
        </a>
      </div>
    );
  }
}

export default MyRachadas;
