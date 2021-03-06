import Vue from 'vue'
import Router from 'vue-router'
import TodosList from '../components/Personel/List.vue'
import deleteper from '../components/Personel/delete.vue'
import TodosDetail from '../components/Personel/update.vue'
import AccountDetail from '../components/Account/AccountUpdate.vue'
import Register from '../components/Personel/register.vue'
import Login from '../components/Account/login.vue'
import ChangePassword from '../components/Account/changePassword.vue'
import Home from '../components/Home.vue'
import ActiveAccount from '../components/Account/activeAccount.vue'
import City from '../components/City/city.vue'
import Account from '../components/Account/AccountList.vue'
import HavaDurum from '../components/View/HavaDurum.vue'
import Inventory from '../components/Inventory/inventory.vue'
import InventoryAdd from '../components/Inventory/inventoryAdd.vue'
import InventoryUser from '../components/Inventory/inventoryAccount.vue'
import children from '../components/children.vue'
import DovizAl from '../components/View/KurAl.vue'
import about from '../components/About.vue'
import CategoryCreate from '../components/EticaretView/Category.vue'
import ProductCreate from '../components/EticaretView/Product.vue'
import Products from '../components/EticaretView/ProductList.vue'
import img from '../components/EticaretView/imagecreate.vue'


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
      children: [
        {
          path: '/childrentest',
          name: 'chidrenTest',
          component: children
        }
      ]
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
      name:'deleteper',
      path: '/delete/:id',
      component: deleteper
    },
    {
      path: '/aboutUS',
      component: about
    },
    {
      path: '/images',
      component: img
    },
    {
      path: '/Category-Create',
      component: CategoryCreate
    },
    {
      path: '/Product-Create',
      component: ProductCreate
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
      path: '/Inventory',
      component: Inventory
    },
    {
      path: '/InventoryAdd',
      component: InventoryAdd
    },
    {
      path: '/HavaDurum',
      component: HavaDurum,
    },
    {
      path: '/Doviz-Satin-Al-Sat-Euro-Dolar',
      component: DovizAl,
      name: 'doviz'
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
    {
      path: '/:id/:name/detail-inventory/ucak-kazasi-haberleri-sarhos-pilot',
      name: 'UserInventory',
      component: InventoryUser,
    },
    {
      path: '/Liste/:id',
      name: 'productlist',
      component: Products,
    },

    // { path: '/', redirect: { name: 'home' } },
    // { path: '*', redirect: { name: 'home' } }

  ]
})