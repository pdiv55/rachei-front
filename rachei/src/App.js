import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import MyRachadas from "./components/my-rachadas/MyRachadas";
import CreateRachada from "./components/create-rachada/CreateRachada";
import Rachada from "./components/rachada/Rachada";
import CreateDespesa from "./components/create-despesa/CreateDespesa";
import Carteira from "./components/carteira/Carteira";
import Logout from "./components/logout/Logout";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
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
