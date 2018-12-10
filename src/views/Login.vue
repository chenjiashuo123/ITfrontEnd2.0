<template>
  <el-container class="loginImg">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="demo-loginForm login-container"
      v-if="loginVisible"
    >
      <h3 class="title">二手书交易系统</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="loginForm.account"
          @keyup.enter.native="handleSubmit"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="loginForm.checkPass"
          @keyup.enter.native="handleSubmit"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="text"
          @click.native.prevent="loginVisible=false"
          class="registerButton"
        >立即注册</el-button>
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
    <el-form
      :model="registerForm"
      :rules="rules"
      ref="registerForm"
      label-position="left"
      label-width="0px"
      class="demo-registerForm register-container"
      v-if="!loginVisible"
    >
      <h3 class="title">二手书交易系统</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="registerForm.account"
          @keyup.enter.native="registerSubmit"
          placeholder="手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="text"
          v-model="registerForm.checkPass"
          @keyup.enter.native="registerSubmit"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="registerForm.name"
          @keyup.enter.native="registerSubmit"
          placeholder="姓名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="idCard">
        <el-input
          type="text"
          v-model="registerForm.idCard"
          @keyup.enter.native="registerSubmit"
          placeholder="学生证号"
        ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="registerSubmit">注 册</el-button>
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
      loginVisible: false,
      logining: false,
      loginForm: {
        account: "",
        checkPass: ""
      },
      registerForm: {
        account: "",
        checkPass: "",
        name: "",
        idCard: ""
      },
      rules: {
        account: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        idCard: [{ required: true, message: "请输入证件号", trigger: "blur" }]
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
            this.$router.push("/departmentjob");
          } else {
            this.$message.error("账号或密码错误！");
          }
        }
      });
    },
    registerSubmit() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loginVisible = true;
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