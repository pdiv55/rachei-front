import React, { Component } from "react";
import "./home-hero.css";

class HomeHero extends Component {
  render() {
    return (
      <div>
        <section className="hero home-hero is-info is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title title-special is-1 is-spaced">
                Rache sem estresse
              </p>
              <p className="subtitle is-4">
                Dividir despesas com amigos nunca foi tão fácil
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeHero;
