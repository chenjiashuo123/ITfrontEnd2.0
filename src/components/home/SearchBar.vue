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
      <el-container class="search-container">
        <el-input
          placeholder="请输入搜索内容"
          v-model="search"
          class="input-select"
          prefix-icon="el-icon-search"
        ></el-input>
        <el-button @click="clickSearch()" type="warning" round class="search-btn">搜索</el-button>
      </el-container>
    </el-col>
    <div class="statement">&copy;MuteX IT project
      <br>2018
    </div>
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
      this.axios
        .post("/api/search", { keyword: this.search })
        .then(res => {
          if (res.data["state"] == 0) {
            var orderList = res.data["booklist"];
            console.log("click");
            this.$router.push({
              name: "searchlist",
              params: {
                booklist: orderList
              }
            });
          } else {
            this.$message.error("搜索失败，错误码：" + res.data["state"]);
          }
        })
        .catch(err => {
          console.log(err);
        });
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
  width: 450px;
}
.search-btn {
  margin: 20px 0 0 10px;
}
.input-select {
  margin: 20px 0 0 20%;
}
.statement {
  font-size: 12px;
  color: #909199;
  float: right;
  margin-top: 30px;
  margin-right: 30px;
  text-align: center;
}
</style>

