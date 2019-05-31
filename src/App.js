import React from "react";
import "./App.css";
import UserListPageComponent from "./components/userListPage/UserListPageComponent";
import LoginPageComponent from "./components/loginPage/LoginPageComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={ LoginPageComponent }/>
      <Route path="/UserListPageComponent" component={ UserListPageComponent }/>
    </Router>
  );
}

export default App;
