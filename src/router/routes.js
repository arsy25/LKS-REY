const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ADMIN/AdminPage.vue") },
      {
        path: "/pesanan",
        component: () => import("pages/ADMIN/AdminPesanan.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", component: () => import("pages/USER/UserPage.vue") },
      {
        path: "/pesanan",
        component: () => import("pages/USER/UserPesanan.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
