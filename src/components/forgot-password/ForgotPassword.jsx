import React, { Component } from "react";
import "./forgot-password.css";
import axios from "../../utils/interceptor";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    axios.post(process.env.REACT_APP_DEV_API_URL + `/password/forgot/${this.state.email}`)
    .then(response => {
      this.setState({ 
        message: response.data.message,
        email: '',
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        {
          (this.state.message)
          ?
          <div className="notification is-danger">
            <strong>{this.state.message}</strong>
          </div>
          :
          ''
        }
        <form onSubmit={this.handleFormSubmit}>
          <div className="title-container">
            <h1 className="title">Receba um email de recuperação</h1>
            <h2 className="subtitle">Confirme seu email de cadastro</h2>
          </div>

          <div className="form-container">
            <div className="field">
              <label className="label">Email</label>
              <div>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="ex: sicutinho@gmail.com"
                  value={this.state.email}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="centered-button">
            <button type="submit" className="button is-link is-large" onSubmit={this.handleFormSubmit}>
              Enviar email
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
