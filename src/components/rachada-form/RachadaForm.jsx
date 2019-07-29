import React, { Component } from "react";
import Link from "../link/Link";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import "./rachada-form.css";
import axios from "../../utils/interceptor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class RachadaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [],
      users: [],
      chosenUsers: [],
      name: "",
      description: "",
      currency: "",
      currentsearch: "",
      usersSearch: [],
      isMemberSearch: false,
      isCurrencySearch: false,
      isEdit: false
    };

    this.getUsers = this.getUsers.bind(this);
    this.handleChosenUsers = this.handleChosenUsers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/users/")
      .then(response => {
        this.setState({
          allUsers: response.data,
          users: response.data,
          usersSearch: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleMemberSearch = event => {
    const state = event.target.value;
    const oldText = this.state.currentsearch;
    if (state === "") {
      this.setState({ isMemberSearch: false });
    } else {
      this.setState({ isMemberSearch: true });
    }
    let items;
    if (state !== oldText) {
      items = [...this.state.users];
      const filteredItems = items.filter(e => {
        return e.name.toUpperCase().indexOf(state.toUpperCase()) > -1;
      });
      this.setState({ usersSearch: filteredItems });
    } else {
      this.setState({ users: this.state.users });
    }
    this.setState({ currentsearch: state });
  };

  handleMemberBlur = () => {
    setTimeout(() => {
      this.setState({ isMemberSearch: false, currentsearch: "" });
    }, 100);
  };

  handleChosenUsers(user) {
    const chosenUsers = this.state.chosenUsers;
    chosenUsers.push(user);
    let users = this.state.users;
    users = users.filter(element => {
      return chosenUsers.indexOf(element) < 0;
    });
    this.setState({ chosenUsers: chosenUsers, users: users });
  }

  deleteChosenUser (id) {
    let chosenUsers = this.state.chosenUsers;
    chosenUsers = chosenUsers.filter(element => element._id !== id)
    let users = this.state.allUsers;
    for (let i = 0; i < chosenUsers.length; i++) {
      users = users.filter(element => element._id !== chosenUsers[i]._id)
    }
    this.setState({ 
      chosenUsers: chosenUsers,
      users: users
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const chosenUsers = this.state.chosenUsers.map(element => {
      return element._id;
    });
    const group = {
      name: this.state.name,
      description: this.state.description,
      currency: this.state.currency,
      users: chosenUsers
    };

    let action = 'create'
    if(this.state.isEdit) {
      action = `update/${this.props.match.params.id}`;
    }
    let url = `${process.env.REACT_APP_DEV_API_URL}/groups/${action}/`;

    axios.post(url, group)
    .then(response => {
        this.setState({
          name: "",
          description: "",
          currency: "",
          users: [],
          chosenUsers: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    if (this.props.location.state) {
      if (this.props.location.state.isEdit) {
        this.setState({ 
          isEdit: true,
          chosenUsers: this.props.location.state.rachada.users,
          name: this.props.location.state.rachada.name,
          description: this.props.location.state.rachada.description,
        });
      }
    }
    if (this.state.users.length <= 0) this.getUsers();
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
                onChange={e => this.handleChange(e)}
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
                onChange={e => this.handleChange(e)}
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
            {this.state.isMemberSearch ? (
              <SuggestionBox
                items={this.state.usersSearch}
                pickItem={this.handleChosenUsers}
              />
            ) : (
              ""
            )}
            {this.state.chosenUsers.map((element, index) => {
              return (
                <div key={index} className="suggestion-line">
                  <div className="suggestion-info">
                    <p>{element.username}</p>
                  </div>
                  <div className="suggestion-info">
                    <p className="real-name">
                      ~ {element.name} + {element.surname}
                    </p>
                  </div>
                  <button type="button" className="delete-member" onClick={() => this.deleteChosenUser(element._id)}>X</button>
                </div>
              );
            })}
          </div>

          <div className="centered-button">
            {this.state.isEdit ? (
              <div>
                <Link to="/" className="button is-warning">
                  <FontAwesomeIcon icon={faEdit} />
                  Editar Rachada
                </Link>
                <Link to="/" className="button is-danger">
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Deletar Rachada
                </Link>
              </div>
            ) : (
          <button
            type="submit"
            className="button is-link is-large"
            onSubmit={this.handleSubmit}
          >
            Criar Rachada
          </button>
          )}
        </div>
        </div>
      </form>
    )}
            }
            
export default RachadaForm;
