<template>
  <div class="person">
    <div class="headBar">
      <head-bar/>
    </div>
    <div class="sideBar">
      <person-side-bar/>
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
  height: 100%;

}

.person {
  height: 100%;
}
</style>








