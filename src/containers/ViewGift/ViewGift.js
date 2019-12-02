import React from "react";

import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import CameraIcon from "@material-ui/icons/CameraAlt";
import CropFreeIcon from "@material-ui/icons/CropFree";
import CloseIcon from "@material-ui/icons/Close";

import DetectRTC from "detectrtc"; // Not completely successful attempt to check AR.js support

import { MyContainer } from "components/MyContainer";
import { Header } from "components/Header";
import { MyBox } from "components/MyBox";
import { MyTwoBoxes } from "components/MyTwoBoxes";
import { ViewerVR } from "components/ViewerVR";
import { ViewerAR } from "components/ViewerAR";
import { Marker } from "components/Marker";
import { ButtonMobile } from "components/ButtonMobile";
import { ButtonFixed } from "components/ButtonFixed";

import * as config from "configs/backendAPI";

import { checkIsMobile } from "utils";

import { useStyles } from "./styles";

const getSteps = () => {
  return [
    "To get full experience you need to view this E-Gift in AR",
    "To view E-Gift, open the Marker on another device (the button in the lower left corner of the View page) or print it"
  ];
};

const ViewGift = props => {
  const classes = useStyles();
  const steps = getSteps();

  const isValidGift = true;
  const modelURL = "models/house/scene.gltf";
  const scaleX = 0.3;
  const scaleY = 0.3;
  const scaleZ = 0.3;
  const light = 7;

  const [mode, setMode] = React.useState("welcome");

  const isMobile = checkIsMobile();

  if (!isValidGift) {
    return <h1>Gift not found</h1>;
  } else {
    return mode === "welcome" ? (
      <MyContainer>
        <Header topic="E-Gift for you" />
        <Box id="content" pb={2}>
          <MyBox title="Click to open your E-Gift" type="success">
            <Fab
              className={classes.fab}
              variant="extended"
              size="small"
              color="primary"
              onClick={() => setMode("main")}
            >
              <LockOpenIcon className={classes.icon} />
              Open E-Gift
            </Fab>
          </MyBox>
        </Box>
      </MyContainer>
    ) : mode === "main" ? (
      <>
        <MyContainer>
          <Header topic="E-Gift for you" />
          <Box id="content" pb={2}>
            <MyTwoBoxes
              type="big"
              leftBoxTitle="Your E-Gift in VR"
              leftBox={
                <>
                  <div id="vr" className={classes.vr}>
                    <ViewerVR
                      modelURL={`${config.BACKEND_SERVER}/${modelURL}`}
                      scaleX={scaleX}
                      scaleY={scaleY}
                      scaleZ={scaleZ}
                      light={light}
                    />
                  </div>
                  <Typography>
                    Drag to rotate, pinch or scroll to zoom
                  </Typography>
                </>
              }
              rightBoxType={
                DetectRTC.isWebRTCSupported === true ? "" : "warning"
              }
              rightBoxTitle={
                DetectRTC.isWebRTCSupported === true
                  ? "How to view in AR?"
                  : "Warning"
              }
              rightBox={
                DetectRTC.isWebRTCSupported === true ? (
                  <>
                    <Stepper orientation="vertical">
                      {steps.map((label, index) => (
                        <Step className={classes.step} key={index}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    <Fab
                      className={classes.fab}
                      variant="extended"
                      size="small"
                      color="primary"
                      onClick={() => {
                        setMode("AR");
                      }}
                    >
                      <CameraIcon className={classes.icon} />
                      View in AR
                    </Fab>
                  </>
                ) : (
                  <Typography className={classes.text}>
                    Unfortunately, your browser or device does not support
                    E-Gifts's AR technology, try changing them to get full
                    experience with AR
                  </Typography>
                )
              }
            />
            {isMobile ? (
              <ButtonMobile
                type="onClick"
                text="Marker"
                onClick={() => {
                  setMode("marker");
                }}
              >
                <CropFreeIcon />
              </ButtonMobile>
            ) : null}
          </Box>
        </MyContainer>
        {isMobile ? null : (
          <ButtonFixed
            type="onClick"
            text="Marker"
            onClick={() => {
              setMode("marker");
            }}
          >
            <CropFreeIcon />
          </ButtonFixed>
        )}
      </>
    ) : mode === "marker" ? (
      <>
        <Marker />
        <ButtonFixed
          type="onClick"
          text="Close"
          onClick={() => {
            setMode("main");
          }}
        >
          <CloseIcon />
        </ButtonFixed>
      </>
    ) : mode === "AR" ? (
      <>
        <ViewerAR
          modelURL={`${config.BACKEND_SERVER}/${modelURL}`}
          scaleX={scaleX}
          scaleY={scaleY}
          scaleZ={scaleZ}
          light={light}
        />
        <ButtonFixed
          type="onClick"
          text="Close"
          onClick={() => window.location.reload()}
        >
          <CloseIcon />
        </ButtonFixed>
      </>
    ) : null;
  }
};

export default ViewGift;
