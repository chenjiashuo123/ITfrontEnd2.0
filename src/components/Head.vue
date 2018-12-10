<template>
<div id=header>
    <div id=logo>网罗天下图书   传承中华文明</div>
    <div id="buttons">
        <div v-if="!showname">
            <div id="login"><el-button  type="text" @click="loginDialogVisible = true">登陆</el-button></div>
            <div>|</div>
            <div id="registry"><el-button type="text" @click="registerDialogVisible = true">注册</el-button></div>
        </div>
        <div id="person" v-if="showname"><el-button type="text" >个人中心</el-button></div>
    </div>
    <el-dialog
            title="登陆"
            :visible.sync="loginDialogVisible"
            width="30%"
            center>
            <span :model="form2">
                    <el-input id="phone" v-model="form2.userPhone" placeholder="请输入手机号" >
                        <template slot="prepend">手机</template>
                    </el-input>
                    <br/>
                    <el-input id="password" v-model="form2.password" type="password" placeholder="请输入密码" >
                        <template slot="prepend">密码</template>
                    </el-input>
                    <div id="container">
                        <div id="phoneError" v-if="errorPhone">手机号不存在</div>
                        <div id="passwordError" v-if="errorPassword">密码错误</div>
                    </div>
                    <div id="container">
                        <el-button id="register" type="text" @click="loginDialogVisible = false,registerDialogVisible=true">立即注册</el-button>
                    </div>
            </span>   
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="login()">确 定</el-button>
            </span>
        
    </el-dialog>

    <el-dialog
            title="注册"
            :visible.sync="registerDialogVisible"
            width="30%"
            center>
            <span :model="form1">
                <el-input id="phone"  v-model="form1.PHONE" placeholder="请输入手机号">
                    <template slot="prepend">手机号</template>
                </el-input>
                <br/>
                <el-input id="password" v-model="form1.PASSWORD" placeholder="请输入密码">
                    <template slot="prepend">密码</template>
                </el-input>
                <br/>
                <el-input id="name" v-model="form1.NAME" placeholder="请输入姓名">
                    <template slot="prepend">姓名</template>
                </el-input>
                <br/>
                <el-input id="idCard" v-model="form1.IDCARD" placeholder="请输入证件号">
                    <template slot="prepend">证件号</template>
                </el-input>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="register()">确 定</el-button>
            </span>
    </el-dialog>
    <el-dialog
        title="注册成功"
        :visible.sync="successDialogVisible"
        width="30%"
        center>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="successDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
export default {
  name: "Head",
   data() {
      return {
        successDialogVisible: false,
        loginDialogVisible: false,
        registerDialogVisible: false,
        showname:false,
        errorPhone:false,
        errorPassword:false,
        form1:{
            PHONE:"",
            PASSWORD:"",
            NAME:"",
            IDCARD:"",
        },
        form2:{
            userPhone:"",
            password:"",
        },
      };
    },
    methods:{
        login(){
            //如果登录成功
                this. loginDialogVisible = false;
                this. showname=true;
                
            //如果账号不存在    
            // this.errorPhone = true;

            //如果密码错误
            // this.errorPassword=true;

        },
        register(){
            //传数据
            this. successDialogVisible=true;
            this. registerDialogVisible = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#header
    width 100%
    color #FFFFFF
#logo
    width 60%
#buttons 
    display flex
    justify-content center
    align-content center
    color #FFFFFF
    width 40%
#register 
    color #FF0000
    position relative
    left 80%
#container
    width 100%
#phoneError
    position relative
    left 40%
    color red
#passwordError
    position relative
    left 45%
    color red
div
    float left 
.el-button
    color #FFFFFF
    font-size 15px


</style>
