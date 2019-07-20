import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Rachei®</strong> <br /> Made with ♥ by Marbmo and Zizil{" "}
              <br />
              Ironhaque 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
