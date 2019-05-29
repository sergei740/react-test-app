import React from "react";
import "./App.css";
import UserListPageComponent from "./components/userListPage/UserListPageComponent";
import LoginPageComponent from "./components/loginPage/LoginPageComponent";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={LoginPageComponent} />
      <Route path="/UserListPageComponent" component={UserListPageComponent} />
    </HashRouter>
  );
}

export default App;
