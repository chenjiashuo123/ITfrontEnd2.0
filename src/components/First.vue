<template>
<div class="firstPage">
    <el-row>
         <el-col :span="16">
             <div class="search search-box" ><el-input v-model="input" placeholder="请输入内容" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                 </div>
         </el-col >
    </el-row>
    <el-row >
         <el-col :span="5" ><img class="search-icons computer" alt="计算机" src="../assets/电脑.png"/><br/>计算机</el-col>
         <el-col :span="5" ><img class="search-icons project" alt="工程科学" src="../assets/工程绘图.png"/><br/>工程绘图</el-col>
         <el-col :span="5" ><img class="search-icons economic" alt="经济" src="../assets/经济.png"/><br/>经济</el-col>
    </el-row>

    <el-row >
         <el-col :span="5" ><img class="search-icons biology" alt="自然科学" src="../assets/生物.png"/><br/>生物</el-col>
         <el-col :span="5" ><img class="search-icons english" alt="外语" src="../assets/英语.png"/><br/>英语</el-col>
         <el-col :span="5" ><img class="search-icons math" alt="数学" src="../assets/数学.png"/><br/>数学</el-col>
    </el-row>

    <el-row >
         <el-col :span="5" ><img class="search-icons literature" alt="文学" src="../assets/文学.png"/><br/>文学</el-col>
         <el-col :span="5" ><img class="search-icons law" alt="政治法律" src="../assets/政治.png"/><br/>政治</el-col>
         <el-col :span="5" ><img class="search-icons others" alt="其他" src="../assets/书本.png"/><br/>其他</el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: "First"
};
</script>

<style scoped lang="stylus">
 .el-row {

    margin-bottom: 20px;
    
  }
  .el-col {
    position relative;
    left:16%;
  }
  .search{
    min-height: 50px;
    background: #990000;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .el-button :click{
    color #FFFFFF
    font-size:25px;
  }
  .search-box{
    position:relative;
    height : 50px;
    border-bottom-left-radius: 4px; 
    border-top-left-radius: 4px; 
    text-align: center;
    align-items :center;
    justify-items :center;
  }
  .search-icons {
      cursor:pointer;
  }
  .search-icons:hover{
      background-color: #CCCCCC;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-input{
      position : relative;
      top:10%;
      width: 99%;
      background-color red
  }


</style>
