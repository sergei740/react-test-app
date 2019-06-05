import React from "react";
import "./App.css";
import UserListPageComponent from "./components/userListPage/UserListPageComponent";
import LoginPageComponent from "./components/loginPage/LoginPageComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { ProtectedListRoute, ProtectedSignInRoute } from './protectedRoute';


function App() {

  return (
    <Router>
      <ProtectedSignInRoute exact path="/" component={ LoginPageComponent }/>
      <ProtectedListRoute exact path="/list" component={ UserListPageComponent }/>
    </Router>
  );
}

export default App;
