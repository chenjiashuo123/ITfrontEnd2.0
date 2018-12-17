<template>
  <div class="head-bar">
    <div class="icon-container" @click="toHome()">
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
          :class="curPos==2 ? 'each-item-active':'each-item'"
          @click="handleSelect(2)"
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
      isLogin: false
    };
  },
  beforeMount() {
    this.curPos = this.GLOBAL.headBarState;
    this.isLogin = this.GLOBAL.isLogin;
  },
  methods: {
    toHome() {
      if (this.$router.path != "/homemain") {
        this.$router.push("homemain");
      }
    },
    handleSelect(idx) {
      if (this.curPos == idx) return;
      this.curPos = idx;
      this.handleRouter(idx);
    },
    handleRouter(idx) {
      switch (idx) {
        case 0: //首页
          if (this.GLOBAL.headBarState == 0) return;
          this.GLOBAL.headBarState = 0;
          this.$router.push("/homemain");
          break;
        case 1: //登录//个人中心
          if (this.GLOBAL.isLogin) {
            if (this.GLOBAL.headBarState == 2) return;
            this.GLOBAL.headBarState = 2;
            this.$router.push("/personinfo");
          } else {
            if (this.GLOBAL.headBarState == 1) return;
            this.GLOBAL.headBarState = 1;
            this.$router.push("/login");
          }
          break;
        case 2: //注册//登出
          if (this.GLOBAL.isLogin) {
            console.log("注销");
          } else {
            if (this.GLOBAL.headBarState == 3) return;
            this.GLOBAL.headBarState = 3;
            this.$router.push("/register");
          }
          break;
        default:
          break;
      }
    }
  },
  watch: {
    $route: function(to, from) {
      if (this.GLOBAL.isLogin && !this.isLogin) {
        console.log("catch");
        this.curPos = 0;
        this.isLogin = true;
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

