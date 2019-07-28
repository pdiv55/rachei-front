import React, { Component } from "react";
import Link from "../link/Link";
import ContainerDespesas from "../container-despesas/ContainerDespesas";
import ContainerEquilibrio from "../container-equilibrio/ContainerEquilibrio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./rachada-view.css";
import axios from '../../utils/interceptor';

class RachadaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equilibrio: false,
      users: [],
      expenses: [],
      rachada: this.props.location.state.rachada,
    };
  }

  handleEquilibrioContainerChange = () => {
    this.setState({ equilibrio: true });
  };

  handleDespesasContainerChange = () => {
    this.setState({ equilibrio: false });
  };

  componentWillMount () {
    const expenses = axios.get(process.env.REACT_APP_DEV_API_URL + `/expenses/group/${this.props.location.state.rachada._id}`);
    const users = axios.get(process.env.REACT_APP_DEV_API_URL + `/users/group/${this.props.location.state.rachada._id}`);
    Promise.all([expenses, users])
    .then(data => {
      this.setState({
        expenses: data[0].data,
        users: data[1].data,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

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
                pathname: `/rachada-form/${this.state.rachada._id}`,
                state: {
                  isEdit: true,
                  rachada: this.state.rachada,
                }
              }}
              className="button is-warning"
            >
              <FontAwesomeIcon icon={faEdit} />
              Editar Rachada
            </Link>
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
          {(this.state.equilibrio && this.state.expenses) ? (
            <ContainerEquilibrio />
          ) : (
            <ContainerDespesas
              expenses={this.state.expenses}
              users={this.state.users}
              rachada={this.props.location.state.rachada._id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RachadaView;
