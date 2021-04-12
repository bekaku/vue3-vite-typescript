import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
// import NotFound from "@/pages/error/error404.vue";
import checkAuth from "@/middleware/checkAuth";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    beforeEnter: checkAuth,
    component: () => import("@/layout/AppRouterView.vue"),
    children: [
      {
        path: "",
        redirect: "/index",
      },
      {
        path: "/index",
        name: "Index",
        component: () => import("@/pages/index.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/pages/app/index.vue"),
      },
      {
        path: "/i18n/:locale",
        name: "I18n",
        component: () => import("@/pages/app/I18n.vue"),
      },
      {
        path: "/type-test",
        name: "TypeTest",
        component: () => import("@/pages/app/TypeTest.vue"),
      },
      {
        path: "/auth",
        name: "Auth",
        component: () => import("@/pages/auth/Login.vue"),
      },
      {
        path: "/vuex",
        name: "Vuex",
        component: () => import("@/pages/app/vuex.vue"),
      },
      {
        path: "/userList",
        name: "UserList",
        component: () => import("@/pages/app/UserList.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("@/layout/AuthRouterView.vue"),
    children: [
      {
        path: "",
        redirect: "/auth/login",
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/pages/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/error",
    component: () => import("@/layout/ErrorRouterView.vue"),
    children: [
      {
        path: "",
        redirect: "/error/error404",
      },
      {
        path: "error404",
        name: "Error404",
        component: () => import("@/pages/error/Error404.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    // component: NotFound,
    redirect: "/error/error404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
