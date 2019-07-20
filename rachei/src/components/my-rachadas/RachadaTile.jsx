import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./my-rachadas.css";
import axios from "axios";

class RachadaTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creationDate: "",
      expensesList: []
    };
  }

  componentWillMount() {
    const rachada = this.props.rachada;
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/group/" + rachada._id)
      .then(response => {
        console.log(response);
        this.setState({
          name: rachada.name,
          creationDate: rachada.creationDate,
          expensesList: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="rachada-tile">
        <Link to="/rachada">
          <article className="notification">
            <p className="title is-5">{this.state.name}</p>
            <p className="subtitle is-7">{this.state.creationDate}</p>
            <p className="subtitle is-6">Total</p>
          </article>
        </Link>
      </div>
    );
  }
}

export default RachadaTile;
