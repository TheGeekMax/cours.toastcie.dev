import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to && to.hash) {
      return {
        el: to.hash,
        top: 81, // Add here the padding or margin top that you want
        behavior: "smooth",
      };
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
};