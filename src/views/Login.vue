<template>
  <el-container class="loginImg">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">软件学院团学管理系统</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm.account" @keyup.enter.native="handleSubmit"  placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" @keyup.enter.native="handleSubmit"  placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
  //import NProgress from 'nprogress'
  export default {
    name: 'Login',
    data() {
      return {
        logining: false,
        ruleForm: {
          account: '',
          checkPass: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if (this.ruleForm.account == 'admin' && this.ruleForm.checkPass == 'admin') {
              this.$router.push('/departmentjob')
            } else {
              this.$message.error('账号或密码错误！');
            }
          }
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
.loginImg{

    width: 50%
    margin: 10% auto
}
.login-container{

    width: 50%
    margin : 0 auto
}

</style>