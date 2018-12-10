<template>
    <div id="personInfo" >
        <div class="showInfo" v-if="!modify">
            <div>个人信息</div>
            <el-row>
                <el-col>
                    <div  id="name" class="information">
                        <div >姓名：</div>
                        <div>{{personMessage.name}}</div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="address" class="information">
                        <div>地址：</div><div>{{personMessage.address}}</div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="phone" class="information">
                        <div>手机号：</div><div>{{personMessage.phone}}</div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="idCard" class="information">
                        <div>学生证号：</div><div>{{personMessage.idCard}}</div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-button type="primary" @click="modifyInfo()">修 改</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="modifyInfo" v-if="modify">
            <div>个人信息</div>
            <el-row>
                <el-col>
                    <div  id="name" class="information">
                        <div >姓名：</div>
                        <div><el-input v-model="personMessage.name"></el-input></div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="address" class="information">
                        <div>地址：</div>
                         <div><el-input v-model="personMessage.address"></el-input></div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="phone" class="information">
                        <div>手机号：</div>
                         <div><el-input v-model="personMessage.phone"></el-input></div>
                    </div>
                </el-col>
            </el-row>
            <br/>
            <el-row>
                <el-col>
                    <div id="idCard" class="information">
                        <div>学生证号：</div>
                         <div><el-input v-model="personMessage.idCard"></el-input></div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-button type="primary" @click="finishModify()">确 定</el-button>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
export default {
    name: "PersonInfo",
    data(){
        return{
            modify: false,
            personMessage:{
                name:"陈佳烁",
                address:"华南理工大学校区",
                phone: "123456789",
                idCard:"201930664033"
            }
        };
    },
    methods:{
        //点击修改
        modifyInfo(){
            this. modify=true;
        },
        //完成修改
        finishModify(){
            this. modify=false;
        }

    }
}
</script>

<style lang="stylus" scoped>
#personInfo
    position relative
    left 20%
    width 70%
    font-size 30px
.information
    display flex
    float left



</style>


