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
      <el-menu-item index="1" class="infomation" @click="toPersonInfo">个人信息</el-menu-item>
      <el-submenu index="2" class="orderTrack">
        <template slot="title">订单跟踪</template>
        <el-menu-item index="2-1" class="buyBook" @click="toBuyBook">我买的书</el-menu-item>
        <el-menu-item index="2-2" class="saleBook" @click="toSaleBook">我卖的书</el-menu-item>
      </el-submenu>
      <el-submenu index="3" class="saleBook">
        <template slot="title">我要卖书</template>
        <el-menu-item index="3-1" class="oldBook" @click="toOldBook">已发布书籍</el-menu-item>
        <el-menu-item index="3-2" class="newBook" @click="toNewBook">发布新书</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" class="store" @click="toBookStore">收藏夹</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "PersonSideBar",
  methods: {
    toPersonInfo() {
      this.$router.push("/personinfo");
    },
    toBookStore() {
      this.$router.push("/bookstore");
    },
    toOldBook() {
      this.$router.push("/oldbook");
    },
    toNewBook() {
      this.$router.push("/newbook");
    },
    toBuyBook() {
      this.$router.push("/buybook");
    },
    toSaleBook() {
      this.$router.push("/salebook");
    }
  }
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

