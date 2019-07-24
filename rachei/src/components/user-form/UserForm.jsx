import React, { Component } from "react";
import "./user-form.css";
import Link from "../link/Link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit } from "@fortawesome/free-solid-svg-icons";
require("dotenv").config();

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      surname: "",
      cpf: "",
      email: "",
      password: "",
      repassword: "",
      file: "",
      field: "",
      validationClass: "",
      fieldMessage: "",
      message: "",
      isEdit: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.location.state) {
      if (this.props.location.state.isEdit) {
        this.setState({ isEdit: true });
      }
    }
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    if (event.target.name === "email") {
      state.field = "email";
      const email = event.target.value;
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regex.test(email.toLowerCase())) {
        state.validationClass = "help is-success";
        state.fieldMessage = "E-mail válido!";
      } else {
        state.validationClass = "help is-danger";
        state.fieldMessage = "E-mail inválido!";
      }
    } else if (event.target.name === "password") {
      state.field = "password";
      const password = event.target.value;
      if (password.length < 6) {
        state.validationClass = "help is-danger";
        state.fieldMessage = "Senha muito curta!";
      } else {
        state.validationClass = "";
        state.fieldMessage = "";
      }
    } else if (event.target.name === "repassword") {
      state.field = "repassword";
      const repassword = event.target.value;
      if (this.state.password !== repassword) {
        state.validationClass = "help is-danger";
        state.fieldMessage = "Diferente da senha!";
      } else {
        state.validationClass = "";
        state.fieldMessage = "";
      }
    }
    this.setState(state);
  }

  handleFile(event) {
    this.setState({ file: event.target.files[0] });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const state = this.state;
    if (state.validationClass === "help is-danger") {
      this.setState({
        message: "Campos com erro!"
      });
      return;
    }

    let formValidator = true;
    const stateArray = Object.entries(state);
    for (let i = 0; i <= 6; i++) {
      if (stateArray[i][1] === "") {
        formValidator = false;
        this.setState({ message: 'Necessário preencher todos os campos' })
      }
    }

    if (formValidator) {
      axios
        .post(process.env.REACT_APP_DEV_API_URL + "/auth/signup", state)
        .then(response => {
          if (response.data.message) {
            this.setState({
              username: "",
              name: "",
              surname: "",
              cpf: "",
              email: "",
              password: "",
              repassword: "",
              message: response.data.message
            });
            if (this.state.file) {
              const formData = new FormData();
              formData.append("image", this.state.file);
              axios.post(process.env.REACT_APP_DEV_API_URL + "/files/upload/user/" + response.data.data._id, formData);
            }
          } else {
            this.setState({
              message: "Tente novamente"
            });
          }
        });
    } else {
      this.setState({
        message: "Por favor, preencha todos os campos!"
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.isEdit ? (
          <Link to="/my-rachadas" className="button return">
            {"< Retornar ao Meu Painel"}
          </Link>
        ) : (
          ""
        )}
        <div className="title-container">
          {this.state.isEdit ? (
            <h1 className="title">Edite seu Cadastro de Rachador</h1>
          ) : (
            <h1 className="title">Cadastro de Rachador</h1>
          )}
          {this.state.isEdit ? (
            <h2 className="subtitle">
              Atualize aqui suas informações de usuário
            </h2>
          ) : (
            <h2 className="subtitle">
              Comece a rachar com seus amigos em um click !
            </h2>
          )}
          {this.state.message ? (
            <div className="notification is-danger">
              <strong>{this.state.message}</strong>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-container">
          <div className="upload-wrapper">
            <button className="button is-primary camera">
              <FontAwesomeIcon icon={faCamera} />+
              <input
                type="file"
                name="image"
                onChange={e => this.handleFile(e)}
              />
            </button>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                name="username"
                className="input"
                type="text"
                placeholder="ex: sicuts69"
                value={this.state.username}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nome</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="ex: Gabriel"
                value={this.state.name}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Sobrenome</label>
            <div className="control">
              <input
                name="surname"
                className="input"
                type="text"
                placeholder="ex: Sicutinho"
                value={this.state.surname}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">CPF</label>
            <div className="control">
              <input
                name="cpf"
                className="input"
                type="number"
                placeholder="ex: 23647902802"
                value={this.state.cpf}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="input"
                type="email"
                placeholder="ex: sicutinho@ironhack.com"
                value={this.state.email}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              {this.state.field === "email" ? (
                <p className={this.state.validationClass}>
                  {this.state.fieldMessage}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                value={this.state.password}
                name="password"
                className="input"
                type="password"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              {this.state.field === "password" ? (
                <p className={this.state.validationClass}>
                  {this.state.fieldMessage}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Confirmar Senha</label>
            <div className="control">
              <input
                value={this.state.repassword}
                name="repassword"
                className="input"
                type="password"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              {this.state.field === "repassword" ? (
                <p className={this.state.validationClass}>
                  {this.state.fieldMessage}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="centered-button">
            {this.state.isEdit ? (
              <Link to="/" className="button is-warning is-large">
                <FontAwesomeIcon icon={faEdit} />
                Editar
              </Link>
            ) : (
              <button
                type="submit"
                className="button is-link is-large"
                onSubmit={this.handleFormSubmit}
              >
                Criar Conta
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default UserForm;
