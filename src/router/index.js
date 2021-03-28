import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/Views/Home.vue';
import Register from '@/Views/Register.vue';
import Dashboard from "@/Views/Dashboard.vue";
import Overview from "@/Views/Overview.vue";
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
        path: "/overview",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Overview"),
      },
      {
        path: "/accueil",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Accueil"),
      },
      {
        path: "/messages",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Messages"),
      },
      {
        path: "/profil",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Profil"),
      },
      {
        path: "/connexion",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Connexion"),
      }
    ],
  },
  {
    name: Overview,
    path: "/overview",
    component: Overview,
  } /*
  {
    name: Modify,
    path: "/modify",
    component: Modify,
  },
  {
    name: Show,
    path: "/show",
    component: Show,
  },
  {
    name: Delete,
    path: "/delete",
    component: Delete,
  },
  {
    name: Rencontres,
    path: "/rencontres",
    component: Rencontres,
  },
  {
    name: Finances,
    path: "/finances",
    component: Finances,
  },
  {
    name: Email,
    path: "/emailTo",
    component: Email,
  }*/,
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;