import React, { Component } from "react";
import Link from "../link/Link";
import "./despesa-form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";
import MemberCheckbox from "../member-checkbox/MemberCheckbox";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import axios from "../../utils/interceptor";

class DespesaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      date: "",
      message: '',
      isMemberSearch: false,
      isEdit: false,
      users: this.props.location.state.users,
      usersSearch: this.props.location.state.users,
      currentsearch: "",
      chosenFromUser: "",
      chosenToUsers: []
    };

    this.handleChosenUsers = this.handleChosenUsers.bind(this);
    this.handleFromUser = this.handleFromUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleFromUser(user) {
    const chosenFromUser = user;
    this.setState({ chosenFromUser: chosenFromUser });
  }

  handleChosenUsers(id, event) {
    const chosenToUsers = this.state.chosenToUsers;
    if (event) {
      chosenToUsers.push(id);
      this.setState({
        chosenToUsers: chosenToUsers
      });
    } else {
      const filteredUsers = chosenToUsers.filter(element => {
        return element !== id;
      });
      this.setState({
        chosenToUsers: filteredUsers
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const users = [...this.state.chosenToUsers];
    users.push(this.state.chosenFromUser._id);

    const expense = {
      name: this.state.name,
      date: this.state.date,
      group: this.props.match.params,
      from: this.state.chosenFromUser._id,
      to: this.state.chosenToUsers,
    };

    const chosenToUsers = this.state.chosenToUsers;

    const individualExpenses = chosenToUsers.map(element => {
      return {
        value: parseInt(this.state.value / chosenToUsers.length),
        from: this.state.chosenFromUser._id,
        to: element
      };
    });

    let action = 'create'
    if(this.state.isEdit) {
      action = 'update';
    }
    let url = `${process.env.REACT_APP_DEV_API_URL}/expenses/${action}/${this.props.match.params.id}`;
    axios.post(url, { expense, individualExpenses })
      .then(response => {
        this.setState({
          name: "",
          value: "",
          date: "",
          from: "",
          to: [],
          chosenFromUser: "",
          message: response.data.message
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount () {
    if (this.props.location.state.isEdit) {
      let toUsers = this.props.location.state.expense.to;
      toUsers = toUsers.map(element => {
        return element._id;
      })
      this.setState({
        isEdit: this.props.location.state.isEdit,
        chosenFromUser: this.props.location.state.expense.from,
        chosenToUsers: toUsers,
        value: this.props.location.state.expense.value,
        date: this.props.location.state.expense.date,
        name: this.props.location.state.expense.name
      })
    }
  }

  render() {
    return (
      <div>
        <Link to="/rachada" className="button return">
          {"< Retornar à Rachada"}
        </Link>
        <div className="title-container">
          {this.state.isEdit ? (
            <h1 className="title">Edite sua Despesa</h1>
          ) : (
            <h1 className="title">Adicione uma Despesa</h1>
          )}
          <h2 className="subtitle">
            Entre as informaçoes da despesa para rachar o valor com seus amigos
          </h2>
        </div>

        <form className="form-container" onSubmit={this.handleSubmit}>
          <button className="button is-primary bill">
            <FontAwesomeIcon icon={faFileInvoice} />+
          </button>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="ex: Drinks"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Valor</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="ex: 36,00"
                name="value"
                value={this.state.value}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Data</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="date"
                value={this.state.date}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">De</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Procure o username do Pagador"
                onChange={this.handleMemberSearch}
                onBlur={this.handleMemberBlur}
                value={this.state.currentsearch}
              />
            </div>
            {this.state.isMemberSearch ? (
              <SuggestionBox
                items={this.state.usersSearch}
                pickItem={this.handleFromUser}
              />
            ) : (
              ""
            )}
            {this.state.chosenFromUser ? (
              <div className="suggestion-line">
                <div className="suggestion-info">
                  <p>{this.state.chosenFromUser.username}</p>
                </div>
                <div className="suggestion-info">
                  <p className="real-name">
                    ~ {this.state.chosenFromUser.name} +{" "}
                    {this.state.chosenFromUser.surname}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="field">
            <label className="label">Para</label>
            <div className="checkbox-container">
              {this.state.users.map((element, index) => {
                let checked = false;
                if (this.state.chosenToUsers.indexOf(element._id) > 0) {
                  checked = true;
                }
                return (
                <MemberCheckbox
                  key={index}
                  user={element}
                  handleUser={this.handleChosenUsers}
                  checked={checked}
                />
              )})}
            </div>
          </div>

          <div className="centered-button">
            {this.state.isEdit ? (
              <div>
                <Link to="/" className="button is-link">
                  Salvar
                </Link>
                <Link to="/" className="button is-danger">
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Deletar
                </Link>
              </div>
            ) : (
              <button
                type="submit"
                className="button is-link is-large"
                onClick={this.handleSubmit}
              >
                Adicionar Despesa
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default DespesaForm;
