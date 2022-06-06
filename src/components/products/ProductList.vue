<template>
  <div class="c-product">
    <div class="container">
      <div class="c-title_box">
        <h2><i class="bi bi-balloon-heart"></i> Sản phẩm nhà làm</h2>
      </div>
      <div class="product">
        <div class="product__category">
          <div class="item"
            v-for="category in categories"
            :key="category.id"
            @click="getProductCategory(category); setActive(category)"
            :class="{ active: currentFilter === category.id}"
          >
            <div class="item__thumb">
              <img :src="category.srcImg" :alt="category.name" />
            </div>
            <div class="item__text">
              <p>{{ category.name }}</p>
            </div>
          </div>
        </div>
        <div class="product__list">
          <!-- <TransitionGroup name="fade" tag="div" class="product__list"> -->
          <ProductItem
            v-for="product in inCategories"
            :key="product.id"
            :product="product"
          ></ProductItem>
          <!-- </TransitionGroup> -->
        </div>
        <div class="box_button text-center mt-5" v-if="this.$route.name == 'home'">
          <router-link :to="{name: 'product.list'}" class="btn_showAll">Xem tất cả <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      currentFilter: '',
    };
  },
  computed: {
    ...mapGetters(["products", "categories", "inCategories"]),
  },
  created() {
  },
  mounted(){
    this.setFirstItemClick()
  },
  methods: {
    ...mapActions(["getProductCategory"]),
    setActive(cat){
      this.currentFilter = cat.id
    },
    setFirstItemClick(){
      document.getElementsByClassName("product__category")[0].firstElementChild.click();
    },
  },
};
</script>

<style lang="scss">
.page-link:focus {
  box-shadow: none !important;
}

.product {
  margin-bottom: 60px;
  &__category {
    display: grid;
    grid-row: revert;
    justify-content: center;
    grid-template-columns: repeat(6, 8rem);
    gap: 20px;
    margin-bottom: 20px;
    .item {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      cursor: pointer;
      &__thumb {
        width: 86px;
        height: 86px;
        border-radius: 50%;
        overflow: hidden;
        background: var(--nude-1);
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin-bottom: 10px;
        img {
          max-height: 86px;
          object-fit: contain;
          height: 75%;
        }
      }
      &__text {
        font-size: 14px;
        color: var(--smoky-gray-2);
      }
      &.active {
        .item__thumb {
          background: var(--nude-2);
        }
        .item__text {
          color: var(--orange-2);
          font-weight: bold;
        }
      }
      &:nth-of-type(1){
        img {
          height: 55%;
        }
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    .item {
      box-shadow: var(--product-box-shadow);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &__content {
        padding: 10px 0 5px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-top {
          .title {
            text-align: left;
            font-size: 14px;
            font-weight: bold;
          }
        }
        &-footer {
          position: relative;
          margin-top: 10px;
          .price {
            padding-top: 5px;
            font-size: 14px;
            text-align: left;
          }
          .box_action {
            position: absolute;
            right: 0;
            top: -2px;
            .btn_addcart {
              background: var(--orange-2);
              width: 30px;
              height: 30px;
              display: flex;
              align-content: center;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              i {
                position: relative;
                top: 1px;
                color: #fff;
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
