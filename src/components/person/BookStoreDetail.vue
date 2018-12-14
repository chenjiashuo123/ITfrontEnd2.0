<template>
  <el-container class="book-container">
    <div class="box-left">
      <div class="img-box">
        <img :src="picture" alt width="350px" style="margin-left:5px;">
      </div>
    </div>
    <div class="box-middle">
      <div class="book-name">
        <span class="s-label">书名：</span>
        <span class="s-value-h1">{{name}}</span>
      </div>
      <div class="book-price">
        <span class="s-label">价格：</span>
        <span class="s-value-h1 price">￥{{price}}</span>
      </div>

      <div class="book-author">
        <span class="s-label">作者：</span>
        <span class="s-value-h2">{{author}}</span>
      </div>

      <div class="book-other">
        <span class="s-label">数量：</span>
        <span class="s-value-h3">{{number}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">分类：</span>
        <span class="s-value-h3">{{bookclass}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">ISBN：</span>
        <span class="s-value-h4">{{isbn}}</span>
      </div>
      <br>
      <br>
      <div class="box-btn">
        <div>
          <el-button @click="cancel">
            <strong>取消收藏</strong>
          </el-button>
          <el-button>
            <strong @click="buy">购买</strong>
          </el-button>
        </div>
      </div>
      <br>
      <br>
      <div class="book-detail">
        <div class="s-label">详情：</div>
        <div class="s-value-h4">{{detail}}</div>
      </div>
    </div>
  </el-container>
</template>

<script>
import defaul_book from "../../../public/default_book.jpeg";

export default {
  name: "BookStoreDetail",
  data: () => ({
    bookid: "12345",
    name: "This is Book Name",
    price: 0,
    isbn: "无",
    number: 1,
    picture: defaul_book,
    bookclass: "计算机",
    author: "无",
    detail: "无"
  }),
  methods: {
    cancel(){
      alert("取消收藏书接口");
    },
    buy(){
      alert("买书接口");
    }
  },
  beforeCreate() {
    this.bookid = this.$route.params.id;
    console.log(this.bookid);
  }
};
</script>

<style scoped>
.book-container {
  margin: 60px 40px;
}
.box-btn{
  padding-left: 50px;
}
.box-middle {
  margin-top: 30px;
  margin-left: 40px;
 
}
.book-author,
.book-other,
.book-price {
  margin-top: 12px;
}
.book-detail {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #909199;
}
.img-box {
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  border: 1px solid #909199;
}

.s-label {
  font-size: 16px;
  color: #999;
}
.s-value-h1 {
  font-size: 25px;
}
.s-value-h2 {
  font-size: 20px;
}
.s-value-h3 {
  font-size: 18px;
}
.price {
  color: red;
}
</style>
