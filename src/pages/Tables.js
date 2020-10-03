import React/*, { Component }*/ from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
//import Toolbar from "@material-ui/core/Toolbar";
//import Tooltip from "@material-ui/core/Tooltip";
//import Checkbox from "@material-ui/core/Checkbox";
//import DeleteIcon from "@material-ui/icons/Delete";
//import IconButton from "@material-ui/core/IconButton";
//import Typography from "@material-ui/core/Typography";
//import FilterListIcon from "@material-ui/icons/FilterList";
//import TableSortLabel from "@material-ui/core/TableSortLabel";
//import TablePagination from "@material-ui/core/TablePagination";
//import { lighten } from "@material-ui/core/styles/colorManipulator";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: { minWidth: 500 }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Десерт (порция 100 г)</TableCell>
            <TableCell numeric>Калории</TableCell>
            <TableCell numeric>Жир (g)</TableCell>
            <TableCell numeric>Углеводы (g)</TableCell>
            <TableCell numeric>Протеин (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SimpleTable);
