<template>
  <el-container class="loginImg">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="demo-loginForm login-container"
    >
      <h3 class="title">二手书交易系统</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="loginForm.account"
          @keyup.enter.native="handleSubmit"
          placeholder="手机号"
          label="手机号"
        >
          <template slot="prepend">手机号</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="loginForm.checkPass"
          @keyup.enter.native="handleSubmit"
          placeholder="密码"
          label="密码"
        >
          <template slot="prepend">密码</template>
        </el-input>
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
  </el-container>
</template>

<script>
//import NProgress from 'nprogress'
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      loginForm: {
        account: "",
        checkPass: ""
      },
      checked: true
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (
            this.loginForm.account == "admin" &&
            this.loginForm.checkPass == "admin"
          ) {
            this.$router.push("/home");
          } else {
            this.$message.error("账号或密码错误！");
          }
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.loginImg {
  width: 50%;
  margin: 10% auto;
}

.login-container {
  width: 50%;
  margin: 0 auto;
}

.registerButton {
  margin-left: 80%;
  color: red;
}

.register-container {
  width: 50%;
  margin: 0 auto;
}
</style>