<template>
  <div id="app">
    <HeadBar/>
    <router-view/>
  </div>
</template>

<script>
import HeadBar from "@/components/others/HeadBar.vue";
export default {
  name: "App",
  components: {
    HeadBar
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
  text-align: center;
  color: #2c3e50;
}
</style>
