const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Blog",
  component: Layout,
  redirect: "/blog",
  meta: {
    icon: "material-symbols-light:bookmark",
    title: "博客",
    rank: 0
  },
  children: [
    {
      path: "/blog",
      name: "BlogPage",
      component: () => import("@/views/blog/index.vue"),
      meta: {
        title: "博客",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
