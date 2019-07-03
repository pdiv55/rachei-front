import React, { Component } from "react";
import "./container-despesas.css";

class ContainerDespesas extends Component {
  render() {
    return (
      <div>
        <div>
          <a className="cool-tile" href="/rachada">
            <article className="notification">
              <p>Name Despesa</p>
              <p>Paid by</p>
              <p>Creation Date</p>
              <p>Total</p>
            </article>
          </a>
        </div>

        <div>
          <a className="cool-tile" href="/rachada">
            <article className="notification">
              <p>Name Despesa</p>
              <p>Paid by</p>
              <p>Creation Date</p>
              <p>Total</p>
            </article>
          </a>
        </div>

        <div>
          <a className="cool-tile" href="/rachada">
            <article className="notification">
              <p>Name Despesa</p>
              <p>Paid by</p>
              <p>Creation Date</p>
              <p>Total</p>
            </article>
          </a>
        </div>
        <div>
          <p className="title is-5">Total Rachada</p>
        </div>
        <a className="button is-primary is-rounded centered is-large" href="/">
          Adicionar Despesa
        </a>
        <div>
          <p className="title is-5">Meu Total</p>
        </div>
      </div>
    );
  }
}

export default ContainerDespesas;
