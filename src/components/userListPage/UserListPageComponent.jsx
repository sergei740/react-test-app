import React from "react";
import UsersTable from "./usersListTable/Table";
import UserListFormComponent from "./userListForm/UserListFormComponent";

export default class UserListPageComponent extends React.Component {
  state = {
    rows: [
      { name: "BMW", email: 40000, password: 280 },
      { name: "Audi", email: 40000, password: 280 },
      { name: "Mercedes", email: 40000, password: 280 },
      { name: "Opel", email: 40000, password: 280 }
    ]
  };

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
