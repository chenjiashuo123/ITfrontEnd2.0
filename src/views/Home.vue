<template>
  <div class="home-container">
    <home-side-bar/>
  </div>
</template>

<script>
import HomeSideBar from "@/components/HomeSideBar";
export default {
  name: "Home",
  components:{
    HomeSideBar
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.home-container {
  width: 1180px;
  min-height: 100px;
  background-color: red;
  margin: 10px auto;
}
</style>
