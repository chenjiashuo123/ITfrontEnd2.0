<template>
  <div class="home-container">
    <search-bar></search-bar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/home/SearchBar";
export default {
  name: "Home",
  components: {
    "search-bar": SearchBar
  },
  beforeCreate() {
    this.$router.push("/homemain");
  }
};
</script>


<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}

.home-container {
  width: 1100px;
  min-height: 750px;
  margin: 30px auto;
}
</style>
