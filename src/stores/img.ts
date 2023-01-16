import { defineStore } from "pinia";

export const useImgStore = defineStore("img", {
  state: () => {
    return {
      case: "" as string,
      knob: "" as string,
      weight: "" as string,
      backplate: "" as string,
    };
  },
  getters: {},
  actions: {},
});
