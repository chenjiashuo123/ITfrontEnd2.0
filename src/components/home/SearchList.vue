<template>
  <el-container class="book-container">
    <div v-if="notNone">
      <el-col :span="6" v-for="(item, index) in orderList" :key="index" class="each-book-container">
        <div class="each-book">
          <div class="img-container" @click="showDetail(item)">
            <img :src="getpic(item.picture)" width="180px" style="max-height:180px;">
          </div>
          <div class="book-info">
            <div class="book-name" @click="showDetail(item)">{{item.name}}</div>
            <div class="time">作者:{{ item.author }}</div>
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
    },
    showDetail(item) {
      this.$router.push({
        name: "bookdetail",
        params: {
          book: item
        }
      });
    }
  },
  beforeMount() {
    console.log("search...");
    this.orderList = this.$route.params.booklist;
    this.notNone = this.orderList.length > 0 ? true : false;
  }
};
</script>

<style scoped>
.book-container {
  width: 94%;
  min-height: 500px;
  margin: 60px auto;
  padding: 48px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.each-book-container {
  width: 230px;
  padding-left: 28px;
}

.each-book {
  width: 180px;
  margin-bottom: 56px;
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
  height: 54px;
  line-height: 25px;
  font-size: 20px;
  word-wrap: break-word;
  overflow: hidden;
}

.time {
  line-height: 18px;
  font-size: 16px;
  color: #999;
}

.book-price {
  line-height: 26px;
  font-size: 25px;
  color: red;
}

.nores-box {
  width: 100%;
  text-align: center;
  margin: 170px 0;
}
</style>
