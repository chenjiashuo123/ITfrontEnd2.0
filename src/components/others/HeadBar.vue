<template>
  <div class="head-bar">
    <div class="icon-container">
      <em>MuteX</em>
    </div>
    <div class="head-menu">
      <el-col :span="7">
        <div :class="curPos==0 ? 'each-item-active':'each-item'" @click="handleSelect(0)">首页</div>
      </el-col>
      <el-col :span="9">
        <div
          :class="curPos==1 ? 'each-item-active':'each-item'"
          @click="handleSelect(1)"
        >{{isLogin?'个人中心':'登录'}}</div>
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
      isLogin: this.GLOBAL.isLogin
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
  height: 36px;
  background-color: #909399;
  text-align: center;
}

.icon-container {
  height: 36px;
  padding: 5px;
  margin-left: 21%;
  float: left;
  font-size: 22px;
  font-weight: bold;
  color: #eeeeee;
}

.head-menu {
  height: 36px;
  width: 200px;
  float: right;
  margin-right: 5%;
}

.each-item {
  margin: 7px 5px auto;
  padding-bottom: 10px;
  color: white;
  font-size: 13px;
}

.each-item-active {
  margin: 6px 5px auto;
  padding-bottom: 5px;
  font-size: 14px;
  color: #e6a23c;
  border-bottom: 2px solid #e6a23c;
}
</style>

