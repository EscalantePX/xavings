require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import DashboardComponent from './components/Dashboard.vue';
import ProfileComponent from './components/Profile.vue';
import UsersComponent from './components/Users.vue';


const routes = [
    { path: '/dashboard', name:'dashboard', component: DashboardComponent },
    { path: '/profile',   name:'profile',   component: ProfileComponent },
    { path: '/users',     name:'users',     component: UsersComponent }, ]

const router = new VueRouter({ mode: 'history', routes: routes});

const app = new Vue({
    el: '#app',
    router
});
