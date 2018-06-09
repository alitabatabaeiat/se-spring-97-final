import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../components/GoodsList'
import GoodsView from '../components/GoodsView'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goods/:id',
      name: 'GoodsView',
      component: GoodsView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
