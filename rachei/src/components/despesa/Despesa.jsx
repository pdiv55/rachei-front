import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../container-despesas/container-despesas.css";

class Despesa extends Component {
  render() {
    return (
      <div>
        <div className="despesa-container">
          <a href="/rachada">
            <article className="notification flex-despesa">
              <div className="info-container">
                <p>Name Despesa</p>
                <p>Paid by</p>
              </div>
              <div className="info-container">
                <p>Creation Date</p>
                <p>Total</p>
              </div>
              <div className="mini-actions-container">
                <a className="button is-warning is-small spaced" href="/">
                  <FontAwesomeIcon icon={faEdit} />
                </a>
                <a className="button is-danger is-small spaced" href="/">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </a>
              </div>
            </article>
          </a>
        </div>
      </div>
    );
  }
}

export default Despesa;
