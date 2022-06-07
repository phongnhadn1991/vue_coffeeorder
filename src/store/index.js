import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import dataProducts from './dataProducts'
import dataCategories from './dataCategories'

function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart));
}

const storeData = {
  state: {
    products: dataProducts,
    categories: dataCategories,
    inCategories: [],
    inCarts: [],
    inCheckouts: []
  },
  getters: {
    products: state => state.products,
    categories: state => state.categories,
    inCategories: state => state.inCategories,
    inCarts: state => state.inCarts,
    subToTalCart: state => {
      let total = 0
      state.inCarts.forEach(product => {total += (product.qty) * (product.price) })
      return total
    },
    inCheckouts: state => state.inCheckouts
  },
  mutations: {
    GET_PRODUCT_CATEGORY(state,category){
      state.inCategories = state.products.filter(item => item.categoryId === category.id)
    },
    ADD_TO_CART(state,product){
      const itemCart = state.inCarts.find(item => item.id === product.id)
      if(itemCart){
        itemCart.qty++
      }else{
        state.inCarts.push({...product, qty:1})
      }
      updateLocalStorage(state.inCarts)
    },
    REMOVE_TO_CART(state,product){
      state.inCarts = state.inCarts.filter(item => item.id !== product.id)
      updateLocalStorage(state.inCarts)
    },
    PLUS_QTY(state,product){
      const item = state.inCarts.find(item => item.id == product.id)
      item.qty++
      updateLocalStorage(state.inCarts)
    },
    MINUS_QTY(state,product){
      const item = state.inCarts.find(item => item.id == product.id)
      if(item.qty > 1){
        item.qty--
      }else{
        state.inCarts = state.inCarts.filter(item => item.id !== product.id)
      }
      updateLocalStorage(state.inCarts)
    },
    UPDATE_CART_FROM_LOCAL_STORAGE(state){
      const cart = localStorage.getItem('cart')
      if(cart){
        state.inCarts = JSON.parse(cart)
      }
    },
    RESET_CART(state){
      state.inCarts = []
      updateLocalStorage(state.inCarts)
    }
  },
  actions: {
    getProductCategory({commit},category){
      commit('GET_PRODUCT_CATEGORY',category)
    },
    addToCart({commit}, product){
      commit('ADD_TO_CART', product)
    },
    removeToCart({commit}, product){
      commit('REMOVE_TO_CART', product)
    },
    plusQty({commit}, product){
      commit('PLUS_QTY', product)
    },
    minusQty({commit}, product){
      commit('MINUS_QTY', product)
    },
  },
  modules: {
  }
}
const store = new Vuex.Store(storeData)
export default store
