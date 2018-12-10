<template>
    <div id=header>
        <div id=logo>网罗天下图书   传承中华文明</div>
        <div id="buttons">
            <div id="firstPage" ><el-button type="text" >首页</el-button></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PersonHead",
}
</script>

<style lang="stylus" scoped>
#header
    width 100%
    color #FFFFFF
#logo
    width 60%
div
    float left 
.el-button
    color #FFFFFF
    font-size 15px
#header
    background-color #990000
    color #FFFFFF
    text-align center
    line-height 60px
#firstPage
    position relative
    left 70%
#buttons
    width 40%
</style>

