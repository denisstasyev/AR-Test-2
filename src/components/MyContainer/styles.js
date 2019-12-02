import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100% - 56px)",
    // eslint-disable-next-line
    height: "calc(var(--vh, 1vh) * 100 - 56px)"
  },
  container: {
    overflowY: "auto",
    height: "100%"
  }
});
