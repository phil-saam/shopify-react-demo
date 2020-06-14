import React from "react";
import { Link } from "react-router-dom";
//MUI
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Hidden,
  Button,
  Divider,
  IconButton,
  Avatar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  Snackbar: { marginBottom: "2S0px" },
  Content: {
    backgroundColor: "white",
    maxWidth: "300px",
    color: theme.palette.primary.dark,
  },
  Header: { fontSize: 22, marginBottom: theme.spacing(3) },
  Divider: { margin: theme.spacing(3) },
});

const CoronaVirus = (props) => {
  const { classes } = props;
  return (
    <Hidden xsDown>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key="1"
        open={true}
        onClose={props.handleClose}
        className={classes.Snackbar}
      >
        <SnackbarContent
          className={classes.Content}
          message={
            <Grid container spacing={1}>
              <Grid item>
                Current Colors:
                <Grid item>
                  <Avatar style={{ backgroundColor: props.primary }}>P</Avatar>
                </Grid>
                <Grid item>
                  <Avatar style={{ backgroundColor: props.secondary }}>
                    S
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          }
        />
      </Snackbar>
    </Hidden>
  );
};

export default withStyles(styles)(CoronaVirus);
