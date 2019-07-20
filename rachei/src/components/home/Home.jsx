import React, { Component } from "react";
import HomeHero from "../home-hero/HomeHero";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero loggedin={this.props.loggedin} />
        <section className="section">
          <div className="container">
            <h1 className="title">Funcionalidades</h1>
            <h2 className="circle-container">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
