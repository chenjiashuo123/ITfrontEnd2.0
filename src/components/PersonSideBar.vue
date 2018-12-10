<template>
    <div id="sideBar">
        <el-row class="tac">
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <template slot="title">
                            <span>个人信息</span>
                        </template>
                    </el-menu-item>
                    <br/>
                    <el-menu-item index="2">
                        <template slot="title">
                            <span>订单跟踪</span>
                        </template>
                    </el-menu-item>
                    <br/>
                    <el-menu-item index="3">
                        <template slot="title">
            
                            <span>我要买书</span>
                        </template>
                    </el-menu-item>
                    <br/>
                    <el-menu-item index="4">
                        <template slot="title">
                    
                            <span>收藏夹</span>
                        </template>
                    </el-menu-item>
                    <br/>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "PersonSideBar"
};
</script>



 <style scoped lang="stylus" >
#sideBar
    width 100%
    position relative
    font-size 40px
</style>

