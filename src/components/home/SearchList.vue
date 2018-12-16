<template>
  <div class="book-container">
    <div v-if="notNone">
      <el-col :span="6" v-for="(item, index) in orderList" :key="index" class="each-book-container">
        <div class="each-book">
          <div class="img-container" @click="showDetail(item)">
            <img :src="getpic(item.picture)" width="180px">
          </div>
          <div class="book-info">
            <div class="book-name" @click="showDetail(item)">{{item.name}}</div>
            <div class="time">{{ item.author }}搜索</div>
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
  </div>
</template>

<script>
import Img from "../../../public/timg.jpeg";
export default {
  name: "SearchList",
  data: () => ({
    notNone: false,
    orderList: []
  }),
  methods: {
    getpic(pic) {
      if (pic.length > 0) {
        return "/show/" + pic;
      }
      return Img;
    }
  },
  beforeMount() {
    console.log("search...");
    this.orderList = this.$route.params.booklist;
    this.notNone = this.orderList.length > 0 ? true : false;
    console.log(this.orderList, this.notNone);
  }
};
</script>

<style scoped>
.book-container {
  width: 90%;
  min-height: 500px;
  margin: 60px auto;
  padding: 48px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.each-book-container {
  width: 220px;
  padding-left: 20px;
  padding-right: 20px;
}

.each-book {
  width: 180px;
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
  height: 55px;
  font-size: 18px;
  word-wrap: break-word;
  overflow: hidden;
}

.time {
  display: block;
  font-size: 15px;
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
