import React, { Component } from "react";
import "./my-rachadas.css";
import Link from "../link/Link";
import RachadaTile from "./RachadaTile";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import axios from '../../utils/interceptor';

class MyRachadas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false,
      groups: [],
      currentSearch: '',
      groupsSearch: [],
      allGroups: [],
    };
  }

  handleSearch = event => {
    const state = event.target.value;
    const oldText = this.state.currentsearch;
    let items;
    if (state !== oldText) {
      items = [...this.state.allGroups];
      const filteredItems = items.filter(e => {
        return e.name.toUpperCase().indexOf(state.toUpperCase()) > -1;
      });
      this.setState({ groups: filteredItems });
    } else {
      this.setState({ groups: this.state.allGroups });
    }
    this.setState({ currentsearch: state });
  };

  componentWillMount() {
    axios.get(process.env.REACT_APP_DEV_API_URL + "/groups/user/")
    .then(response => {
      this.setState({ groups: response.data, allGroups: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
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
            />
          </div>
        </div>

        <div className="rachada-tile-container">
          {this.state.groups ? (
            this.state.groups.map((rachada, index) => {
              return <RachadaTile key={index} rachada={rachada}/>;
            })
          ) : (
            <p>Você não tem nenhuma rachada!</p>
          )}
        </div>
        <div className="centered-button">
          <Link
            className="button is-primary is-rounded is-large"
            to="/rachada-form/new"
          >
            Criar Rachada
          </Link>
        </div>
      </div>
    );
  }
}

export default MyRachadas;
