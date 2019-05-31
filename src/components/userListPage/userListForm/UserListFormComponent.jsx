import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DataService } from "../../../services/dataService";
import { withRouter } from "react-router-dom";

class UserListFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  logOut = () => {
    DataService.logOut();
    this.props.history.push('/');
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  clearInput = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form className="form">
        <TextField
          label="Name"
          id="name"
          value={ this.state.name }
          onInput={ e => this.handleChange(e) }/>
        <TextField
          label="E-mail"
          id="email"
          value={ this.state.email }
          onInput={ e => this.handleChange(e) }/>
        <TextField
          label="Password"
          id="password"
          value={ this.state.password }
          onInput={ e => this.handleChange(e) }/>
        <Button
          variant="contained"
          color="primary"
          onClick={ () => {
            this.props.addState(this.state);
            this.clearInput();
          } }>
          Add
        </Button>
        <Button variant="contained"
                onClick={ this.logOut }>
          Log Out
        </Button>
      </form>
    );
  }
}

export default withRouter(UserListFormComponent);
