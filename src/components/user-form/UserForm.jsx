import React, { Component } from "react";
import "./user-form.css";
import Link from "../link/Link";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
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
      fileUrl: "",
      field: "",
      validationClass: "",
      fieldMessage: "",
      message: "",
      successResponse: "",
      redirect: false,
      isEdit: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
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
        state.fieldMessage = "Senhas diferentes!";
      } else {
        state.validationClass = "";
        state.fieldMessage = "";
      }
    }
    this.setState(state);
  }

  handleFile(event) {
    const file = URL.createObjectURL(event.target.files[0]);
    this.setState({
      file: event.target.files[0],
      fileUrl: file
    });
  }

  handleFormUpdate(event) {
    event.preventDefault();
    const state = this.state;
    let action = `users/update/${this.props.user._id}`;
    let url = `${process.env.REACT_APP_DEV_API_URL}/${action}/`;
      axios
        .post(url, state)
        .then(response => {
          this.setState({
            redirect: true,
            successResponse: "Usuario atualizado com sucesso"
          });
          if (this.state.file) {
            const formData = new FormData();
            formData.append("image", this.state.file);
            axios.post(
              process.env.REACT_APP_DEV_API_URL +
                "/files/upload/user/" +
                response.data.data._id,
              formData
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
        window.scrollTo(0, 0);
    }

  handleFormSubmit(event) {
    event.preventDefault();
    const state = this.state;
    if (state.validationClass === "help is-danger") {
      this.setState({
        message: "Campos com erro!"
      });
      window.scrollTo(0, 0);
      return;
    }

    let formValidator = true;
    const stateArray = Object.entries(state);
    for (let i = 0; i <= 6; i++) {
      if (stateArray[i][1] === "") {
        formValidator = false;
        this.setState({ message: "Necessário preencher todos os campos" });
        window.scrollTo(0, 0);
      }
    }

    if (formValidator) {
      let action = 'auth/signup';
      if(this.state.isEdit) {
        action = `users/update/${this.props.user._id}`;
      }
      let url = `${process.env.REACT_APP_DEV_API_URL}/${action}/`;
      axios
        .post(url, state)
        .then(response => {
          this.setState({
            redirect: true,
            successResponse: response.data.message
          });
          if (this.state.file) {
            const formData = new FormData();
            formData.append("image", this.state.file);
            axios.post(
              process.env.REACT_APP_DEV_API_URL +
                "/files/upload/user/" +
                response.data.data._id,
              formData
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  componentWillMount() {
    if (this.props.location.state) {
      if (this.props.location.state.isEdit) {
        this.setState({ 
          isEdit: true,
          username: this.props.user.username,
          name: this.props.user.name,
          surname: this.props.user.surname,
          cpf: this.props.user.cpf,
          email: this.props.user.email,
        });
      }
    }
  }

  render() {
    if (this.state.redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: this.state.successResponse }
          }}
        />
      );
    } else {
      return (
        <form>
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
              <h1 className="title">Cadastro de Rachador <span role="img" aria-label="rocket">🚀</span></h1>
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
              <div className="notification is-warning">
                <strong>{this.state.message}</strong>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="form-container">
            <div className="upload-wrapper">
              {this.state.fileUrl ? (
                <img
                  src={this.state.fileUrl}
                  className="profile-pic-added"
                  alt="profile-pic"
                />
              ) : (
                ""
              )}
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
                <button type="submit" className="button is-link is-large" onClick={this.handleFormUpdate}>
                  Salvar
                </button>
              ) : (
                <button
                  type="submit"
                  className="button is-link is-large"
                  onClick={this.handleFormSubmit}
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
}

export default UserForm;
