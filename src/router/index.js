import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/Views/Home.vue';
import Register from '@/Views/Register.vue';
import Dashboard from "@/Views/Dashboard.vue";
import Add from "@/Views/Add.vue";
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
  },
  {
    name: Add,
    path: "/add",
    component: Add,
  },/*
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
  }*/
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;