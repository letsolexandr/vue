import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "data_table",
      path: "/data_table",
      component: () => import("@/components/DataTable")
    },
    {
      name: "images",
      path: "/images",
      component: () => import("@/components/DataTable1")
    }
  ]
});
