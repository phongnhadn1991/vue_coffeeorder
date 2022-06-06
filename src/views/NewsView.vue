<template>
  <div class="main-content">
      <div class="pt-5">
        <HomeNews></HomeNews>
    </div>
  </div>
</template>

<script>
import HomeNews from "@/components/homes/HomeNews"
export default {
  name: "NewsView",
  components: {
    HomeNews,
  },
};
</script>
