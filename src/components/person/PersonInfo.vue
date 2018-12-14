<template>
  <div class="person-info">
    <div class="title-container">
      <h1 class="title">个人信息</h1>
    </div>
    <div class="info-container">
      <div
        style="text-align:right;color:#409EFF;font-size:14px;margin-bottom:20px;"
        @click="isRevisePwd=!isRevisePwd"
      >
        <u>{{isRevisePwd?'取 消':'修改密码'}}</u>
      </div>
      <el-collapse-transition>
        <div style="border-bottom: 1px solid #eeeeee; margin: 15px 0 25px 0;" v-show="isRevisePwd">
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="80px"
            style="width:86%;"
          >
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitRevisePwd('ruleForm2')">提交</el-button>
              <el-button @click="resetRevisePwd('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-transition>

      <el-form
        label-position="right"
        label-width="80px"
        style="width:86%;"
        :disabled="!modifyVisible"
      >
        <el-form-item label="姓名">
          <div class="inputBox">
            <el-input v-model="personMessage.name" type="text" placeholder="姓名"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="地址">
          <div class="inputBox">
            <el-input v-model="personMessage.address" type="text" placeholder="地址"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="手机号">
          <div class="inputBox">
            <el-input v-model="personMessage.phone" type="text" placeholder="手机号"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="学生证号">
          <div class="inputBox">
            <el-input v-model="personMessage.idCard" type="text" placeholder="学生证号"></el-input>
          </div>
        </el-form-item>
      </el-form>

      <el-button
        type="primary"
        @click="clickModify"
        style="width:120px;margin-top:40px;"
      >{{modifyVisible?'确定':'修改'}}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonInfo",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      modifyVisible: false,
      isRevisePwd: false,
      personMessage: {
        name: "未登录",
        address: "未登录",
        phone: "无",
        idCard: "无"
      },
      ruleForm2: {
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  beforeCreate() {
    //获得个人信息
    this.axios.get("/api/getuserinfo").then(res => {
      if (res.data["state"] == 0) {
        this.personMessage.name = res.data["name"];
        this.personMessage.address = res.data["address"];
        this.personMessage.phone = res.data["phone"];
        this.personMessage.idCard = res.data["idnumber"];
      } else {
        console.log("get user info error: " + res.data["state"]);
      }
    });
  },
  methods: {
    //完成修改
    clickModify() {
      if (
        this.modifyVisible &&
        this.personMessage.name.length > 0 &&
        this.personMessage.address.length > 0 &&
        this.personMessage.phone.length > 0 &&
        this.personMessage.idCard.length > 0
      ) {
        this.axios
          .post("/api/reviseinfo", {
            phone: this.personMessage.phone,
            idnumber: this.personMessage.idCard,
            name: this.personMessage.name,
            address: this.personMessage.address
          })
          .then(res => {
            if (res.data["state"] == 0) {
              this.$message.success("修改成功");
            } else {
              this.$message.success("修改失败, 错误码：" + res.data["state"]);
            }
          });
        console.log("上传数据");
      }
      this.modifyVisible = !this.modifyVisible;
    },
    submitRevisePwd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/api/reviseinfo", {
              pwd: this.ruleForm2.pass
            })
            .then(result => {
              if (result.data["state"] != 0) {
                this.$message.error(
                  "修改失败! 错误码: " + result.data["state"]
                );
              } else {
                this.$message.success("修改成功!");
                this.isRevisePwd = false;
              }
            })
            .catch(err => {
              this.$message.error("请求失败! 请检查网路连接!");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetRevisePwd(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.person-info {
  width: 100%;
  text-align: center;
}

.title-container {
  margin: 30px auto;
}

.info-container {
  width: 400px;
  margin: 20px auto;
}
</style>
