<template>
  <el-container class="adminContainer">
    <div class="sideBar">
      <admin-side-bar/>
    </div>
    <div class="admin-main">
      <router-view/>
    </div>
  </el-container>
</template>

<script>
import AdminSideBar from "@/components/admin/AdminSideBar.vue";

export default {
  name: "Admin",
  components: {
    AdminSideBar
  }
};
</script>

<style scoped>
.adminContainer {
  width: 1100px;
  height: 100%;
  margin: 30px auto;
}

.admin-main {
  width: 100%;
  margin-left: 10px;
}
</style>








