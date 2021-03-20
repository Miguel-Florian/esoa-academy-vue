import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/Views/Home.vue';
import Register from '@/Views/Register.vue';


const routes =[
    {
        name:Home,
        path:"/",
        component:Home
    },
    {
        name:Register,
        path:"/register",
        component:Register
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;