import React, { Component } from "react";
import Link from "../link/Link";
import "./carteira.css";
import PendenciaTile from "./PendenciaTile";
import axios from "../../utils/interceptor";

class Carteira extends Component {
  constructor (props) {
    super (props);

    this.state = {
      expenses: [],
    }
  }

  componentWillMount () {
    axios.get(process.env.REACT_APP_DEV_API_URL + "/expenses/user/")
    .then(response => {
      this.setState({
        expenses: response.data,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  render() {
    const expenses = this.state.expenses;
    return (
      <div>
        <div className="title-container">
          <h1 className="title">Sua Carteira Pessoal</h1>
          <h2 className="subtitle">
            Resolva suas pendências e atualize seu saldo pessoal
          </h2>
        </div>

        <div className="wallet-container">
          <p className="title is-5">Seu Saldo</p>
          <p>numero</p>
        </div>

        <div className="pendency-container">
          {expenses.map((expense, index) => (
            <PendenciaTile key={index} expense={expense}/>
          ))}
        </div>

        <div className="centered-button">
          <Link className="button is-primary is-rounded is-large" to="/deposit">
            Depositar Grana
          </Link>
        </div>
      </div>
    );
  }
}

export default Carteira;
