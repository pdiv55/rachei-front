import React, { Component } from "react";
import HomeHero from "../home-hero/HomeHero";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero loggedin={this.props.loggedin} />
      </div>
    );
  }
}

export default Home;
