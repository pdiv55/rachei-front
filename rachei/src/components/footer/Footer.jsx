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
            <p className="title is-5">
              <strong>Rachei®</strong>
            </p>
            <p className="subtitle is-6">
              Made with ♥ by Marbmo and Zizil <br /> Logo designed 🌈 by Sr.
              Fredoca
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
