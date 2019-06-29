import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./offheader.css";

class Offheader extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navBar">
            <ul>
              <Link to="/">Logo</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Offheader;
