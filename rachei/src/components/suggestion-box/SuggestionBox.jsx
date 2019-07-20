import React, { Component } from "react";
import "./suggestion-box.css";
import SuggestionLine from "./SuggestionLine";

class SuggestionBox extends Component {
  render() {
    const suggestions = [0, 1, 2];
    return (
      <div className="suggestion-container">
        {suggestions.map(() => (
          <SuggestionLine />
        ))}
      </div>
    );
  }
}

export default SuggestionBox;
