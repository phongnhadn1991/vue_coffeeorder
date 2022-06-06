<template>
  <div class="main-content">
    <HomeSlider></HomeSlider>
    <ProductList></ProductList>
    <div class="mb-5">
    <CartList></CartList>
    </div>
    <HomeNews></HomeNews>
  </div>
</template>

<script>
import HomeSlider from "@/components/homes/HomeSlider";
import ProductList from "@/components/products/ProductList";
import CartList from "@/components/carts/CartList"
import HomeNews from "@/components/homes/HomeNews";
export default {
  name: "HomeView",
  components: {
    HomeSlider,
    ProductList,
    CartList,
    HomeNews,
  },
};
</script>
