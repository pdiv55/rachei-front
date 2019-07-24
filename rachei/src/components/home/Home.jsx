import React, { Component } from "react";
import HomeHero from "../home-hero/HomeHero";
import Link from "../link/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faBalanceScale,
  faWallet
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero loggedin={this.props.loggedin} />
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Funcionalidades</h1>
            <div className="icons-container">
              <div className="icon-card">
                <div className="circle">
                  <FontAwesomeIcon icon={faCoins} className="coolest-icon" />
                </div>
                <div className="icon-text">
                  <p className="title is-4">Rachadas</p>
                  <p>
                    Rache tudo com seus amigos e acompanhe as despesas do seu
                    grupo em tempo real.
                  </p>
                </div>
              </div>
              <div className="icon-card">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faBalanceScale}
                    className="coolest-icon"
                  />
                </div>
                <div className="icon-text">
                  <p className="title is-4">Equilíbrio</p>
                  <p>
                    Saiba, a todo momento, como equilibrar as dividas entre seus
                    amigos.
                  </p>
                </div>
              </div>
              <div className="icon-card">
                <div className="circle">
                  <FontAwesomeIcon icon={faWallet} className="coolest-icon" />
                </div>
                <div className="icon-text">
                  <p className="title is-4">Carteira</p>
                  <p className="textinho">
                    Deposite grana na sua carteira virtual e gerencie suas
                    contas sem atrito.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="centered-button specific">
            <Link to="/user-form">
              <button className="button is-link is-large">
                Começar a Rachar
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
