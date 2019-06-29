import React, { Component } from "react";
import Onheader from "../on-header/Onheader";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import "./rachada.css";

class Rachada extends Component {
  render() {
    return (
      <div>
        <Onheader />
        <p>THIS IS THE SPECIFIC RACHADA PAGE</p>
        <ContainerDespesas />
        <ContainerEquilibrio />
        <a href="/create-despesa">Criar Despesa</a>
      </div>
    );
  }
}

export default Rachada;
