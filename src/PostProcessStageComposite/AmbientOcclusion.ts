import { createPostProcessStage } from "../core/PostProcessStage";

export const AmbientOcclusion = createPostProcessStage<{
  intensity?: number;
  bias?: number;
  lengthCap?: number;
  stepSize?: number;
  frustumLength?: number;
  ambientOcclusionOnly?: boolean;
  delta?: number;
  sigma?: number;
}>({
  name: "AmbientOcclusion",
  create(props, collection) {
    return collection.ambientOcclusion;
  },
  props: [
    "ambientOcclusionOnly",
    "bias",
    "delta",
    "frustumLength",
    "intensity",
    "lengthCap",
    "sigma",
    "stepSize",
  ],
  noMount: true,
});
