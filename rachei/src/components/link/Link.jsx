import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

class Link extends Component {
  handleScroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <RouterLink {...this.props} onClick={this.handleScroll}>
        {this.props.children}
      </RouterLink>
    );
  }
}

export default Link;
