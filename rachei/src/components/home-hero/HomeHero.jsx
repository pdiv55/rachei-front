import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import "./home-hero.css";

class HomeHero extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-fullheight-with-navbar">
          <div className="hero-head">
            <NavBar />
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title is-1 is-spaced">Rache sem estresse</p>
              <p className="subtitle is-4">
                Dividir despesas com amigos nunca foi tao facil
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeHero;
