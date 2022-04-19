import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Iniciar_sesion from '../views/Iniciar_sesion.vue'
import Registrate from '../views/Registrate.vue'
import Carrito from "../views/Carrito.vue";
import Login from "../views/Login.vue";
import Manga from "../views/Manga.vue";
import Usuario from "../views/Usuario.vue";
import Error404 from "../views/Error404.vue";



import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/aboutview',
        name: 'AboutView',
        component: AboutView
    },

    {
        path: '/iniciar_sesion',
        name: 'Iniciar_sesion',
        component: Iniciar_sesion
    },
    {
        path: '/registrate',
        name: 'Registrate',
        component: Registrate
    },
    {
        path: "/carrito",
        name: "Carrito",
        component: Carrito
    }, {
        path: "/login",
        name: "Login",
        component: Login,
    }, {
        path: "/manga/:id",
        name: "Manga",
        component: Manga,
    }, {
        path: "/usuario",
        name: "Usuario",
        component: Usuario,
    }, {
        path: "/error404",
        name: "Error404",
        component: Error404,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router