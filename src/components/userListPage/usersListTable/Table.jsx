import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class UsersTable extends React.Component {
  render() {
    return (
      <div>
        <Paper>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">E-mail</TableCell>
                <TableCell align="left">Password</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.props.rows.map(row => (
                <TableRow key={ row.name }>
                  <TableCell align="left">{ row.name }</TableCell>
                  <TableCell align="left">{ row.email }</TableCell>
                  <TableCell align="left">{ row.password }</TableCell>
                  <TableCell align="left">
                    <Button variant="contained"
                            color="secondary"
                            onClick={ () => this.props.removeUser(row) }>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
