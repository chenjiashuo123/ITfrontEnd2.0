<template>
  <div class="home-container">
    <search-bar></search-bar>
    <div class="body">
      <div class="sideBar">
        <home-side-bar/>
      </div>
      <div class="information">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSideBar from "@/components/home/HomeSideBar";
import SearchBar from "../components/home/SearchBar"
export default {
  name: "Home",
  components: {
    'home-side-bar': HomeSideBar,
    'search-bar': SearchBar
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
  margin: 10px auto;
}

.sideBar {
  float: left;
  width: 20%;
  height: 100%;
}

.body {
  width: 100%;
}

.information {
  float: left;
  width: 60%;
  height: 100%;
}
</style>
