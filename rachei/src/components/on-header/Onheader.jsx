import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./onheader.css";

class Onheader extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navBar">
            <ul>
              <Link to="/">Logo</Link>
              <Link to="/rachadas">My Rachadas</Link>
              <Link to="/carteira">My Carteira</Link>
              <Link to="/logout">Logout</Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Onheader;
