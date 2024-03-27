const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Inspector",
  component: Layout,
  redirect: "/inspector",
  meta: {
    icon: "material-symbols-light:insert-chart-outline",
    title: "服务器",
    rank: 1
  },
  children: [
    {
      path: "/inspector",
      name: "服务器监控",
      component: () => import("@/views/inspector/index.vue"),
      meta: {
        title: "服务器",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
