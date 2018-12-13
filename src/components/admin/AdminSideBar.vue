<template>
  <div class="personSideBar">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#909194"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
         <i class="el-icon-edit this-icon"></i>
          <span>管理书籍信息</span>
        </template>
        <el-menu-item index="1-1">
          <span>待审核书籍</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span>已审核书籍</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message this-icon"></i>
          <span>管理用户信息</span>
        </template>
        <el-menu-item index="2-1">
          <span>查看用户信息</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span>查看订单信息</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<style lang="stylus" scoped>
.personSideBar {
  height: 750px;
}

.el-menu-demo {
  text-align: left;
  width: 200px;
  height: 100%;
}

.this-icon {
  color: #ddd;
}
</style>


<script>
export default {
  name: "AdminSideBar",
  methods: {
    handleSelect(idx) {
      switch (idx) {
        case "1-1": //计算机
          this.$router.push("/waitcheckbook");
          break;
        case "1-2":
          this.$router.push("/checkedbook");
          break;
        case "2-1":
          this.$router.push("/checkuser");
          break;
        case "2-2":
          this.$router.push("/checkorder");
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.personSideBar {
  height: 750px;
}

.el-menu-demo {
  text-align: left;
  width: 200px;
  height: 100%;
}

.this-icon {
  color: #ddd;
}
</style>

