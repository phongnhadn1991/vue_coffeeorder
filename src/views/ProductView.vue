<template>
  <div class="main-content">
      <div class="pt-5">
        <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductList"
export default {
  name: "CartView",
  components: {
    ProductList,
  },
};
</script>
