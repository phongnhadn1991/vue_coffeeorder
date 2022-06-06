import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
  state: {
    products: [
      {id:1, title: "Cà Phê Sữa Đá", price: 29000, srcImg: require('@/assets/product/product_1.jpg'), categoryId: 1},
      {id:2, title: "Cà Phê Sữa Nóng", price: 29000, srcImg: require('@/assets/product/product_2.jpg'), categoryId: 1},
      {id:3, title: "Bạc Sỉu", price: 29000, srcImg: require('@/assets/product/product_3.jpg'), categoryId: 1},
      {id:4, title: "Bạc Sỉu Nóng", price: 29000, srcImg: require('@/assets/product/product_4.jpg'), categoryId: 1},
      {id:5, title: "Cà Phê Đen Đá", price: 29000, srcImg: require('@/assets/product/product_5.jpg'), categoryId: 1},
      {id:6, title: "Cà Phê Đen Nóng", price: 29000, srcImg: require('@/assets/product/product_6.jpg'), categoryId: 1},
      {id:7, title: "Cà Phê Sữa Đá Chai Fresh 250ML", price: 29000, srcImg: require('@/assets/product/product_7.jpg'), categoryId: 1},
      {id:8, title: "Caramel Macchiato Đá", price: 29000, srcImg: require('@/assets/product/product_8.jpg'), categoryId: 1},
      {id:9, title: "Caramel Macchiato Nóng", price: 29000, srcImg: require('@/assets/product/product_9.jpg'), categoryId: 1},
      {id:10, title: "Latte Đá", price: 29000, srcImg: require('@/assets/product/product_10.jpg'), categoryId: 1},
      {id:11, title: "Latta Nóng", price: 29000, srcImg: require('@/assets/product/product_11.jpg'), categoryId: 1},
      {id:12, title: "Americano Đá", price: 29000, srcImg: require('@/assets/product/product_12.jpg'), categoryId: 1},

      {id:13, title: "Trà Long Nhãn Hạt Sen", price: 29000, srcImg: require('@/assets/product/product_13.jpg'), categoryId: 2},
      {id:14, title: "Trà Đào Cam Sả - Đá", price: 29000, srcImg: require('@/assets/product/product_14.jpg'), categoryId: 2},
      {id:15, title: "Trà Đào Cam Sả - Nóng", price: 29000, srcImg: require('@/assets/product/product_15.jpg'), categoryId: 2},
      {id:16, title: "Trà Hạt Sen - Đá", price: 29000, srcImg: require('@/assets/product/product_16.jpg'), categoryId: 2},
      {id:17, title: "Trà Hạt Sen - Nóng", price: 29000, srcImg: require('@/assets/product/product_17.jpg'), categoryId: 2},
      {id:18, title: "Trà Đen Macchiato", price: 29000, srcImg: require('@/assets/product/product_18.jpg'), categoryId: 2},
      {id:19, title: "Hồng Trà Sữa Trân Châu", price: 29000, srcImg: require('@/assets/product/product_19.jpg'), categoryId: 2},
      {id:20, title: "Hồng Trà Sữa Nóng", price: 29000, srcImg: require('@/assets/product/product_20.jpg'), categoryId: 2},
      {id:21, title: "Trà sữa Oolong Nướng Trân Châu", price: 29000, srcImg: require('@/assets/product/product_21.jpeg'), categoryId: 2},
      {id:22, title: "Trà sữa Oolong Nướng (Nóng)", price: 29000, srcImg: require('@/assets/product/product_22.jpg'), categoryId: 2},
      {id:23, title: "Trà Sữa Mắc Ca Trân Châu", price: 29000, srcImg: require('@/assets/product/product_23.jpg'), categoryId: 2},
      {id:24, title: "Hồng Trà Latte Macchiato", price: 29000, srcImg: require('@/assets/product/product_24.jpg'), categoryId: 2},

      {id:25, title: "Hi-Tea Dâu Tây Mận Muối Aloe Vera", price: 29000, srcImg: require('@/assets/product/product_25.jpg'), categoryId: 3},
      {id:26, title: "Hi-Tea Xoài Aloe Vera", price: 29000, srcImg: require('@/assets/product/product_26.jpg'), categoryId: 3},
      {id:27, title: "Hi-Tea Yuzu Trân Châu Trắng", price: 29000, srcImg: require('@/assets/product/product_27.jpg'), categoryId: 3},
      {id:28, title: "Hi-Tea Đào", price: 29000, srcImg: require('@/assets/product/product_28.jpg'), categoryId: 3},
      {id:29, title: "Hi-Tea Đá Tuyết Yuzu Aloe Vera", price: 29000, srcImg: require('@/assets/product/product_29.jpg'), categoryId: 3},
      {id:30, title: "Hi-Tea Đá Tuyết Mận Muối Aloe Vera", price: 29000, srcImg: require('@/assets/product/product_30.jpg'), categoryId: 3},
      {id:31, title: "Hi-Tea Đá Tuyết Xoài Đào", price: 29000, srcImg: require('@/assets/product/product_31.jpg'), categoryId: 3},

      {id:32, title: "Sinh Tố Việt Quất", price: 29000, srcImg: require('@/assets/product/product_32.jpg'), categoryId: 4},
      {id:33, title: "Chocolate Đá", price: 29000, srcImg: require('@/assets/product/product_33.jpg'), categoryId: 4},
      {id:34, title: "Chocolate Nóng", price: 29000, srcImg: require('@/assets/product/product_34.jpg'), categoryId: 4},

      {id:35, title: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G", price: 29000, srcImg: require('@/assets/product/product_35.jpeg'), categoryId: 5},
      {id:36, title: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)", price: 29000, srcImg: require('@/assets/product/product_36.jpg'), categoryId: 5},
      {id:37, title: "Cà Phê Rang Xay Original 1", price: 29000, srcImg: require('@/assets/product/product_37.jpg'), categoryId: 5},
      {id:38, title: "Cà Phê Sữa Đá Hòa Tan", price: 29000, srcImg: require('@/assets/product/product_38.jpg'), categoryId: 5},
      {id:39, title: "Cà Phê Sữa Đá Hòa Tan Túi 25x22G", price: 29000, srcImg: require('@/assets/product/product_39.jpg'), categoryId: 5},
      {id:40, title: "Cà Phê Rang Xay Original 1 Túi 1KG", price: 29000, srcImg: require('@/assets/product/product_40.jpeg'), categoryId: 5},
      {id:41, title: "Cà Phê Nguyên Hạt Arabica TCH (200gr)", price: 29000, srcImg: require('@/assets/product/product_41.jpg'), categoryId: 5},
      {id:42, title: "Trà Xanh Lá Tearoma 100G", price: 29000, srcImg: require('@/assets/product/product_42.jpg'), categoryId: 5},
      {id:43, title: "Trà Oolong Lá Tearoma 100G", price: 29000, srcImg: require('@/assets/product/product_43.jpg'), categoryId: 5},
      {id:44, title: "Trà Oolong Túi Lọc Tearoma 20x2G", price: 29000, srcImg: require('@/assets/product/product_44.jpg'), categoryId: 5},
      {id:45, title: "Trà Lài Lá Tearoma 100G", price: 29000, srcImg: require('@/assets/product/product_45.jpg'), categoryId: 5},
      {id:46, title: "Trà Lài Túi Lọc Tearoma 20x2G", price: 29000, srcImg: require('@/assets/product/product_46.jpg'), categoryId: 5},

      {id:47, title: "Bánh Mì Que Pate", price: 29000, srcImg: require('@/assets/product/product_47.jpg'), categoryId: 6},
      {id:48, title: "Bánh Mì VN Thịt Nguội", price: 29000, srcImg: require('@/assets/product/product_48.jpg'), categoryId: 6},
      {id:49, title: "Croissant trứng muối", price: 29000, srcImg: require('@/assets/product/product_49.jpg'), categoryId: 6},
      {id:50, title: "Chà Bông Phô Mai", price: 29000, srcImg: require('@/assets/product/product_50.jpg'), categoryId: 6},
      {id:51, title: "Mochi Kem Chocolate", price: 29000, srcImg: require('@/assets/product/product_51.jpg'), categoryId: 6},
      {id:52, title: "Mochi Kem Matcha", price: 29000, srcImg: require('@/assets/product/product_52.jpg'), categoryId: 6},
      {id:53, title: "Mochi Kem Việt Quất", price: 29000, srcImg: require('@/assets/product/product_53.jpg'), categoryId: 6},
      {id:54, title: "Mochi Kem Phúc Bồn Tử", price: 29000, srcImg: require('@/assets/product/product_54.jpg'), categoryId: 6},
      {id:55, title: "Mochi Kem Xoài", price: 29000, srcImg: require('@/assets/product/product_55.jpg'), categoryId: 6},
      {id:56, title: "Mousse Gấu Chocolate", price: 29000, srcImg: require('@/assets/product/product_56.jpg'), categoryId: 6},
    ],
    categories: [
      {id: 1, name: 'Cà Phê', srcImg: require('@/assets/category/category_1.png'),},
      {id: 2, name: 'Trái Cây, Trà Sữa', srcImg: require('@/assets/category/category_2.png'),},
      {id: 3, name: 'Hi-Tea Healthy', srcImg: require('@/assets/category/category_3.png'),},
      {id: 4, name: 'Đá Xay, Matcha', srcImg: require('@/assets/category/category_4.png'),},
      {id: 5, name: 'Fast Drink', srcImg: require('@/assets/category/category_5.png'),},
      {id: 6, name: 'Bánh - Snack', srcImg: require('@/assets/category/category_6.png'),},
    ],
    inCategories: [],
    inCarts: []
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
    }
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
    },
    REMOVE_TO_CART(state,product){
      state.inCarts = state.inCarts.filter(item => item.id !== product.id)
    },
    PLUS_QTY(state,product){
      const item = state.inCarts.find(item => item.id == product.id)
      item.qty++
    },
    MINUS_QTY(state,product){
      const item = state.inCarts.find(item => item.id == product.id)
      if(item.qty > 1){
        item.qty--
      }else{
        state.inCarts = state.inCarts.filter(item => item.id !== product.id)
      }
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
