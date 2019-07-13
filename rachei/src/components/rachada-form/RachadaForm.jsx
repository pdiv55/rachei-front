import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  render() {
    return (
      <div>
        <Link to="/my-rachadas" className="button return">
          {"< Retornar ao Meu Painel"}
        </Link>
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
                placeholder="ex: Ilhabela com Ironhack"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="ex: Rachada para feriadao com squad"
              />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Participantes</label>
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                value="username do user (editavel)"
                placeholder="Procure o username do Pagador"
              />
              <button className="button is-primary add-member-button">+</button>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Currency</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="ex: Euros (EUR)"
              />
            </div>
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
