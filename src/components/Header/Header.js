import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LogoIcon from "static/logos/transparent.svg";

import { useStyles } from "./styles";

const Header = props => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root} /*id="back-to-top-anchor"*/>
        <img
          className={classes.logoIcon}
          src={LogoIcon}
          alt="E-Gifts logo"
          width="40px"
        />
      <div>
        <Typography variant="h4">{props.topic}</Typography>
        <Typography variant="body2">
          {props.topic === "E-Gifts"
            ? "Brings gifts to AR & VR!"
            : "E-Gifts - Brings gifts to AR & VR!"}
        </Typography>
      </div>
    </Toolbar>
  );
};

export default Header;
