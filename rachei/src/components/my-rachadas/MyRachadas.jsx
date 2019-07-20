import React, { Component } from "react";
import "./my-rachadas.css";
import Link from "../link/Link";
import RachadaTile from "./RachadaTile";
import SuggestionBox from "../suggestion-box/SuggestionBox";

class MyRachadas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false
    };
  }

  handleSearch = event => {
    const state = event.target.value;
    this.setState({ currentsearch: state });
    if (state === "") {
      this.setState({ isSearch: false });
    } else {
      this.setState({ isSearch: true });
    }
  };

  handleBlur = () => {
    this.setState({ isSearch: false });
  };

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

        <div className="field">
          <div className="search-bar">
            <input
              className="input"
              type="text"
              placeholder="Procure uma rachada"
              onChange={this.handleSearch}
              onBlur={this.handleBlur}
            />
            {this.state.isSearch ? <SuggestionBox /> : ""}
          </div>
        </div>

        <div className="rachada-tile-container">
          {rachadas ? (
            rachadas.map(rachada => {
              return <RachadaTile rachada={rachada} />;
            })
          ) : (
            <p>Você não tem nenhuma rachada!</p>
          )}
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
