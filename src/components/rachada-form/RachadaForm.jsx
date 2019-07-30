import React, { Component } from "react";
import Link from "../link/Link";
import { Redirect } from "react-router-dom";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import "./rachada-form.css";
import axios from "../../utils/interceptor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class RachadaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [],
      users: [],
      chosenUsers: [],
      name: "",
      description: "",
      message: '',
      currentsearch: "",
      usersSearch: [],
      isMemberSearch: false,
      isCurrencySearch: false,
      isEdit: false,
      redirect: false
    };

    this.getUsers = this.getUsers.bind(this);
    this.handleChosenUsers = this.handleChosenUsers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  getUsers() {
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/users/")
      .then(response => {
        let users = response.data;
        users = users.filter(element => {
          return element._id !== this.props.user._id;
        });
        this.setState({
          allUsers: response.data,
          users: users,
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

    if (this.state.name === '' || this.state.description === '' || this.state.chosenUsers === '') {
      window.scrollTo(0, 0);
      this.setState({ message: 'Necessário preencher todos os campos' });
      return;
    }

    const chosenUsers = this.state.chosenUsers.map(element => {
      return element._id;
    });
    const group = {
      name: this.state.name,
      description: this.state.description,
      users: chosenUsers
    };

    let action = 'create';
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
      this.setState({redirect: true})
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteGroup() {
    let url = `${process.env.REACT_APP_DEV_API_URL}/groups/delete/${this.props.match.params.id}`;
    axios.delete(url)
    .then(() => {
      this.setState({redirect: true})
    })
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
    } else {
      const chosenUsers = this.state.chosenUsers;
      chosenUsers.push(this.props.user); 
      this.setState({ chosenUsers: chosenUsers });
    }
  }

  componentDidMount() {
    if (this.state.users.length <= 0) this.getUsers();
  }

  render() {
    return (
    <React.Fragment>
      {this.state.redirect 
        ? 
        (<Redirect to="/my-rachadas" />)
        :
      (<form onSubmit={this.handleSubmit}>
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
          {this.state.message ? (
            <div className="notification is-warning">
              <strong>{this.state.message}</strong>
            </div>
          ) : (
            ""
          )}
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
                      ~ {element.name} {element.surname}
                    </p>
                  </div>
                  {this.state.isEdit ?
                  ""
                : (<button type="button" className="delete-member" onClick={() => this.deleteChosenUser(element._id)}>X</button>)
                }
                  </div>
              );
            })}
          </div>

          <div className="centered-button">
            {this.state.isEdit ? (
              <div>
                <button to="/" className="button is-link">
                  Salvar
                </button>
                <button className="button is-danger" onClick={this.deleteGroup}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Deletar
                </button>
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
    </React.Fragment>
    )
  }
}
  export default RachadaForm