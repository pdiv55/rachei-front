import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import MyRachadas from "./components/my-rachadas/MyRachadas";
import CreateRachada from "./components/create-rachada/CreateRachada";
import Rachada from "./components/rachada/Rachada";
import CreateDespesa from "./components/create-despesa/CreateDespesa";
import Carteira from "./components/carteira/Carteira";
import Logout from "./components/logout/Logout";
import "bulma/css/bulma.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      loginType: '',
      loginMessage: '',
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser (user) {
    console.log('chamou');
    axios.post(process.env.REACT_APP_DEV_API_URL+'/users/login/', user)
    .then(response => {
      console.log(response);
      return 'é nóis';
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <NavBar loggedin={this.state.loggedin} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loggedin={this.state.loggedin} />}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" render={() => {
            return <Signin loginUser={this.loginUser} />
          }} />
          <Route path="/my-rachadas" component={MyRachadas} />
          <Route path="/create-rachada" component={CreateRachada} />
          <Route path="/rachada" component={Rachada} />
          <Route path="/create-despesa" component={CreateDespesa} />
          <Route path="/carteira" component={Carteira} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
