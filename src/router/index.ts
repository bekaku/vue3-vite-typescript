import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import NotFound from "/@/pages/error404.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("/@/pages/index.vue"),
  },
  {
    path: "/i18n/:locale",
    name: "I18n",
    component: () => import("/@/pages/i18n.vue"),
  },
  {
    path: "/type-test",
    name: "TypeTest",
    component: () => import("/@/pages/type-test.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
