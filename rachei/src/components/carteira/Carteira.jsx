import React, { Component } from "react";
import Link from "../link/Link";
import "./carteira.css";
import PendenciaTile from "./PendenciaTile";

class Carteira extends Component {
  render() {
    const pendencias = [0, 1, 2];
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Sua Carteira Pessoal</h1>
          <h2 className="subtitle">
            Resolva suas pendências e atualize seu saldo pessoal
          </h2>
        </div>

        <div className="wallet-container">
          <p className="title is-5">Seu Saldo</p>
          <p>numero</p>
        </div>

        <div className="pendency-container">
          {pendencias.map(() => (
            <PendenciaTile />
          ))}
        </div>

        <div className="centered-button">
          <Link className="button is-primary is-rounded is-large" to="/deposit">
            Depositar Grana
          </Link>
        </div>
      </div>
    );
  }
}

export default Carteira;
