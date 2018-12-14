<template>
  <el-container class="book-container">
    <div v-if="!isNone">
      <el-col :span="6" v-for="(item, index) in orderList" :key="index">
        <div class="each-book">
          <div class="img-container" @click="showDetail(item)">
            <img src="../../../public/timg.jpeg" width="180px">
          </div>
          <div class="book-info">
            <div class="book-name" @click="showDetail(item)">{{item.bookName}}</div>
            <time class="time">{{ item.time }}</time>
            <div class="book-price">￥{{item.price}}</div>
          </div>
        </div>
      </el-col>
    </div>
    <div v-else class="nores-box">
      <span style="font-size: 30px;color: #909199;">找不到该书籍</span>
      <br>
      <span style="margin-top:20px;color: #bbb;">可以换个关键词试试哟～</span>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "SearchList",

  data: () => ({
    isNone: true,
    orderList: []
  }),
  beforeMount() {
    this.orderList = this.$route.params.booklist;
    this.isNone = this.orderList.length > 0 ? false : true;
  }
};
</script>

<style scoped>
.book-container {
  width: 98%;
  min-height: 500px;
  margin: 60px auto;
  padding-top: 40px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.each-book {
  width: 180px;
  margin-left: 40px;
  margin-bottom: 40px;
}

.img-container {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  border: 1px solid #d0d1d9;
}

.book-info {
  text-align: left;
}

.book-name {
  height: 45px;
  word-wrap: break-word;
  overflow: hidden;
}

.time {
  display: block;
  font-size: 13px;
  color: #999;
}

.book-price {
  font-size: 24px;
  color: red;
}

.nores-box {
  width: 100%;
  text-align: center;
  margin: 170px 0;
}
</style>
