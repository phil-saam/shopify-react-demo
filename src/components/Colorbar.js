import React from "react";

//MUI
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Hidden, Typography } from "@material-ui/core";

import ColorPicker from "./ColorPicker";

const styles = (theme) => ({
  Snackbar: { marginTop: "200px" },
  Content: {
    backgroundColor: "white",
    // maxWidth: "300px",
    color: theme.palette.primary.dark,
  },
  Header: { fontSize: 22, marginBottom: theme.spacing(3) },
  Divider: { margin: theme.spacing(3) },
});

const ColorBar = (props) => {
  const { classes, theme, onChange } = props;

  const handleChangePalette = (name, changes) => {
    let newPalette = {
      ...theme.palette,
      [name]: {
        main: changes,
      },
    };
    onChange(newPalette);
  };

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
            <Grid container spacing={3}>
              <Grid item>
                <Typography>Primary Color:</Typography>
                <Grid item>
                  <ColorPicker
                    name="primary"
                    onChange={handleChangePalette}
                    palette={theme.palette.primary.main}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography>Secondary Color:</Typography>
                <Grid item>
                  <ColorPicker
                    name="secondary"
                    onChange={handleChangePalette}
                    palette={theme.palette.secondary.main}
                  />
                </Grid>
              </Grid>
            </Grid>
          }
        />
      </Snackbar>
    </Hidden>
  );
};

export default withStyles(styles)(ColorBar);
