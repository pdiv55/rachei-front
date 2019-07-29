import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import UserForm from "./components/user-form/UserForm";
import Signin from "./components/signin/Signin";
import ForgotPassword from "./components/forgot-password/ForgotPassword";
import NewPassword from "./components/new-password/NewPassword";
import MyRachadas from "./components/my-rachadas/MyRachadas";
import RachadaForm from "./components/rachada-form/RachadaForm";
import RachadaView from "./components/rachada-view/RachadaView";
import DespesaForm from "./components/despesa-form/DespesaForm";
import Carteira from "./components/carteira/Carteira";
import Deposit from "./components/deposit/Deposit";
import Logout from "./components/logout/Logout";
import Footer from "./components/footer/Footer";
import "bulma/css/bulma.css";
import axios from "./utils/interceptor";

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
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("authorization") && !this.state.loggedin)
      this.checkLogin();
  }

  checkLogin() {
    axios
      .get(process.env.REACT_APP_DEV_API_URL + "/auth/refresh/")
      .then(response => {
        this.setState({
          loggedin: true,
          loginType: "",
          loginMessage: "",
          user: response.data
        });
      });
  }

  loginUser(user) {
    axios
      .post(process.env.REACT_APP_DEV_API_URL + "/auth/login/", user)
      .then(response => {
        this.setState({
          loggedin: true,
          loginType: "",
          loginMessage: "",
          user: response.data.user
        });
        localStorage.setItem("authorization", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateLoginStatus(answer) {
    if (answer) {
      this.setState({ loggedin: false });
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar
          loggedin={this.state.loggedin}
          user={this.state.user}
          updateStatus={this.updateLoginStatus}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loggedin={this.state.loggedin} />}
          />
          <Route path="/user-form" render={(props) => {
            return <UserForm user={this.state.user} {...props} />
          }}
          />
          <Route
            path="/signin"
            render={props => {
              return (
                <Signin
                  loginUser={this.loginUser}
                  loggedin={this.state.loggedin}
                  {...props}
                />
              );
            }}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/new-password/:token" component={NewPassword} />
          <ProtectedRoute
            path="/my-rachadas"
            loggedIn={this.state.loggedin}
            render={() => {
              return <MyRachadas groups={this.state.groups} />;
            }}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/rachada-form/:id"
            render={(props) => {
              return <RachadaForm user={this.state.user} {...props}/>
            }}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/rachada/:id"
            component={RachadaView}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/despesa-form/:id"
            component={DespesaForm}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/my-carteira"
            component={Carteira}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/deposit"
            component={Deposit}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedin}
            path="/logout"
            component={Logout}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
