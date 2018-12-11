<template>
  <div class="homeSideBar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="computer" @click="handleMenu(1)">计算机</el-menu-item>
      <el-menu-item index="2" class="project" @click="handleMenu(2)">工程科学</el-menu-item>
      <el-menu-item index="3" class="enconomic" @click="handleMenu(3)">经济管理</el-menu-item>
      <el-menu-item index="4" class="bology" @click="handleMenu(4)">自然科学</el-menu-item>
      <el-menu-item index="5" class="english" @click="handleMenu(5)">英语</el-menu-item>
      <el-menu-item index="6" class="math" @click="handleMenu(6)">数学</el-menu-item>
      <el-menu-item index="7" class="art" @click="handleMenu(7)">文学艺术</el-menu-item>
      <el-menu-item index="8" class="law" @click="handleMenu(8)">政治法律</el-menu-item>
      <el-menu-item index="9" class="others" @click="handleMenu(9)">其他</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeSideBar",
  methods: {
    handleMenu(idx) {
      switch (idx) {
        case 0: //计算机
          this.$router.push("/homebody");
          break;
        case 1: //工程科学
          this.$router.push("/homebody");
          break;
        case 2: //经济管理
          this.$router.push("/homebody");
          break;
        case 3: //自然科学
          this.$router.push("/homebody");
          break;
        case 4: //英语
          this.$router.push("/homebody");
          break;
        case 5: //数学
          this.$router.push("/homebody");
          break;
        case 6: //文学艺术
          this.$router.push("/homebody");
          break;
        case 7://政治法律
          this.$router.push("/homebody");
          break;
        case 8: 其他
          this.$router.push("/homebody");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0 atuo;
  padding: 0;
}

.el-menu-demo{
  height : 700px
}


</style>

