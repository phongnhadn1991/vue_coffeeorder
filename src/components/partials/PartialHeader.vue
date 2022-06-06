<template>
  <div class="c-header">
    <div class="container">
      <div class="box_wrap align-items-center">
        <div class="c-header__logo">
          <router-link :to="{name: 'home'}" class="text-left"><img src="../../assets/logo.svg" alt=""
          /></router-link>
        </div>
        <div class="c-header__nav">
          <nav>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'product.list'}">Đặt hàng</router-link></li>
            <li><router-link :to="{name: 'news'}">Tin tức</router-link></li>
            <li><a href="">Cửa hàng</a></li>
            <li><a href="">Khuyến mãi</a></li>
            <li><a href="">Tuyển dụng</a></li>
          </nav>
        </div>
        <div class="block-button">
          <ul>
            <li>
              <a class="btn_login cursor-pointer" @click="(show = !show)" :class="{active : show}">
                <i class="bi bi-person"></i>
              </a>
            </li>
            <li><router-link :to="{name: 'cart'}" class="btn_cart position-relative">
                <i class="bi bi-bag"></i>
                <span class="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                  {{inCarts.length}}
                  <span class="visually-hidden">unread messages</span>
                </span>
            </router-link>
            </li>
          </ul>
          <div class="box_action_user" v-if="show">
            <i @click="(show = !show)" class="btn_close bi bi-x-lg"></i>
            <router-link :to="{name: 'login'}">
              <span @click="(show = !show)">Đăng nhập</span>
            </router-link>
            <router-link :to="{name: 'order'}">
              <span @click="(show = !show)">Tra cứu đơn hàng</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PartialHeader",
  data(){
    return{
      show: false
    }
  },
  components: {},
  computed: {
    ...mapGetters(['inCarts']),
  },
  methods:{
  }
};
</script>

<style lang="scss">
.c-header {
  background: var(--radial-gradient-orange-1);
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  .box_wrap {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    li {
      list-style-type: none;
  }
  a {
        color: #fff;
        font-size: 14px;
        line-height: 150%;
        font-weight: 600;
        text-decoration: none;
      }
  }
  .block-button {
    position: relative;
    ul {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;
      gap: 10px;
      padding: 0;
      li {
        a {
          display: block;
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          line-height: 1;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          &:hover, &.active {
            background: var(--orange-4);
          }
          i {
            color: #fff;
          }
          &.btn_login {
            i {
              font-size: 30px;
            }
          }
          &.btn_cart {
            i {
              font-size: 23px;
            }
          }
        }
      }
    }
    .box_action_user {
      background: #fff;
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 180px;
      margin-left: -75px;
      padding: 20px 20px 10px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      box-shadow: var(--product-box-shadow);
      .btn_close {
        position: absolute;
        right: 7px;
        top: 7px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
          color: red;
          transform: rotate(90deg);
        }
      }
      a {
        display: block;
        color: gray;
        text-decoration: none;
        &:hover {
          color: var(--orange-2)
        }
      }
    }
  }
}
</style>
