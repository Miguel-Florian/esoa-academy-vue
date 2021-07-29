import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/Views/Home.vue';
import Register from '@/Views/Register.vue';
import Dashboard from "@/Views/Dashboard.vue";
/*import Modify from "@/Views/Modify.vue";
import Show from "@/Views/Show.vue";
import Delete from "@/Views/Delete.vue";
import Rencontres from "@/Views/Rencontres.vue";
import Finances from "@/Views/Finances.vue";
import Email from "@/Views/Email.vue";*/


const routes = [
  {
    name: Home,
    path: "/",
    component: Home,
  },
  {
    name: Register,
    path: "/register",
    component: Register,
  },
  {
    name: Dashboard,
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/dash",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Dash"),
      },{
        path: "/dashboard/Recrue",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Recrue"),
      },
      {
        path: "/dashboard/Competition",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Competition"),
      },
      {
        path: "/dashboard/profil",  /**:academiciens */
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Profil"),/**,props:{academiciens:} */
      },
      {
        path: "/dashboard/Setting",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Setting"),
      },
      {
        path: "/dashboard/finance",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Finance"),
      },
      {
        path: "/dashboard/rencontres",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Rencontres"),
      },
      {
        path: "/dashboard/mail",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Mail"),
      },
    ],
  }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;