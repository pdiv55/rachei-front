import React, { Component } from "react";
import "./suggestion-box.css";

class SuggestionLine extends Component {
  constructor(props) {
    super(props);
    this.handleSearchElement = this.handleSearchElement.bind(this);
  }
  handleSearchElement() {
    const { item, pickItem } = this.props;
    pickItem(item);
  }

  render() {
    const { item } = this.props;
    return (
      <div onClick={this.handleSearchElement} className="suggestion-line">
        <div className="suggestion-info">
          <p>{item.username}</p>
        </div>
        <div className="suggestion-info">
          <p className="real-name">~ {item.name} + {item.surname}</p>
        </div>
      </div>
    );
  }
}

export default SuggestionLine;
