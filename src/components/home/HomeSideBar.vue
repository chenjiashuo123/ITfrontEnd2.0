<template>
  <div class="homeSideBar">
    <el-menu
      default-active="0"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="0">推荐</el-menu-item>
      <el-menu-item index="1">计算机</el-menu-item>
      <el-menu-item index="2">工程科学</el-menu-item>
      <el-menu-item index="3">经济管理</el-menu-item>
      <el-menu-item index="4">自然科学</el-menu-item>
      <el-menu-item index="5">英语</el-menu-item>
      <el-menu-item index="6">数学</el-menu-item>
      <el-menu-item index="7">文学艺术</el-menu-item>
      <el-menu-item index="8">政治法律</el-menu-item>
      <el-menu-item index="9">其他</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeSideBar",
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case 0: //推荐
          this.$router.push("/homebody");
          break;
        case 1: //计算机
          this.$router.push("/homebody");
          break;
        case 2: //工程科学
          this.$router.push("/homebody");
          break;
        case 3: //经济管理
          this.$router.push("/homebody");
          break;
        case 4: //自然科学
          this.$router.push("/homebody");
          break;
        case 5: //英语
          this.$router.push("/homebody");
          break;
        case 6://数学
          this.$router.push("/homebody");
          break;
        case 7:  //文学艺术
          this.$router.push("/homebody");
          break;
        case 8://政治法律
          this.$router.push("/homebody");
          break;
        case 9:
          this.$router.push("/homebody");
          break;
        default:
          break;
      }
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0 atuo;
  padding: 0;
}

.el-menu-demo {
}
</style>

