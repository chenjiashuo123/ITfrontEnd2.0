<template>
  <div class="all-book">
    <div class="book-container">
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
  </div>
</template>

<script>
export default {
  name: "BookStore",
  data: () => ({
    orderList: [
      {
        bookName: "数学分析",
        author: "123",
        ISBN: "12345678",
        time: "2018/10/21",
        price: 30,
        state: "待售",
        picture: "../../assets/book.png",
        detail: "..."
      },
      {
        bookName: "线性代数",
        author: "123",
        ISBN: "12345678",
        time: "2018/10/20",
        price: 30,
        state: "未完成",
        picture: "../../assets/book.png",
        detail: "..."
      },
      {
        bookName: "大学英语",
        author: "123",
        ISBN: "12345678",
        time: "2018/10/22",
        price: 40,
        state: "完成",
        picture: "../../assets/book.png",
        detail: "..."
      },
      {
        bookName: "大学英语",
        author: "123",
        ISBN: "12345678",
        time: "2018/10/22",
        price: 40,
        state: "完成",
        picture: "../../assets/book.png",
        detail: "..."
      },
      {
        bookName: "大学英语",
        author: "123",
        ISBN: "12345678",
        time: "2018/10/22",
        price: 40,
        state: "完成",
        picture: "../../assets/book.png",
        detail: "..."
      }
    ]
  }),
  methods:{
     showDetail(item) {
      this.$router.push({
        name: "bookstoredetail",
        params: {
          id: item.ISBN
        }
      });
    }
  }
};
</script>

<style scoped>
.home-main {
  width: 80%;
  margin-top: 40px;
  text-align: center;
}

.side-bar {
  width: 240px;
  height: 100%;
}

.all-book {
  width: 100%;
}

.book-container {
  width: 90%;
  margin: 10px auto;
}

.each-book {
  width: 180px;
  margin-bottom: 48px;
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
</style>
