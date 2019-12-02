import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  vr: {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    maxHeight: "500px"
  },
  title: {
    alignSelf: "flex-start",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  step: {
    marginBottom: theme.spacing(1)
  },
  text: {
    alignSelf: "flex-start"
  },
  fab: {
    alignSelf: "flex-end",
    marginTop: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
