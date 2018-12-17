<template>
  <div class="loginImg">
    <h3 class="title">二手书交易系统</h3>
    <el-form
      :model="registerForm"
      :rules="rules"
      ref="registerForm"
      label-position="right"
      label-width="80px"
      class="register-container"
    >
      <el-form-item prop="account" label="手机号">
        <el-input
          v-model="registerForm.account"
          @keyup.enter.native="registerSubmit"
          type="number"
          placeholder="请输入你的手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="密码">
        <el-input
          type="password"
          v-model="registerForm.checkPass"
          @keyup.enter.native="registerSubmit"
          placeholder="请输入初始密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name" label="姓名">
        <el-input
          type="text"
          v-model="registerForm.name"
          @keyup.enter.native="registerSubmit"
          placeholder="请输入你的姓名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="idCard" label="学生证号">
        <el-input
          type="text"
          v-model="registerForm.idCard"
          @keyup.enter.native="registerSubmit"
          placeholder="请输入你的学生证号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <el-input
          type="text"
          v-model="registerForm.address"
          @keyup.enter.native="registerSubmit"
          placeholder="请输入你的地址"
        ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="registerSubmit">注 册</el-button>
      </el-form-item>
    </el-form>
  </div>
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
        idCard: "",
        address: ""
      },
      rules: {
        account: [{ required: true, message: "请输入11位手机号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        idCard: [{ required: true, message: "请输入证件号", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    registerSubmit() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          if (this.registerForm.account.length != 11 || this.registerForm.account[0] != '1') {
            this.$message.error("请输入正确的手机号");
            this.registerForm.account = "";
            return;
          }
          if (this.registerForm.idCard.length != 12){
            this.$message.error("请输入正确的学生证号");
            this.registerForm.idCard = "";
            return;
          }
          if (this.registerForm.checkPass.length != 6){
            this.$message.error("密码过短，请重新输入");
            this.registerForm.checkPass = "";
            return;
          }
          this.axios
            .post("/api/register", {
              phone: this.registerForm.account,
              pwd: this.registerForm.checkPass,
              idnumber: this.registerForm.idCard,
              name: this.registerForm.name,
              address: this.registerForm.address
            })
            .then(res => {
              if (res.data["state"] == 0) {
                //注册成功
                this.$message.success("注册成功");
                this.GLOBAL.headBarState = 1;
                this.$router.push("/login");
              } else {
                this.$message.error("注册失败，错误码：" + res.data["state"]);
              }
            })
            .catch(err => {
              this.$message.error("请先连接网路");
            });
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
.loginImg {
  width: 400px;
  margin: 5% auto;
  padding: 40px 50px 30px 30px;
  border: 1px solid #909199;
  border-radius: 12px;
  text-align: center;
}

.title {
  margin-left: 10px;
  margin-bottom: 30px;
}

.registerButton {
  margin-left: 80%;
  color: red;
}

.register-container {
  width: 100%;
  margin: 0 auto;
}
</style>
