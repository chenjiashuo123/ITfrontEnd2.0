<template>
  <div class="personSideBar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="computer" >计算机</el-menu-item>
      <el-menu-item index="2" class="project">工程科学</el-menu-item>
      <el--menu-item index="3" class="enconomic">经济管理</el--menu-item>
      <el-menu-item index="4" class="bology" >自然科学</el-menu-item>
      <el-menu-item index="5" class="english" >英语</el-menu-item>
      <el-menu-item index="6" class="math">数学</el-menu-item>
      <el--menu-item index="7" class="art">文学艺术</el--menu-item>
      <el-menu-item index="8" class="law">政治法律</el-menu-item>
      <el-menu-item index="9" class="others">其他</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeSideBar",
 
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0 atuo;
  padding: 0;
}

.personSideBar {
  height: 750px;
}

.el-menu-demo {
  width: 70%;
  height: 100%;
}
</style>

