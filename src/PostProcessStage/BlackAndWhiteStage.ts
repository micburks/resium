import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const BlackAndWhiteStage = createPostProcessStage<{
  gradations?: number;
}>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlackAndWhiteStage();
  },
});
