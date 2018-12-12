<template>
  <div></div>
</template>

<script>
export default {
  name: "BookDetail",
  data: () => ({
    bookISBN: ""
  }),
  methods: {},
  beforeCreate() {
    this.bookISBN = this.$route.params.id;
    console.log(this.bookISBN);
  }
};
</script>

<style>
</style>
