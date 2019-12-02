/* globals THREEx */
import cameraData from "static/assets/camera_para.dat";
import marker from "static/assets/patt.hiro";

const { ArMarkerControls, ArToolkitContext, ArToolkitSource } = THREEx;

export const initializeArToolkit = (renderer, camera, onRenderFcts) => {
  ArToolkitContext.baseURL = "../";

  const arToolkitSource = new ArToolkitSource({ sourceType: "webcam" });

  const onResize = () => {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  };

  arToolkitSource.init(() => {
    onResize();
  });

  window.addEventListener("resize", () => {
    onResize();
  });

  // create atToolkitContext
  const arToolkitContext = new ArToolkitContext({
    cameraParametersUrl: cameraData,
    detectionMode: "mono"
    // canvasWidth: 800,
    // canvasHeight: 600
  });

  arToolkitContext.init(() => {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  // update artoolkit on every frame
  onRenderFcts.push(() => {
    if (arToolkitSource.ready === false) return;
    arToolkitContext.update(arToolkitSource.domElement);
  });
  return arToolkitContext;
};

export const getMarker = (arToolkitContext, markerRoot) => {
  return new ArMarkerControls(arToolkitContext, markerRoot, {
    type: "pattern",
    patternUrl: marker
  });
};
