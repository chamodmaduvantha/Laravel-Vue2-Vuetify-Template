/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import Vuetify from "../plugins/vuetify"
import Router from "../plugins/router"
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from '../js/components/App.vue'
import Vue from 'vue';

import Carousel from '../js/components/carousel.vue';
import About from '../js/pages/about.vue';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Carousel},
    {path: '/about', component: About}
];

const router = new VueRouter({
    
    routes,
    mode: 'history',
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    vuetify: Vuetify,
    router: Router,
    render: h => h(App),
    el: '#app',
});
