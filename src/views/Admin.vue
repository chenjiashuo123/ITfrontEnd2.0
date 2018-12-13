<template>
  <div class="admin">
    <div class="body">
      <div class="sideBar">
        <admin-side-bar/>
      </div>
      <div class="information">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideBar from "@/components/adminComponents/AdminSideBar.vue";

export default {
  name: "Admin",
  components: {
    AdminSideBar
  }
};
</script>

<style lang="stylus" scoped>
.sideBar {
  float: left;
  width: 300px;
  height: 750px;
}

.admin {
  height: 750px;
}

.body {
  height: 750px;
}

.information {
  float: left;
  width: 50%;
  height: 100%;
}
</style>








