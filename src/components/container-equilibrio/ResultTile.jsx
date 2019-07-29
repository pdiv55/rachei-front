import React, { Component } from "react";
import "./container-equilibrio.css";

class ResultTile extends Component {
  render() {
    const { result, total } = this.props;
    let width = (result.total/total)*100
    if (result.total < 0) {
      width = width * -1;
    }
    const style = { width: `${width}%` };
    return (
      <div className="notification">
        {(result.total > 0)
        ?
        <div className="result-tile">
          <div className="chart-tile-negative">
          </div>
          <p>{result.name}</p>
          <div className="chart-tile-positive">
            <div className="positive" style={style}>
              <p>R${result.total}</p>
            </div>
          </div>
        </div>
        :
        <div className="result-tile">
          <div className="chart-tile-negative">
            <div className="negative" style={style}>
              <p>R${result.total}</p>
            </div>
          </div>
          <p>{result.name}</p>
          <div className="chart-tile-positive">
          </div>
        </div>
        }
        
      </div>
    );
  }
}

export default ResultTile;
