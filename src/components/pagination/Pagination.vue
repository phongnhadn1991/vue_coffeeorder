<template>
  <div>
    <ul>
      <li>
        <button type="button">First</button>
      </li>
      <li>
        <button type="button">Previous</button>
      </li>
      <!-- Range of pages -->
      <li>
        <button type="button">Next</button>
      </li>
      <li>
        <button type="button">Last</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  data() {
    return {};
  },

  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>