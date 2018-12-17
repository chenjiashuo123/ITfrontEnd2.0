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
      <el-menu-item index="1">
        <i class="el-icon-edit this-icon"></i>
        <span>个人信息</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message this-icon"></i>
          <span>订单跟踪</span>
        </template>
        <el-menu-item index="2-1">
          <span>已购买书籍</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span>已出售书籍</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <span>已发布书籍</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="3">
        <template slot="title">
          <i class="el-icon-document this-icon"></i>
          <span>我要卖书</span>
        </template>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-star-off this-icon"></i>
        <span>收藏夹</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "PersonSideBar",
  methods: {
    handleSelect(idx) {
      switch (idx) {
        case "1":
          this.$router.push("/personinfo");
          break;
        case "2-1":
          this.$router.push("/buybook");
          break;
        case "2-2":
          this.$router.push("/salebook");
          break;
        case "2-3":
          this.$router.push("/oldbook");
          break;
        case "3":
          this.$router.push("/newbook");
          break;
        case "4":
          this.$router.push("/bookstore");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.personSideBar {
  width: 200px;
  background-color: red;
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

