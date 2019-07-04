import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
  render() {
    const loggedStatus = this.props.loggedin;

    return (
      <div>
        {!loggedStatus ? (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                  alt="rachei-logo"
                />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary" href="/signup">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" href="/signin">
                      Sign in
                    </a>
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
              <a className="navbar-item" href="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                  alt="rachei-logo"
                />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/my-rachadas">
                  My Rachadas
                </a>
                <a className="navbar-item" href="/carteira">
                  My Carteira
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-danger" href="/logout">
                      <strong>Log Out</strong>
                    </a>
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
