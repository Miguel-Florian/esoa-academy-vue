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
        path: "/dashboard/ajout",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Ajout"),
      },
      {
        path: "/dashboard/modifier",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Modifier"),
      },
      {
        path: "/dashboard/supprimer",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Supprimer"),
      },
      {
        path: "/dashboard/profil",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Profil"),
      },
      {
        path: "/dashboard/connexion",
        component: () =>
          import(/*webpackChunckName:"overview"*/ "../Views/Connexion"),
      },
      {
        path: "/dashboard/finances",
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
  /*
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