import React, { Component } from "react";
import Link from "../link/Link";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./rachada-view.css";

class RachadaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equilibrio: false,
      users: this.props.location.state.users,
      expenses: this.props.location.state.expenses,
      rachada: this.props.location.state.rachada
    };
  }

  handleEquilibrioContainerChange = () => {
    this.setState({ equilibrio: true });
  };

  handleDespesasContainerChange = () => {
    this.setState({ equilibrio: false });
  };

  render() {
    return (
      <div>
        <div className="actions-container">
          <Link to="/my-rachadas" className="button return">
            {"< Retornar ao Meu Painel"}
          </Link>
          <div>
            <Link
              to={{
                pathname: "/rachada-form",
                state: {
                  isEdit: true
                }
              }}
              className="button is-warning"
            >
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
        <div>
          {this.state.equilibrio ? (
            <ContainerEquilibrio />
          ) : (
            <ContainerDespesas
              expenses={this.state.expenses}
              rachada={this.state.rachada}
              users={this.state.users}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RachadaView;
