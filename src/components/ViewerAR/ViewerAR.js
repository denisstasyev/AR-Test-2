/* globals THREE */
import React from "react";

import Typography from "@material-ui/core/Typography";

// import TweenMax from "gsap/TweenMax";

import initializeRenderer from "utils/initializeRenderer";
import { initializeArToolkit, getMarker } from "utils/arToolkit";

import MarkerImage from "static/marker.png";

import { useStyles } from "./styles";

const { Camera, Group, Scene, AmbientLight, GLTFLoader } = THREE;

const ViewerAR = props => {
  const classes = useStyles();

  const [markerFound, setMarkerFound] = React.useState(false);

  let canvas = null;

  React.useEffect(() => {
    const renderer = initializeRenderer(canvas);

    const scene = new Scene();
    const camera = new Camera();
    scene.add(camera);

    const markerRoot = new Group();
    scene.add(markerRoot);

    const onRenderFcts = [];
    const arToolkitContext = initializeArToolkit(
      renderer,
      camera,
      onRenderFcts
    );

    const marker = getMarker(arToolkitContext, markerRoot);
    marker.addEventListener("markerFound", () => {
      setMarkerFound(true);
    });

    var light = new AmbientLight(0x404040, props.light); // white light
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      props.modelURL,
      gltf => {
        // called when the resource is loaded
        gltf.scene.scale.set(props.scaleX, props.scaleY, props.scaleZ);
        // TweenMax.from(gltf.scene.position, 3, {
        //   z: -8,
        //   yoyo: true,
        //   repeat: -1,
        //   ease: "Power2.easeInOut"
        // });

        markerRoot.add(gltf.scene);
      },
      xhr => {
        // called while loading is progressing
        console.log(`${(xhr.loaded / xhr.total) * 100}% of the model loaded`);
      },
      error => {
        // called when loading has errors
        console.error("An error happened", error);
      }
    );

    // render the scene
    onRenderFcts.push(() => {
      renderer.render(scene, camera);
    });

    // run the rendering loop
    let lastTimeMsec = null;

    const animate = nowMsec => {
      // keep looping
      requestAnimationFrame(animate);
      // measure time
      lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
      const deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
      lastTimeMsec = nowMsec;
      // call each update function
      onRenderFcts.forEach(onRenderFct => {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
      });
    };
    requestAnimationFrame(animate);

    // eslint-disable-next-line
  }, []);

  const storeRef = node => {
    canvas = node;
  };

  return (
    <div>
      <canvas ref={storeRef} />
      {!markerFound && (
        <div className={classes.markerSearchContainer}>
          <div className={classes.markerSearchContent}>
            <Typography variant="h6">Show Marker</Typography>
            <img
              className={classes.markerSearchImage}
              alt="Marker Example"
              src={MarkerImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewerAR;
