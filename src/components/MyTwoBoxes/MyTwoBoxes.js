import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const MyTwoBoxes = props => {
  const classes = useStyles();

  return (
    <div className={classes.boxes}>
      <div
        className={props.type === "big" ? classes.leftBoxBig : classes.leftBox}
      >
        <Box
          className={
            props.leftBoxType === "warning"
              ? classes.warningBox
              : classes.defaultBox
          }
          p={2}
          mt={2}
        >
          {props.leftBoxTitle !== undefined ? (
            <Typography className={classes.title} variant="h5">
              {props.leftBoxTitle}
            </Typography>
          ) : null}
          {props.leftBox}
        </Box>
      </div>
      <div
        className={
          props.type === "big" ? classes.rightBoxBig : classes.rightBox
        }
      >
        <Box
          className={
            props.rightBoxType === "warning"
              ? classes.warningBox
              : classes.defaultBox
          }
          p={2}
          mt={2}
        >
          {props.rightBoxTitle !== undefined ? (
            <Typography className={classes.title} variant="h5">
              {props.rightBoxTitle}
            </Typography>
          ) : null}
          {props.rightBox}
        </Box>
      </div>
    </div>
  );
};

export default MyTwoBoxes;
