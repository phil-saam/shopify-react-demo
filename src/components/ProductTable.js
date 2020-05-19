import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 3,
    overflowX: "hidden",
  },
  table: {
    minWidth: 300,
    fontSize: "4vw",
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});

export default function ProductTable(props) {
  const classes = useStyles();
  const { data, deleteItem } = props;
  console.log(data, "data");

  return (
    <div className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Product</TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Price
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Quantity
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Total
            </TableCell>
            <TableCell align="right" className={classes.tableCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item) => (
              <React.Fragment>
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.variant.title}</Typography>
                    <img
                      src={item.variant.image.src}
                      alt={item.title}
                      height="50"
                      width="50"
                    />
                  </TableCell>
                  <TableCell align="right">${item.variant.price}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    ${item.quantity * item.variant.price}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => deleteItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

// <Grid key={item.id}>
//   <Grid>
//     <Box
//     //   bgImg={item.variant.image.src}
//     //   bgSize="cover"
//     //   bgPos="center center"
//     //   h="5rem"
//     //   w="4rem"
//     ></Box>
//   </Grid>
//   <Grid>
//     <Typography>{item.title}</Typography>
//     <Typography>{item.variant.title}</Typography>
//     <Typography>{item.quantity}</Typography>
//   </Grid>
//   <Grid>{item.variant.price}</Grid>
// </Grid>
