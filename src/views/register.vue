<template>
  <el-container class="loginImg">
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
          label="手机号"
        >
          <template slot="prepend">手机号</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="text"
          v-model="registerForm.checkPass"
          @keyup.enter.native="registerSubmit"
          placeholder="密码"
        >
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="registerForm.name"
          @keyup.enter.native="registerSubmit"
          placeholder="姓名"
          label="姓名"
        >
          <template slot="prepend">姓名</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="idCard">
        <el-input
          type="text"
          v-model="registerForm.idCard"
          @keyup.enter.native="registerSubmit"
          placeholder="学生证号"
          label="学生证号"
        >
          <template slot="prepend">学生证号</template>
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="registerSubmit">注 册</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
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
      }
    };
  },
  methods: {
    registerSubmit() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.$router.push("/login");
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
