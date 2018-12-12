<template>
  <div class="person">
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
import PersonSideBar from "@/components/person/PersonSideBar.vue";

export default {
  name: "Person",
  components: {
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








