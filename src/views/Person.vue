<template>
  <div class="person">
    <div class="headBar">
      <head-bar/>
    </div>
    <div class="body">
      <div class="sideBar">
        <person-side-bar/>
      </div>
      <div class="information">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import PersonSideBar from "@/components/PersonSideBar.vue";

export default {
  name: "Person",
  components: {
    HeadBar,
    PersonSideBar
  }
};
</script>

<style lang="stylus" scoped>
.sideBar {
  float left
  width: 25%;
  height: 100%;
}

.person {
  height: 100%;
}

.body {
  width: 100%;
}

.information {
  float left 
  width: 50%;
  height: 100%;
}
</style>








