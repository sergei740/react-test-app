import React from "react";
import UsersTable from "./usersListTable/Table";
import UserListFormComponent from "./userListForm/UserListFormComponent";
import { DataService } from "../../services/dataService";


export default class UserListPageComponent extends React.Component {
  state = {
    rows: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    DataService.getListUser()
      .then((data) => this.setState({ rows: data }));
  }

  addUser = ({ password, email, name }) => {
    DataService.addUser(password, email, name)
      .then(this.loadData);
  };


  removeUser = ({ _id }) => {
    DataService.deleteUser(_id)
      .then(this.loadData);
  };

  render() {
    return (
      <>
        <UserListFormComponent addState={ this.addUser }/>
        <UsersTable rows={ this.state.rows } removeUser={ this.removeUser }/>
      </>
    );
  }
}

