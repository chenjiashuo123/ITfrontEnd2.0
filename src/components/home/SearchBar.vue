<template>
  <div class="search-bar-container">
    <el-col :span="7">
      <div class="icon-container">
        <div class="img-div">
          <img src="../../../public/mutex.png" alt height="60px">
        </div>
        <div class="text-div">
          <div style="color:#909193;font-size: 24px;font-weight:bold;">二手书交易网</div>
          <div style="color: #808080;font-size: 14px;">年轻人的选择</div>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="search-container">
        <el-input placeholder="请输入搜索内容" v-model="search" class="input-select">
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="clickSearch()"
            style="background-color:#E6A23C;color:white;"
          ></el-button>
        </el-input>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="statement">&copy;MuteX IT project
        <br>2018
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    search: ""
  }),
  methods: {
    clickSearch() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
.search-bar-container {
  width: 100%;
  height: 75px;
}

.icon-container {
  padding: 8px 20px;
}
.img-div {
  float: left;
}
.text-div {
  margin-left: 20px;
  float: left;
}

.search-container {
  width: 360px;
}
.input-select {
  margin: 20px 0 0 20%;
}
.statement {
  font-size: 12px;
  color: #909199;
  float: right;
  margin-top: 30px;
}
</style>

