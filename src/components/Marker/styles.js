import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // eslint-disable-next-line
    height: "calc(var(--vh, 1vh) * 100)"
  },
  markerImage: {
    maxWidth: "80%",
    maxHeight: "80%"
  },
  text: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    padding: "0 10px"
  }
}));
