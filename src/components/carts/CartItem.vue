<template>
    <div class=" d-flex justify-content-between align-items-center mt-2 p-2 items rounded border-bottom">
        <div class="d-flex flex-row">
        <img class="rounded" :src="product.srcImg" width="40" />
        <div class="ms-2 font-size-14">
            <span class="fw-bold d-block">{{ product.title }}</span
            ><span class="spec">...</span>
        </div>
        </div>
        <div class="d-flex flex-row align-items-center">
        <div class="d-block font-size-14 qty_content no-select"><span @click="minusQty(product)"><i class="bi bi-dash-square-fill"></i></span><span class="qty_num">{{ product.qty }}</span><span @click="plusQty(product)"><i class="bi bi-plus-square-fill"></i></span></div
        ><span class="d-block font-size-14 ms-3 price_num no-select">{{ formatPrice(product.price) }}</span
        ><span class="d-block font-size-14 ms-3 fw-bold subtotal_num no-select">{{ formatPrice(product.price * product.qty) }}</span
        ><i @click="removeToCart(product)" class="rm-cart bi bi-trash ms-3 text-black-50 no-select"></i>
        </div>
    </div>
</template>

<script>
import { mixinFormatPrice } from '@/mixins/mixinFormatPrice'
import { mapActions } from 'vuex';
export default {
  name: "CartItem",
  mixins: [mixinFormatPrice],
  props: ['product'],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    ...mapActions(['removeToCart','plusQty', 'minusQty'])
  },
};
</script>

<style lang="scss" scoped>
.rm-cart {
    cursor: pointer;
    &:hover {
        color: red !important
    }
}
.qty_num {
  min-width: 30px;
  display: inline-block;
  text-align: center;
}
.price_num {
  min-width: 100px;
  text-align: right;
}
.subtotal_num {
  min-width: 100px;
  text-align: right;
}
.qty_content {
  .bi {
    font-size: 18px;
    cursor: pointer;
    position: relative;
    top: 2px;
    &:hover {
      color: var(--orange-2)
    }
  }
}


.font-size-14 {
    font-size: 14px;
}
</style>
