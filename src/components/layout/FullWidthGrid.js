import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import SimpleContainer from "./SimpleContainer";
import SimpleZoom from "../dashboard/SimpleZoom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Hidden smDown>
          <Grid item xs={1} sm={1}></Grid>
        </Hidden>
        <Grid item xs={12} sm={7}></Grid>
        <Hidden xsDown>
          <Grid item xs={0} sm={3}>
            <SimpleContainer />
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item xs={0} sm={1}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
