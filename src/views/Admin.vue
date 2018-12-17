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
  },
  beforeMount() {
    let getbool = sessionStorage.getItem("AdminLogin");
    if (getbool == "1") {
      this.GLOBAL.adminLogin = true;
      this.$router.push("/admin");
    }
    if (!this.GLOBAL.adminLogin) {
      this.$router.push("/adminlogin");
    }
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








