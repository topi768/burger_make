import Discover from "@/pages/Discover";
import {createRouter, createWebHistory} from "vue-router";

import MakeBurger from "@/pages/MakeBurger";



const routes = [
    {
        path: '/',
        component: Discover
    },
    {
        path: '/makeBurger',
        component: MakeBurger
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;