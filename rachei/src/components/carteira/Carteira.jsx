import React, { Component } from "react";
import "./carteira.css";

class Carteira extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="title-container">
            <h1 className="title">Sua Carteira Pessoal</h1>
            <h2 className="subtitle">
              Encontre aqui uma visao global de suas despesas no nosso app
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
                <div />
              </article>
            </a>
            <a className="cool-tile" href="/rachada">
              <article className="notification">
                <p className="title is-5">Name Rachada</p>
                <p className="subtitle is-7">Creation Date</p>
                <p className="subtitle is-6">Total</p>
                <div />
              </article>
            </a>
          </div>

          <a
            className="button is-primary is-rounded centered is-large"
            href="/"
          >
            Pagar Dividas
          </a>
        </div>
      </div>
    );
  }
}

export default Carteira;
