import React, { Component } from "react";
import Link from "../link/Link";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import "./rachada-form.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class RachadaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      description: "",
      currency: "",
      currentsearch: "",
      isMemberSearch: false,
      isCurrencySearch: false,
      isEdit: false
    };

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(id) {
    console.log(process.env.REACT_APP_DEV_API_URL + "/users/group/" + id);
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/users/group/" + id)
      .then(response => {
        console.log(response.data);
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getUsers("5d1f87608d749fc84ccb49a0");
  }

  handleMemberSearch = event => {
    const state = event.target.value;
    this.setState({ currentsearch: state });
    if (state === "") {
      this.setState({ isMemberSearch: false });
    } else {
      this.setState({ isMemberSearch: true });
    }
  };

  handleMemberBlur = () => {
    this.setState({ isMemberSearch: false });
  };

  handleCurrencySearch = event => {
    const state = event.target.value;
    this.setState({ currentsearch: state });
    if (state === "") {
      this.setState({ isCurrencySearch: false });
    } else {
      this.setState({ isCurrencySearch: true });
    }
  };

  handleCurrencyBlur = () => {
    this.setState({ isCurrencySearch: false });
  };

  render() {
    return (
      <div>
        {this.state.isEdit ? (
          <Link to="/rachada" className="button return">
            {"< Retornar à Rachada"}
          </Link>
        ) : (
          <Link to="/my-rachadas" className="button return">
            {"< Retornar ao Meu Painel"}
          </Link>
        )}
        <div className="title-container">
          {this.state.isEdit ? (
            <h1 className="title">Edite sua Rachada</h1>
          ) : (
            <h1 className="title">Crie uma Rachada</h1>
          )}
          {this.state.isEdit ? (
            <h2 className="subtitle">
              Modifique as informações da rachada e continue dividindo as
              despesas
            </h2>
          ) : (
            <h2 className="subtitle">
              Coloque as informações da rachada para começar a dividir as
              despesas
            </h2>
          )}
        </div>
        <div className="form-container">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="ex: Viagem Ilhabela"
                maxlength="15"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="ex: Rachada para feriadão com squad"
              />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Participantes</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Procure o username"
                onChange={this.handleMemberSearch}
                onBlur={this.handleMemberBlur}
              />
            </div>
            {this.state.isMemberSearch ? <SuggestionBox /> : ""}
          </div>

          <div className="field">
            <label className="label">Currency</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="ex: Euros (EUR)"
                onChange={this.handleCurrencySearch}
                onBlur={this.handleCurrencyBlur}
              />
            </div>
            {this.state.isCurrencySearch ? <SuggestionBox /> : ""}
          </div>

          <div className="centered-button">
            {this.state.isEdit ? (
              <div>
                <a className="button is-warning" href="/">
                  <FontAwesomeIcon icon={faEdit} />
                  Editar
                </a>
                <a className="button is-danger" href="/">
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Deletar
                </a>
              </div>
            ) : (
              <button className="button is-link is-large">Criar Rachada</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RachadaForm;
