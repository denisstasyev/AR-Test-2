import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  fixedButton: {
    position: "absolute",
    bottom: theme.spacing(9),
    left: theme.spacing(2)
  },
  text: {
    marginLeft: theme.spacing(1)
  }
}));
