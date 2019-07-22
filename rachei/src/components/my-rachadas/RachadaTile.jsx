import React, { Component } from "react";
import Link from "../link/Link";
import "./my-rachadas.css";
import axios from "../../utils/interceptor";

class RachadaTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rachada } = this.props;
    return (
      <div className="rachada-tile">
        <Link to={`/rachada/${rachada._id}`}>
          <article className="notification">
            <p className="title is-5">{rachada.name}</p>
            <p className="subtitle is-7">{rachada.creationDate}</p>
            <p className="subtitle is-6">Total</p>
          </article>
        </Link>
      </div>
    );
  }
}

export default RachadaTile;
