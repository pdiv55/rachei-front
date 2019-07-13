import React, { Component } from "react";
import "../my-rachadas/my-rachadas.css";

class RachadaTile extends Component {
  render() {
    return (
      <div className="cool-tile">
        <a href="/rachada">
          <article className="notification">
            <p className="title is-5">Name Rachada</p>
            <p className="subtitle is-7">Creation Date</p>
            <p className="subtitle is-6">Total</p>
          </article>
        </a>
      </div>
    );
  }
}

export default RachadaTile;
