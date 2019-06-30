import React, { Component } from "react";
import "./create-despesa.css";

class CreateDespesa extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Adicione uma Despesa</h1>
          <h2 className="subtitle">
            Entre as informaçoes da despesa para rachar o valor com seus amigos
          </h2>
        </div>

        <div className="form-container">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="ex: Drinks" />
            </div>
          </div>

          <div className="field">
            <label className="label">Valor</label>
            <div className="control">
              <input
                className="input is-success"
                type="number"
                placeholder="ex: 36.00"
              />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Data</label>
            <div className="control">
              <input className="input" type="date" />
            </div>
          </div>

          <div className="field">
            <label className="label">De</label>
            <div className="control">
              <input
                className="input is-danger"
                type="email"
                value="username do user (editavel)"
                placeholder="Procure o username do Pagador"
              />
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Para</label>
            <div className="control">
              <input type="checkbox" name="member1" className="checkbox" />
              <label className="label-checkbox">Membro Grupo 1</label>
              <input type="checkbox" name="member2" className="checkbox" />
              <label className="label-checkbox">Membro Grupo 2</label>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Adicionar despesa</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDespesa;
