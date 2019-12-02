import { makeStyles } from "@material-ui/core/styles";

import { BORDER_RADIUS } from "configs/CSSvariables";

export const useStyles = makeStyles(theme => ({
  markerSearchContainer: {
    position: "absolute",
    bottom: theme.spacing(16),
    left: 0,
    right: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  markerSearchContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "red",
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: BORDER_RADIUS,
    maxWidth: 300,
    padding: 10
  },
  markerSearchImage: {
    padding: theme.spacing(1),
    height: 100,
    width: 100
  }
}));
