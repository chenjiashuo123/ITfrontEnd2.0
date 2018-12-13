<template>
  <el-container class="person-container">
    <div class="sideBar">
      <person-side-bar/>
    </div>
    <div class="person-main">
      <router-view/>
    </div>
  </el-container>
</template>

<script>
import PersonSideBar from "@/components/person/PersonSideBar.vue";

export default {
  name: "Person",
  components: {
    "person-side-bar": PersonSideBar
  }
};
</script>

<style scoped>
.person-container {
  width: 1100px;
  height: 100%;
  margin: 30px auto;
}

.person-main {
  width: 100%;
}
</style>








