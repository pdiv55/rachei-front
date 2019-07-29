import React, { Component } from "react";
import Link from "../link/Link";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "../../utils/interceptor";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { updateStatus } = this.props;
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/auth/logout/")
      .then(() => {
        console.log("entrou");
        localStorage.removeItem("authorization");
        updateStatus(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const loggedStatus = this.props.loggedin;
    const user = this.props.user;

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
                    {user.profilePicture ? (
                      <img src={user.profilePicture} alt="profile-pic" />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </Link>
                  <p className="title is-6">Oi, {user.name} 👋</p>
                  <button className="button is-danger" onClick={this.logout}>
                    <strong>Log Out</strong>
                  </button>
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
