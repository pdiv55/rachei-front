import React, { Component } from "react";
import Link from "../link/Link";
import "./despesa-form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";
import MemberCheckbox from "../member-checkbox/MemberCheckbox";
import SuggestionBox from "../suggestion-box/SuggestionBox";
import axios from '../../utils/interceptor';

class DespesaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMemberSearch: false,
      isEdit: false,
      users: [],
    };
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
    setTimeout(() => {
      this.setState({ isMemberSearch: false, currentsearch: '' });
    }, 100);
  };

  componentWillMount() {
    axios.get(process.env.REACT_APP_DEV_API_URL + "/users/group/" + this.props.match.params.groupId)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const members = [1, 2, 3];
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

        <div className="form-container">
          <button className="button is-primary bill">
            <FontAwesomeIcon icon={faFileInvoice} />+
          </button>
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
                className="input"
                type="email"
                placeholder="Procure o username do Pagador"
                onChange={this.handleMemberSearch}
                onBlur={this.handleMemberBlur}
              />
            </div>
            {this.state.isMemberSearch ? <SuggestionBox /> : ""}
          </div>

          <div className="field">
            <label className="label">Para</label>
            <div className="checkbox-container">
              {members.map(() => (
                <MemberCheckbox />
              ))}
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
              <button className="button is-link is-large">
                Adicionar Despesa
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DespesaForm;
