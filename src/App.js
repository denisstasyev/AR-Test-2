import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { ViewGift } from "containers/ViewGift";

import {
  COLOR_BACKGROUND_DEFAULT_LIGHT,
  COLOR_BACKGROUND_PAPER_LIGHT,
  COLOR_BACKGROUND_WARNING_LIGHT,
  COLOR_BACKGROUND_SUCCESS_LIGHT,
  COLOR_PRIMARY_MAIN,
  COLOR_SECONDARY_MAIN
} from "configs/CSSvariables";

const theme = createMuiTheme({
  palette: {
    background: {
      default: COLOR_BACKGROUND_DEFAULT_LIGHT,
      paper: COLOR_BACKGROUND_PAPER_LIGHT,
      warning: COLOR_BACKGROUND_WARNING_LIGHT,
      success: COLOR_BACKGROUND_SUCCESS_LIGHT
    },
    primary: {
      main: COLOR_PRIMARY_MAIN
    },
    secondary: {
      main: COLOR_SECONDARY_MAIN
    }
  }
});

const App = props => {
  let vh =
    ((document &&
      document.documentElement &&
      document.documentElement.clientHeight) ||
      window.innerHeight) * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    vh =
      ((document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
        window.innerHeight) * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ViewGift />
    </MuiThemeProvider>
  );
};

export default App;

