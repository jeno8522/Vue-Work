import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import AppBook from "@/views/AppBook";
import AppUser from "@/views/AppUser";
import BookListView from "@/components/book/BookListView";
import BookCreateView from "@/components/book/BookCreateView";
import BookDetailView from "@/components/book/BookDetailView";
import BookUpdateView from "@/components/book/BookUpdateView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: AppMain,
  },
  {
    path: "/book",
    name: "AppBook",
    component: AppBook,
    redirect: "/book/booklist",
    children: [
      {
        path: "booklist",
        name: "BookListView",
        component: BookListView,
      },
      {
        path: "bookregist",
        name: "BookCreateView",
        component: BookCreateView,
      },
      {
        path: "bookdetail", // 쿼리로 isbn을 전달하기 때문에 path에 따로 설정 안해줘도 됨
        name: "BookDetailView",
        component: BookDetailView,
      },
      {
        path: "bookupdate/:isbn", // params로 isbn을 전달하기 때문에 path에 isbn을 설정해줘야함
        name: "BookUpdateView",
        component: BookUpdateView,
      },
    ],
  },
  {
    path: "/user",
    name: "AppUser",
    component: AppUser,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
