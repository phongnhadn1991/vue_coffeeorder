<template>
  <div class="item">
    <div class="item__thumb">
      <img :src="product.srcImg" :alt="product.title" />
    </div>
    <div class="item__content">
      <div class="item__content-top">
        <div class="title">{{ product.title }}</div>
      </div>
      <div class="item__content-footer">
        <div class="price">{{ formatPrice(product.price) }}</div>
        <div class="box_action">
          <a class="btn_addcart" @click="addToCart(product)"><i class="bi bi-bag-plus"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinFormatPrice } from '@/mixins/mixinFormatPrice'
import { mapActions } from 'vuex';
export default {
  name: "ProductItem",
  mixins: [mixinFormatPrice],
  data() {
    return {};
  },
  
  props: ["product"],

  mounted() {},

  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>

<style lang="scss" scoped>
.btn_addcart {
  cursor: pointer;
}
</style>