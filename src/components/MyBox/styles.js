import { makeStyles } from "@material-ui/core/styles";

import { BORDER_RADIUS } from "configs/CSSvariables";

export const useStyles = makeStyles(theme => ({
  defaultBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: BORDER_RADIUS
  },
  warningBox: {
    backgroundColor: theme.palette.background.warning,
    borderRadius: BORDER_RADIUS
  },
  successBox: {
    backgroundColor: theme.palette.background.success,
    borderRadius: BORDER_RADIUS
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}));
