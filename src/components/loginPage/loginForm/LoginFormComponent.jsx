import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

export default class LoginFormComponent extends React.Component {

  render() {
    return (
      <form className="loginForm">
        <TextField
          label="Name"
          id="name"
        />
        <TextField
          label="Password"
          id="password"
        />
        <NavLink to="/UserListPageComponent">
          <Button
            variant="contained"
            color="primary"
            className="loginFormBtn"
          >
            Log In
          </Button>
        </NavLink>
      </form>
    );
  }
}