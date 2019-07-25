import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const BlurStage = createPostProcessStage<{
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "BlurStage",
  props: ["delta", "sigma", "stepSize"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlurStage();
  },
});
