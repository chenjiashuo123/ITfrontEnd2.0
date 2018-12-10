<template>
  <div class="home">
    <el-container>
      <el-header><Head/></el-header>
      <el-main>
        <div><router-view/></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Head.vue"

export default {
  name: "Home",
  components: {
    Head
  }
};
</script>

<style scoped lang="stylus">
.el-header{
    background-color: #990000;
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    align-items :center;
    justify-items :center;
    
  }
</style>
