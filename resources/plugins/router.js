import Vue from 'vue';
import VueRouter from "vue-router";

//const Authentication = () => import(/* webpackChunkName: "Authentication" */ '../Auth/Authentication');

const Carousel = () => import(/* webpackChunkName: "Home" */ '../js/components/carousel');
const About = () => import(/* webpackChunkName: "Home" */ '../js/pages/about');

Vue.use(VueRouter);

const routes = [
    { name:'Carousel',path: '/', component: Carousel },
    { name:'About',path: '/about', component: About },
];

const Router = new VueRouter({
    routes,
    mode: 'history',
});

export default Router;
