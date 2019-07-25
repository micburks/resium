import Cesium from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const SilhouetteStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createSilhouetteStage();
  },
});
