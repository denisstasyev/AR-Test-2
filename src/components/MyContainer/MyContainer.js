import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { useStyles } from "./styles";

const MyContainer = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        <Container maxWidth={props.type === "small" ? "xs" : "lg"}>
          {props.children}
        </Container>
      </div>
    </div>
  );
};

export default MyContainer;
