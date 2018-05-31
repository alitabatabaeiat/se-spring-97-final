// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, newProduct) {
      let product = state.cart.find(product => {
        return product.id === newProduct.id
      })
      // con
      if (product)
        product.quantity++
      else
        state.cart.push({
          id: newProduct.id,
          name: newProduct.detail.name,
          price: newProduct.detail.price,
          description: newProduct.description,
          image: newProduct.description,
          supplier: newProduct.detail.supplier,
          quantity: 1
        })
    },
    changeQuantity (state, product) {
      let p = state.cart.find(p => {
        return p.id === product.id
      })

      p.quantity = product.quantity
    },
    removeFromCart (state, product) {
      state.cart.remove(product)
    }
  }
})

Vue.use(Vuetify)

const faNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
Vue.filter('FaToEngNum', (value) => {
  value = value.toString();
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < faNums.length; j++) {
      if (value[i] === faNums[j]) {
        value = value.replaceAt(i, j + '');
        break;
      }
    }
  }
  return value;
})

Vue.filter('EngToFaNum', (value) => {
  value = value.toString();
  for (let i = 0; i < value.length; i++) {
    if (value[i] === '0' ||
      value[i] === '1' ||
      value[i] === '2' ||
      value[i] === '3' ||
      value[i] === '4' ||
      value[i] === '5' ||
      value[i] === '6' ||
      value[i] === '7' ||
      value[i] === '8' ||
      value[i] === '9') {
      value = value.replaceAt(i, faNums[value[i]]);
    }
  }
  return value;
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};