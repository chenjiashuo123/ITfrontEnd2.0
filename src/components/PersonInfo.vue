<template>
  <div class="personInfo">
    <el-form class="information-container" v-if="!modifyVisible">
      <h1 class="title">个人信息</h1>
      <el-form-item class="content name">
        <div class="lables">姓名：</div>
        <div class="values">{{personMessage.name}}</div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">地址：</div>
        <div class="values">{{personMessage.address}}</div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">手机号：</div>
        <div class="values">{{personMessage.phone}}</div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">学生证号：</div>
        <div class="values">{{personMessage.idCard}}</div>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" @click.native.prevent="modifyInfo" style="width:30%;">修 改</el-button>
      </el-form-item>
    </el-form>
    <el-form class="demo-loginForm login-container" v-if="modifyVisible">
      <h1 class="title">个人信息</h1>
      <el-form-item class="content name">
        <div class="lables">姓名：</div>
        <div class="inputBox">
          <el-input v-model="personMessage.name" type="text" placeholder="姓名"></el-input>
        </div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">地址：</div>
        <div class="inputBox">
          <el-input v-model="personMessage.address" type="text" placeholder="地址"></el-input>
        </div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">手机号：</div>
        <div class="inputBox">
          <el-input v-model="personMessage.phone" type="number" placeholder="手机号"></el-input>
        </div>
      </el-form-item>
      <el-form-item class="content name">
        <div class="lables">学生证号：</div>
        <div class="inputBox">
          <el-input v-model="personMessage.idCard" type="number" placeholder="学生证号"></el-input>
        </div>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button  type="primary" @click.native.prevent="finishModify" style="width:30%;">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "PersonInfo",
  data() {
    return {
      modifyVisible: false,
      personMessage: {
        name: "陈佳烁",
        address: "华南理工大学校区",
        phone: "123456789",
        idCard: "201930664033"
      }
    };
  },
  methods: {
    //点击修改
    modifyInfo() {
     
          this.modifyVisible = true;
    },
    //完成修改
    finishModify() {
      
          this.modifyVisible = false;
        
    }
  }
};
</script>
<style lang="stylus" scoped>
* {
  margin: 0 auto;
  padding: 0;
}

.personInfo {
  position: relative;
  left: 10%;
  width: 100%;
}

.content {
  width: 100%;
}

.lables {
  position: relative;
  left: 20%;
  width: 20%;
  float: left;
  font-size: 25px;
}

.values {
  position: relative;
  left: 20%;
  width: 40%;
  float: left;
  font-size: 25px;
}

.inputBox {
  position: relative;
  left: 20%;
  width: 50%;
  float: left;
  font-size: 25px;
}
</style>
