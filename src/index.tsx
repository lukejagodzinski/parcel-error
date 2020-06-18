import * as React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function App() {
  return (
    <Table padding="none" style={{ width: 200 }}>
      <TableBody>
        <TableRow>
          <TableCell>Lorem ipsum</TableCell>
          <TableCell>Lorem ipsum</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lorem ipsum</TableCell>
          <TableCell>Lorem ipsum</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
