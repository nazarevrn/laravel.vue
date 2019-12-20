
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/vacations/VacationsIndex.vue';
import CompaniesCreate from './components/vacations/VacationsCreate.vue';
import CompaniesEdit from './components/vacations/VacationsEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            vacationsIndex: VacationsIndex
        }
    },
    {path: '/admin/vacations/create', component: VacationsCreate, name: 'createVacation'},
    {path: '/admin/vacations/edit/:id', component: VacationsEdit, name: 'editVacation'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')