import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const LensFlareStage = createPostProcessStage<{
  dirtTexture?: any;
  starTexture?: any;
  intensity?: number;
  distortion?: number;
  ghostDispersal?: number;
  haloWidth?: number;
  earthRadius?: number;
}>({
  name: "LensFlareStage",
  props: [
    "dirtTexture",
    "starTexture",
    "intensity",
    "distortion",
    "ghostDispersal",
    "haloWidth",
    "earthRadius",
  ],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createLensFlareStage();
  },
});
