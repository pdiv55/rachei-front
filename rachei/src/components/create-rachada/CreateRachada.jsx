import React, { Component } from "react";
import "./create-rachada.css";
import axios from 'axios';


class CreateRachada extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      name: '',
      description: '',
      currency: '',
    }

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers (id) {
    console.log(process.env.REACT_APP_DEV_API_URL+'/users/group/'+id);
    axios.get(process.env.REACT_APP_DEV_API_URL+'/users/group/'+id)
    .then(response => {
      console.log(response.data);
      this.setState({
        users: response.data,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentWillMount() {
    this.getUsers('5d1f87608d749fc84ccb49a0');
  }

  render() {
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Crie uma Rachada</h1>
          <h2 className="subtitle">
            Coloque as informaçoes da rachada para começar a dividir as despesas
          </h2>
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

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Criar rachada</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRachada;
