<template>
  <div class="AdminSideBar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1" class="orderTrack">
        <template slot="title">书籍信息管理</template>
        <el-menu-item index="1-1" class="waitCheckBook" @click="handleSelect(0)">待审核书籍</el-menu-item>
        <el-menu-item index="1-2" class="CheckBook" @click="handleSelect(1)">已审核书籍</el-menu-item>
      </el-submenu>

      <el-submenu index="2" class="orderTrack">
        <template slot="title">用户信息管理</template>
        <el-menu-item index="2-1" class="CheckUser" @click="handleSelect(2)">用户个人信息</el-menu-item>
        <el-menu-item index="2-2" class="CheckOrder" @click="handleSelect(3)">查看订单</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminSideBar",
  methods: {
    handleSelect(idx) {
      switch (idx) {
        case 0: //计算机
          this.$router.push("/waitcheckbook");
          break;
        case 1:
          this.$router.push("/checkedbook");
          break;
        case 2:
          this.$router.push("/checkuser");
          break;
        case 3:
          this.$router.push("/checkorder");
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.AdminSideBar {
  height:700px;
}

.el-menu-demo {
  width: 70%;
  height: 100%;
}
</style>

