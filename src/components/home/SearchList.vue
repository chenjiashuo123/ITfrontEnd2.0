<template>
  <el-container class="book-container">
    <div>
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
  </el-container>
</template>

<script>
export default {
  name: "SearchList",
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
      }
    ]
  })
};
</script>

<style scoped>
.book-container {
  width: 98%;
  margin: 40px auto;
}

.each-book {
  width: 180px;
  margin-left: 35px;
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
</style>
