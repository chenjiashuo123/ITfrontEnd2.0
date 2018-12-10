<template>
  <div class="personSideBar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="infomation">个人信息</el-menu-item>
      <el-menu-item index="2" class="orderTrack">订单跟踪</el-menu-item>
      <el-menu-item index="3" class="buyBook">我要卖书</el-menu-item>
      <el-menu-item index="4" class="store">收藏夹</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "PersonSideBar"
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0 atuo;
  padding: 0;
}

.personSideBar {
  height: 550px;
}

.el-menu-demo {
  width: 25%;
  height: 100%;
}
</style>

