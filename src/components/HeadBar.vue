<template>
  <el-container class="headBar">
    <div class="head">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="toHome" class="homeButton">首页</el-menu-item>
        <el-menu-item index="2" @click="toPerson">消息中心</el-menu-item>
      </el-menu>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "HeadBar",
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toPerson() {
      this.$router.push("/person");
    }
  }
};
</script>

<style lang="stylus" scoped>
.head {
  width: 100%;

}

.headBar {
  width: 100%;
}

.el-menu-demo {
  width: 100%;
}
</style>

