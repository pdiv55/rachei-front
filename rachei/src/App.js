import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import MyRachadas from "./components/my-rachadas/MyRachadas";
import RachadaForm from "./components/rachada-form/RachadaForm";
import RachadaView from "./components/rachada-view/RachadaView";
import DespesaForm from "./components/despesa-form/DespesaForm";
import Carteira from "./components/carteira/Carteira";
import Logout from "./components/logout/Logout";
import Footer from "./components/footer/Footer";
import "bulma/css/bulma.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      loginType: "",
      loginMessage: "",
      user: {}
    };

    this.loginUser = this.loginUser.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  loginUser(user) {
    axios
      .post(process.env.REACT_APP_DEV_API_URL + "/auth/login/", user)
      .then(response => {
        this.setState({
          loggedin: true,
          loginType: "",
          loginMessage: "",
          user: response.data.user,
          expenses: response.data.data[0],
          groups: response.data.data[1]
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <NavBar loggedin={this.state.loggedin} name={this.state.user.name} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loggedin={this.state.loggedin} />}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/signin"
            render={() => {
              return (
                <Signin
                  loginUser={this.loginUser}
                  loggedin={this.state.loggedin}
                />
              );
            }}
          />
          <ProtectedRoute
            path="/my-rachadas"
            loggedIn={this.state.loggedin}
            render={() => {
              return <MyRachadas groups={this.state.groups} />;
            }}
          />
          <ProtectedRoute loggedIn={this.state.loggedin} path="/rachada-form" component={RachadaForm} />
          <ProtectedRoute loggedIn={this.state.loggedin} path="/rachada" component={RachadaView} />
          <ProtectedRoute loggedIn={this.state.loggedin} path="/despesa-form" component={DespesaForm} />
          <ProtectedRoute loggedIn={this.state.loggedin} path="/my-carteira" component={Carteira} />
          <ProtectedRoute loggedIn={this.state.loggedin} path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
