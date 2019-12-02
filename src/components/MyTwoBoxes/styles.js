import { makeStyles } from "@material-ui/core/styles";

import { MOBILE_WIDTH, BORDER_RADIUS } from "configs/CSSvariables";

export const useStyles = makeStyles(theme => ({
  boxes: {
    display: "flex",
    flexWrap: "wrap"
  },
  leftBox: {
    width: "50%",
    paddingRight: theme.spacing(1),
    // eslint-disable-next-line
    [`@media (max-width: ${MOBILE_WIDTH}px)`]: {
      paddingRight: 0,
      width: "100%"
    }
  },
  leftBoxBig: {
    width: "70%",
    paddingRight: theme.spacing(1),
    // eslint-disable-next-line
    [`@media (max-width: ${MOBILE_WIDTH}px)`]: {
      paddingRight: 0,
      width: "100%"
    }
  },
  rightBox: {
    width: "50%",
    paddingLeft: theme.spacing(1),
    // eslint-disable-next-line
    [`@media (max-width: ${MOBILE_WIDTH}px)`]: { paddingLeft: 0, width: "100%" }
  },
  rightBoxBig: {
    width: "30%",
    paddingLeft: theme.spacing(1),
    // eslint-disable-next-line
    [`@media (max-width: ${MOBILE_WIDTH}px)`]: { paddingLeft: 0, width: "100%" }
  },
  defaultBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: BORDER_RADIUS,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  warningBox: {
    backgroundColor: theme.palette.background.warning,
    borderRadius: BORDER_RADIUS,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: theme.spacing(1)
  }
}));
