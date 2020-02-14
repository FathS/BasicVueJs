import Vue from 'vue'
import Router from 'vue-router'
import TodosList from '../components/Personel/List.vue'
import TodosDetail from '../components/Personel/update.vue'
import AccountDetail from '../components/Account/AccountUpdate.vue'
import Register from '../components/Personel/register.vue'
import Login from '../components/Account/login.vue'
import ChangePassword from '../components/Account/changePassword.vue'
import Home from '../components/Home.vue'
import ActiveAccount from '../components/Account/activeAccount.vue'
import City from '../components/City/city.vue'
import Account from '../components/Account/AccountList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/Todoslist',
      name: 'todoslist',
      component: TodosList,
      meta: {
        public: false,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }

    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/ChangePassword',
      name: 'change',
      component: ChangePassword
    },
    {
      path: '/activeAccount',
      component: ActiveAccount
    },
    {
      path: '/Accounts',
      component: Account
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/:id/edit',
      name: 'detail',
      component: TodosDetail
    },
    {
      path: '/:id/edit',
      name: 'detailAccount',
      component: AccountDetail
    },
    // { path: '/', redirect: { name: 'home' } },
    // { path: '*', redirect: { name: 'home' } }

  ]
})