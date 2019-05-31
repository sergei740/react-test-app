import React from "react";
import "./App.css";
import UserListPageComponent from "./components/userListPage/UserListPageComponent";
import LoginPageComponent from "./components/loginPage/LoginPageComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProtectedListRoute, ProtectedSignInRoute } from './protectedRoute';


function App() {

  return (
    <Router>
      <Route exact path="/" component={ LoginPageComponent }/>
      <ProtectedListRoute path="/list" component={ UserListPageComponent }/>
      {/*<ProtectedSignInRoute path="/UserListPageComponent" component={ UserListPageComponent }/>*/ }
    </Router>
  );
}

export default App;
