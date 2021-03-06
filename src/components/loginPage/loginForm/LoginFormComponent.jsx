import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DataService } from "../../../services/dataService";

export default class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  };

  onHandleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  signIn = () => {
    DataService.signIn(this.state.login, this.state.password)
      .then(() => {
        this.props.history.push('/UserListPageComponent');
        // console.log(this);
      });
  };


  render() {
    return (
      <form className="loginForm">
        <TextField label="Name" id="login" value={ this.state.login } onInput={ e => this.onHandleChange(e) }/>
        <TextField label="Password" id="password" value={ this.state.password }
                   onInput={ e => this.onHandleChange(e) }/>
        <Button
          variant="contained"
          color="primary"
          className="loginFormBtn"
          onClick={ () => this.signIn() }>
          Log In
        </Button>
      </form>
    );
  }
}