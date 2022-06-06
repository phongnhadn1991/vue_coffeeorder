<template>
  <div class="c-footer">
    <div class="container">
      <div class="box_wrap">
        <div class="box_left">© 2022 MCN - Mai Công Ngoãn.</div>
        <div class="box_right">
          <ul class="nav col-12 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">Features</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">Pricing</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">FAQs</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartialFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.c-footer {
  background: var(--orange-2);
  margin-top: 80px;
  .box_wrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
    color: #fff;
    .nav {
        a {
            color: #fff !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
  }
}
</style>