import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DataService } from "../../../services/dataService";
import { withRouter } from "react-router-dom";
import { FormErrors } from './FormErrors';

class UserListFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      formErrors: { name: '', email: '', password: '' },
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  logOut = () => {
    DataService.logOut();
    this.props.history.push('/');
  };

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value },
      () => {
        this.validateField(id, value)
      });
    this.setState({ [e.target.id]: e.target.value });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.trim().match(/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'email':
        emailValid = value.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  };

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid });
  };

  clearInput = () => {
    this.setState({ name: '', email: '', password: '', formValid: true });
  };

  render() {
    return (
      <form className="form">
        <div className="form-inputs-buttons">
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
            type="submit"
            variant="contained"
            color="primary"
            onClick={ () => {
              this.props.addState(this.state);
              this.clearInput();
            } }
            disabled={ !this.state.formValid }>
            Add
          </Button>
          <Button variant="contained"
                  onClick={ this.logOut }>
            Log Out
          </Button>
        </div>
        <FormErrors formErrors={ this.state.formErrors }/>
      </form>
    );
  }
}

export default withRouter(UserListFormComponent);
