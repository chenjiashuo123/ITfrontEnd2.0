<template>
  <div class="loginImg">
    <h3 class="title">管理员登陆</h3>
    <el-form
      :model="loginForm"
      ref="loginForm"
      label-position="right"
      label-width="54px"
      class="login-container"
    >
      <el-form-item label="账号">
        <el-input
          type="text"
          v-model="loginForm.account"
          @keyup.enter.native="handleSubmit"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="loginForm.checkPass"
          @keyup.enter.native="handleSubmit"
          placeholder="密码"
        ></el-input>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleSubmit"
          :loading="logining"
        >登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//import NProgress from 'nprogress'
export default {
  name: "AdminLogin",
  data() {
    return {
      logining: false,
      loginForm: {
        account: "",
        checkPass: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.axios
            .post("/admin/api/login", {
              adminid: this.loginForm.account,
              pwd: this.loginForm.checkPass
            })
            .then(res => {
              if (res.data["state"] == 0) {
                this.$message.success("登录成功");
                this.GLOBAL.adminLogin = true;
                sessionStorage.setItem("AdminLogin", "1");
                this.$router.push("/admin");
              } else if (res.data["state"] == 101) {
                this.$message.success("密码错误");
              } else if (res.data["state"] == 102) {
                this.$message.success("账户不存在");
              } else {
                console.log("login", res.data["state"]);
                this.$message.error("登录失败");
              }
            })
            .catch(err => {
              this.$message.error("请先连接网络");
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
.loginImg {
  width: 400px;
  margin: 8% auto;
  border: 1px solid #909199;
  padding: 40px 20px 40px 0;
  border-radius: 20px;
  background-color: lightyellow;
}
.title {
  margin-left: 10px;
  margin-bottom: 30px;
}
.login-container {
  width: 80%;
  margin: 0 auto;
}

.register-container {
  width: 50%;
  margin: 0 auto;
}
</style>