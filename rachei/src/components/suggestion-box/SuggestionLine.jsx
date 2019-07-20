import React, { Component } from "react";
import "./suggestion-box.css";

class SuggestionLine extends Component {
  handleSearchElement() {
    console.log("clickou");
  }

  render() {
    return (
      <div onClick={this.handleSearchElement} className="suggestion-line">
        <div className="suggestion-info">
          <p>username</p>
        </div>
        <div className="suggestion-info">
          <p className="real-name">~ name + surname</p>
        </div>
      </div>
    );
  }
}

export default SuggestionLine;
