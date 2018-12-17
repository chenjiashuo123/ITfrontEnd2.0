<template>
  <div id="app">
    <HeadBar/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeadBar from "@/components/others/HeadBar.vue";
export default {
  name: "App",
  components: {
    HeadBar
  },
  beforeCreate() {
    if (this.$router.path != "/homemain") {
      this.$router.push("/homemain");
    }
  },
  beforeMount() {
    this.GLOBAL.isLogin =
      sessionStorage.getItem("isLogin") == "1" ? true : false;
  }
};
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
