import { createPostProcessStage } from "../core/PostProcessStage";

export const Fxaa = createPostProcessStage<{}>({
  name: "Fxaa",
  create(props, collection) {
    return collection.fxaa;
  },
  props: [],
});
