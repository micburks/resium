import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const BrightnessStage = createPostProcessStage<{
  brightness?: number;
}>({
  name: "BrightnessStage",
  props: ["brightness"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBrightnessStage();
  },
});
