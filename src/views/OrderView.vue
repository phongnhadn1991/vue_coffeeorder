<template>
  <div class="main-content">
    <div class="container pt-5">
      <h5 class="text-center mb-4">Tra cứu đơn hàng</h5>
      <OrderSearch></OrderSearch>
    </div>
  </div>
</template>

<script>
import OrderSearch from "../components/orders/OrderSearch"
export default {
  name: "OrderView",
  components: {
    OrderSearch
  },
};
</script>
