import React, { Component } from "react";
import Link from "../link/Link";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./rachada-view.css";
import axios from '../../utils/interceptor';

class RachadaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equilibrio: false,
      rachada: {},
      expenses: [],
      isLoading: true
    };
  }

  handleEquilibrioContainerChange = () => {
    this.setState({ equilibrio: true });
  };

  handleDespesasContainerChange = () => {
    this.setState({ equilibrio: false });
  };

  async componentWillMount() {
    const id = this.props.match.params.id;
    const group = axios.get(process.env.REACT_APP_DEV_API_URL + "/groups/" + id);
    const expenses = axios.get(process.env.REACT_APP_DEV_API_URL + "/expenses/group/" + id);
    await axios.all([group, expenses])
    .then(axios.spread((group, expenses) => {
      console.log(group);
      console.log(expenses);
      this.setState({ rachada: group.data, expenses: expenses.data, isLoading: false });
    }))
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      (!this.state.isLoading) 
      ?
      <div>
        <div className="actions-container">
          <Link to="/my-rachadas" className="button return">
            {"< Retornar ao Meu Painel"}
          </Link>
          <div>
            <Link to="/rachada-form" className="button is-warning">
              <FontAwesomeIcon icon={faEdit} />
              Editar
            </Link>
            <a className="button is-danger" href="/">
              <FontAwesomeIcon icon={faTrashAlt} />
              Deletar
            </a>
          </div>
        </div>
        <div className="title-container-special">
          <h1 className="title">{this.state.rachada.name}</h1>
          <h2 className="subtitle">{this.state.rachada.description}</h2>
        </div>
        <div className="switch-buttons-container">
          <button
            className="button is-link is-large"
            onClick={this.handleDespesasContainerChange}
          >
            Despesas
          </button>
          <button
            className="button is-link is-large"
            onClick={this.handleEquilibrioContainerChange}
          >
            Equilibrio
          </button>
        </div>
        <div className="containers-container">
          {this.state.equilibrio ? (
            <ContainerEquilibrio />
          ) : (
            <ContainerDespesas expenses={this.state.expenses} groupId={this.state.rachada._id}/>
          )}
        </div>
      </div>
      :
      <p>Carregando...</p>
    );
  }
}

export default RachadaView;
