import React, { Component } from "react";
import Link from "../link/Link";
import { Redirect } from 'react-router-dom';
import SuggestionBox from "../suggestion-box/SuggestionBox";
import "./rachada-form.css";
import axios from "../../utils/interceptor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class RachadaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      chosenUsers: [],
      name: "",
      description: "",
      currency: "",
      currentsearch: "",
      isMemberSearch: false,
      isCurrencySearch: false,
      isEdit: false
    };

    this.getUsers = this.getUsers.bind(this);
    this.choseUser = this.choseUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    axios.get(process.env.REACT_APP_DEV_API_URL + "/users/")
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    if (this.state.users.length <= 0) this.getUsers();
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleMemberSearch = event => {
    const state = event.target.value;
    this.setState({ currentsearch: state, isMemberSearch: true });
    if (state === "") {
      this.setState({ isMemberSearch: false });
    } else {
      this.setState({ isMemberSearch: true });
    }
  };

  handleMemberBlur = () => {
    setTimeout(() => {
      this.setState({ isMemberSearch: false, currentsearch: '' });
    }, 100);
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

  handleSubmit(event) {
    event.preventDefault();
    const chosenUsers = this.state.chosenUsers.map(element => {
      return element._id;
    })
    const group = {
      name: this.state.name,
      description: this.state.description,
      currency: this.state.currency,
      users: chosenUsers,
    }
    axios.post(process.env.REACT_APP_DEV_API_URL + "/groups/create/", group)
    .then(response => {
      return (<Redirect to={`/rachada/${response.data._id}`}/>)
    })
    .catch(err => {
      console.log(err);
    })
  }

  choseUser(user) {
    const chosenUsers = this.state.chosenUsers;
    chosenUsers.push(user);
    let users = this.state.users;
    users = users.filter(element => {
      return chosenUsers.indexOf(element) < 0;
    })
    this.setState({ chosenUsers: chosenUsers, users: users });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                name="name"
                className="input"
                type="text"
                placeholder="ex: Viagem Ilhabela"
                maxLength="15"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                name="description"
                className="textarea"
                placeholder="ex: Rachada para feriadão com squad"
                value={this.state.description}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
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
                value={this.state.currentsearch}
              />
            </div>
            {this.state.isMemberSearch ? <SuggestionBox items={this.state.users} pickItem={this.choseUser}/> : ""}
            {
              this.state.chosenUsers.map((element, index) => {
                return ( 
                <div key={index} className="suggestion-line">
                  <div className="suggestion-info">
                    <p>{element.username}</p>
                  </div>
                  <div className="suggestion-info">
                    <p className="real-name">~ {element.name} + {element.surname}</p>
                  </div>
                </div>
                )
              })
            }
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
              ''
            )}
          </div>
        </div>
        <button type="submit" className="button is-link is-large" onSubmit={this.handleSubmit}>Criar Rachada</button>
      </form>
    );
  }
}

export default RachadaForm;
