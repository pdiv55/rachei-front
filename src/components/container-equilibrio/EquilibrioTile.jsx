import React, { Component } from "react";
import "./container-equilibrio.css";

class EquilibrioTile extends Component {
  render() {
    const { element } = this.props;
    return (
      <div className="notification equilibrio-tile">
        {
          (element[1].value > 0)
          ?
          <React.Fragment>
            <div className="info-equilibrios-tile">
              <p className="title is-6">{element[1].to.name}</p>
              <p>deve</p>
              <p className="title is-6">{element[1].from.name}</p>
            </div>
            <div className="info-total">
              <p className="title is-4">R${(element[1].value)}</p>
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            <div className="info-equilibrios-tile">
              <p className="title is-6">{element[1].from.name}</p>
              <p>deve</p>
              <p className="title is-6">{element[1].to.name}</p>
            </div>
            <div className="info-total">
              <p className="title is-4">R${(element[1].value)*(-1)}</p>
            </div>
          </React.Fragment>
        }
        
      </div>
    );
  }
}

export default EquilibrioTile;
