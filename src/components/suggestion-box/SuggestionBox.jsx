import React, { Component } from "react";
import "./suggestion-box.css";
import SuggestionLine from "./SuggestionLine";

class SuggestionBox extends Component {
  render() {
    const { items, pickItem } = this.props;
    return (
      <div className="suggestion-container">
        {items.map((element, index) => (
          <SuggestionLine key={index} item={element} pickItem={pickItem}/>
        ))}
      </div>
    );
  }
}

export default SuggestionBox;
