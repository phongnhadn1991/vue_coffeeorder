<template>
  <div class="main-content">
      <div class="pt-5">
        <CartList></CartList>
    </div>
  </div>
</template>

<script>
import CartList from "@/components/carts/CartList"
export default {
  name: "CartView",
  components: {
    CartList,
  },
};
</script>
