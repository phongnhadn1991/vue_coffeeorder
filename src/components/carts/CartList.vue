<template>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-8 cart">
          <div class="title border-bottom">
            <div class="row">
              <div class="col">
                <h4><b>Giỏ hàng</b></h4>
              </div>
              <div class="col align-self-center text-right text-muted">
                {{ inCarts.length }} sản phẩm
              </div>
            </div>
          </div>
          <div v-if="inCarts.length">
          <CartItem
            v-for="product in inCarts"
            :key="product.id"
            :product="product"
          ></CartItem>
          </div>
          <div v-else>
              <div class="alert alert-warning text-center" role="alert">
                Chưa có sản phẩm nào trong giỏ hàng !
                </div>  
          </div>
          <div class="back-to-shop">
            <router-link :to="{name: 'product.list'}">&leftarrow; <span class="text-muted">Tiếp tục mua hàng</span></router-link>
          </div>
        </div>
        <div class="col-md-4 summary">
          <div>
            <h5><b>Đơn hàng</b></h5>
          </div>
          <hr />
          <div class="row">
            <div class="col" style="padding-left: 0">
              {{ inCarts.length }} Sản phẩm 
            </div>
            <div class="col text-right">{{ formatPrice(subToTalCart) }}</div>
          </div>
          <hr />
          <div class="row">
            <p class="col" style="padding-left: 0">Vận chuyển</p>
            <p class="col text-right">
              {{
                (subToTalCart > 100000) ? freeShip() : shipping()
              }}
            </p>
          </div>
          <div class="row" v-if="subToTalCart > 0 && subToTalCart < 100000">
            <p class="col font-size-13" style="padding: 0">Đặt thêm <span class="fw-bold">{{ formatPrice(100000 - subToTalCart) }}</span> để được miễn phí vận chuyển</p>
          </div>
          <div
            class="row"
            style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
          >
            <div class="col" style="padding-left: 0">Tổng tiền</div>
            <div class="col text-right">{{ formatPrice(totalCart) }}</div>
          </div>
          <a class="btn" @click="btnCheckout"
          :class="{ disabled: inCarts.length == 0}"
          >THANH TOÁN</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CartItem from "@/components/carts/CartItem";
import { mixinFormatPrice } from '@/mixins/mixinFormatPrice'
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  mixins: [mixinFormatPrice],
  components: {
    CartItem,
  },
  data() {
    return {
      pirceShipping: 0,
      textFree: 'Miễn Phí',
      emtyData: {}
    };
  },

  mounted() {},
  computed: {
    ...mapGetters(["inCarts", "subToTalCart"]),
    
    totalCart() {
      return this.subToTalCart + this.pirceShipping;
    },
  },
  methods: {
    freeShip(){
        this.pirceShipping = 0
        return this.textFree
    },
    shipping(){
      if(this.subToTalCart){
        this.pirceShipping = 15000
      }else{
        this.pirceShipping = 0
      }
      return this.formatPrice(this.pirceShipping)
    },
    btnCheckout(){
      this.$router.push({name: 'checkout'})
    }
  },
};
</script>

<style lang="scss" scoped>
.font-size-13 {
    font-size: 13px;
}
a {
    text-decoration: none;
    cursor: pointer;
}
.back-to-shop {
    cursor: pointer;
    display: inline-block;
}
.title {
    padding-top: 2rem;
  padding-bottom: 1rem;
}
.card {
  margin: auto;
  max-width: 1120px;
  // width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
  position: relative;
}
@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}
.cart {
  background-color: #fff;
  padding: 2rem 2rem 5rem;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media (max-width: 767px) {
  .cart {
    padding: 2rem;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem;
  }
}
.summary {
  background-color: #ffeed8;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 2rem;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  margin: 0;
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 0.7rem;
}
img {
  width: 3.5rem;
}
.back-to-shop {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
}
h5 {
  margin-top: 4vh;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}
.btn:hover {
  color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
#code {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.253),
      rgba(255, 255, 255, 0.185)
    ),
    url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
.text-right {
    text-align: right;
}
.btn.disabled {
    cursor: not-allowed;
    pointer-events: all;
    opacity: .4;
}
</style>