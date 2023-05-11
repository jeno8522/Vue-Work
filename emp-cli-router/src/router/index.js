import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain";
import AppEmp from "@/views/AppEmp";
import AppUser from "@/views/AppUser";
import EmpListView from "@/components/emp/EmpListView";
import EmpCreateView from "@/components/emp/EmpCreateView";
import EmpDetailView from "@/components/emp/EmpDetailView";
import EmpUpdateView from "@/components/emp/EmpUpdateView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: AppMain,
  },
  {
    path: "/emp",
    name: "AppEmp",
    component: AppEmp,
    redirect: "/emp/emplist",
    children: [
      {
        path: "emplist",
        name: "EmpListView",
        component: EmpListView,
      },
      {
        path: "empregist",
        name: "EmpCreateView",
        component: EmpCreateView,
      },
      {
        path: "empdetail", // 쿼리로 empno을 전달하기 때문에 path에 따로 설정 안해줘도 됨
        name: "EmpDetailView",
        component: EmpDetailView,
      },
      {
        path: "empupdate/:empno", // params로 empno을 전달하기 때문에 path에 empno을 설정해줘야함
        name: "EmpUpdateView",
        component: EmpUpdateView,
      },
    ],
  },
  {
    path: "/user",
    name: "AppUser",
    component: AppUser,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
