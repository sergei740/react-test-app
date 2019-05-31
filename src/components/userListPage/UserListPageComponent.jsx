import React from "react";
import UsersTable from "./usersListTable/Table";
import UserListFormComponent from "./userListForm/UserListFormComponent";
import { DataService } from "../../services/dataService";

export default class UserListPageComponent extends React.Component {
  state = {
    rows: []
  };

  componentDidMount() {
    DataService.getListUser();
  }


  addUser = formData => {
    this.setState({ rows: [...this.state.rows, formData] });
  };

  removeUser = deletedRow => {
    const newState = this.state.rows.filter(row => row.name !== deletedRow.name);
    this.setState({ rows: newState });
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
