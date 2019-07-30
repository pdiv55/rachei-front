import React, { Component } from "react";
import Link from "../link/Link";
import "./new-password.css";
import axios from "../../utils/interceptor";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: "",
      repassword: "",
      message: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  componentWillMount () {
    axios.get(process.env.REACT_APP_DEV_API_URL + `/password/reset/${this.props.match.params.token}`)
    .then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message });
      } else {
        this.setState({ user: response.data });
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        {(this.state.message === '')
        ?
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-container">
            <h1 className="title">Crie uma nova senha</h1>
            <h2 className="subtitle">Tente lembrar dela dessa vez</h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Senha</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirmar Senha</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="repassword"
                  value={this.state.repassword}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="centered-button">
            <Link
              to="/new-password"
              type="submit"
              className="button is-link is-large"
              onSubmit={this.handleFormSubmit}
            >
              Enviar email
            </Link>
          </div>
        </form>
        :
        <p>{this.state.message}</p>
        }
      </div>
    );
  }
}

export default NewPassword;
