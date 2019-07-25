import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const NightVisionStage = createPostProcessStage<{}>({
  name: "NightVisionStage",
  props: [],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createNightVisionStage();
  },
});
