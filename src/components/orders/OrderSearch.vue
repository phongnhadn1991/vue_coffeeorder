<template>
  <div class="c-order c-page__order">
    <div class="input-group mb-3 w-50 mx-auto">
        <span class="input-group-text" id="basic-addon1">Nhập mã đơn hàng </span>
        <input type="text" class="form-control zzz" placeholder="... nhập ( 1 hoặc 2 để test )" aria-label="Username"
               v-model.number="stringQuery"
        >
    </div>

    <div>
      <div class="list__order" v-if="handleFilter.length">
        <div class="list__order-item head">
          <div>#Mã Order</div>
          <div>Tên</div>
          <div>Điện thoại</div>
          <div>Sản phẩm</div>
        </div>
        <div v-for="item in handleFilter" :key="item.id">
          <div class="list__order-item">
            <div>{{ item.id }}</div>
            <div>{{ item.users.name }}</div>
            <div>{{ item.users.phone }}</div>
            <div>{{ item.products.length }} <i @click="(show = !show)" class="no-select bi bi-arrows-expand cursor-pointer"></i></div>
          </div>
          <div class="list__order_product" v-if="show">
            <div class="list__order_product-item head"
            >
              <div>ID</div>
              <div>Title</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Total</div>
            </div>
            <div class="list__order_product-item"
                 v-for="itemPro in (item.products)" :key="(itemPro.id)"
            >
              <div>{{itemPro.id}}</div>
              <div>{{ itemPro.title }}</div>
              <div>x {{ itemPro.qty }}</div>
              <div>{{ formatPrice(itemPro.price) }}</div>
              <div>{{ formatPrice(itemPro.qty * itemPro.price) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="alert alert-warning mt-4 w-50 mx-auto text-center" role="alert">
          Không tìm thấy đơn hàng...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinFormatPrice } from '@/mixins/mixinFormatPrice'
export default {
  name: "OrderSearch",
  mixins: [mixinFormatPrice],
  components:{
  },
  data() {
    return {
      show: true,
      stringQuery: null,
      inOrder:[
        {
          id: 1,
          users: {name: 'Mai Công Ngoãn', phone: '0909888999'},
          products: [
            {id:1, title: "Cà Phê Sữa Đá", price: 29000, srcImg: require('@/assets/product/product_1.jpg'), categoryId: 1, qty: 1},
            {id:2, title: "Cà Phê Sữa Nóng", price: 29000, srcImg: require('@/assets/product/product_2.jpg'), categoryId: 1, qty: 2},
            {id:3, title: "Bạc Sỉu", price: 29000, srcImg: require('@/assets/product/product_3.jpg'), categoryId: 1, qty: 5},
          ]
        },
        {
          id: 2,
          users: {name: 'Nguyễn Hoàng Sơn', phone: '0905555999'},
          products: [
            {id:21, title: "Trà sữa Oolong Nướng Trân Châu", price: 29000, srcImg: require('@/assets/product/product_21.jpeg'), categoryId: 2, qty: 2},
            {id:22, title: "Trà sữa Oolong Nướng (Nóng)", price: 29000, srcImg: require('@/assets/product/product_22.jpg'), categoryId: 2, qty: 2},
            {id:23, title: "Trà Sữa Mắc Ca Trân Châu", price: 29000, srcImg: require('@/assets/product/product_23.jpg'), categoryId: 2, qty: 1},
            {id:24, title: "Hồng Trà Latte Macchiato", price: 29000, srcImg: require('@/assets/product/product_24.jpg'), categoryId: 2, qty: 3}
          ]
        },
      ],
    };
  },
  mounted() {
  },
  computed:{
    handleFilter(){
      return this.inOrder.filter(item => item.id === Number(this.stringQuery))
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.list__order {
  &-item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid #dcdcdc;
    padding: 15px;
    &.head {
      font-weight: bold;
    }
  }
  &_product {
    background: #eaeaea;
    &-item {
      display: grid;
      grid-template-columns: 70px 350px repeat(3, 1fr);
      padding: 15px;
      border: 1px solid #dcdcdc;
      &.head {
        font-weight: bold;
      }
    }
  }
}
</style>
