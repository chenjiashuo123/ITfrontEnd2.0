<template>
  <div class="head-bar">
    <div class="head-img-container" >
      <div style="float:left;">
        <img src="../../public/mutex.png" alt height="40px" style="margin: 6px 0 0 180px;">
      </div>
      <div style="float:right;margin: 10px;">
        <span style="color:#eeeeee;font-size: 20px;">二手书交易系统</span>
      </div>
    </div>
    <div class="head-menu">
      <el-col :span="7">
        <div :class="curPos==0 ? 'each-item-active':'each-item'" @click="handleSelect(0)">首页</div>
      </el-col>
      <el-col :span="1">
        <div class="partition-line"></div>
      </el-col>
      <el-col :span="8">
        <div
          :class="curPos==1 ? 'each-item-active':'each-item'"
          @click="handleSelect(1)"
        >{{isLogin?'个人中心':'登录'}}</div>
      </el-col>
      <el-col :span="1">
        <div class="partition-line"></div>
      </el-col>
      <el-col :span="7">
        <div
          :class="curPos==3 ? 'each-item-active':'each-item'"
          @click="handleSelect(3)"
        >{{isLogin? '注销' : '注册'}}</div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadBar",
  data() {
    return {
      curPos: 0,
      isLogin: this.GLOBAL.isLogin,
      switchText1: "个人中心",
      switchText2: "登出"
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toPerson() {
      this.$router.push("/person");
    },
    handleSelect(idx) {
      this.curPos = idx;
      this.handleRouter(idx);
    },
    handleRouter(idx) {
      idx = this.isLogin ? idx + 1 : idx;
      if (idx == this.GLOBAL.headBarState) return;
      console.log(idx);
      this.GLOBAL.headBarState = idx;
      switch (idx) {
        case 0: //首页
          this.$router.push("/home");
          break;
        case 1: //登录
          this.$router.push("/login");
          break;
        case 2: //个人中心
          this.$router.push("/person");
          break;
        case 3: //注册
          this.$router.push("/register");
          break;
        case 4: //登出
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.head-bar {
  height: 50px;
  background-color: #909399;
}

.head-img-container {
  height: 50px;
  float: left;
}

.head-menu {
  height: 50px;
  width: 14%;
  float: right;
  margin-right: 5%;
}

.each-item {
  margin: 12px 5px auto;
  padding-bottom: 10px;
  color: white;
}

.each-item-active {
  margin: 12px 5px auto;
  padding-bottom: 10px;
  color: #e6a23c;
  border-bottom: 4px solid #e6a23c;
}
.partition-line {
  height: 40px;
  width: 1px;
  margin: 5px auto;
  background-color: #c0c4cc;
}
</style>

