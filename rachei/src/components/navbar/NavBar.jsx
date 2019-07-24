import React, { Component } from "react";
import Link from "../link/Link";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    const loggedStatus = this.props.loggedin;
    const name = this.props.name;

    return (
      <div>
        {!loggedStatus ? (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link to="/" className="navbar-logo">
                <img src="/img/logo.svg" width="80%" alt="rachei-logo" />
              </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link to="/user-form" className="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/signin" className="button is-light">
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link to="/" className="navbar-logo">
                <img src="/img/logo.svg" width="80%" alt="rachei-logo" />
              </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/my-rachadas" className="navbar-item">
                  Meu Painel
                </Link>
                <Link to="/my-carteira" className="navbar-item">
                  Minha Carteira
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <Link
                    to={{
                      pathname: "/user-form",
                      state: {
                        isEdit: true
                      }
                    }}
                    className="profile-pic"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                  <p className="title is-6">Oi, {name} 👋</p>
                  <div className="buttons">
                    <Link to="/logout" className="button is-danger">
                      <strong>Log Out</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default NavBar;
