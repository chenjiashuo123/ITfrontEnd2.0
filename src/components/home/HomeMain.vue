<template>
  <el-container class="home-main">
    <div class="side-bar">
      <el-menu
        default-active="推荐"
        class="el-menu-demo"
        mode="vertical"
        @select="handleSelect"
        background-color="#909399"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="推荐">推荐</el-menu-item>
        <el-menu-item index="计算机">计算机</el-menu-item>
        <el-menu-item index="工程科学">工程科学</el-menu-item>
        <el-menu-item index="经济管理">经济管理</el-menu-item>
        <el-menu-item index="自然科学">自然科学</el-menu-item>
        <el-menu-item index="英语">英语</el-menu-item>
        <el-menu-item index="数学">数学</el-menu-item>
        <el-menu-item index="文学艺术">文学艺术</el-menu-item>
        <el-menu-item index="政治法律">政治法律</el-menu-item>
        <el-menu-item index="其他">其他</el-menu-item>
      </el-menu>
    </div>
    <div class="all-book">
      <div class="book-container">
        <el-col :span="6" v-for="(item, index) in orderList" :key="index">
          <div class="each-book">
            <div class="img-container" @click="showDetail(item)">
              <img src="../../../public/timg.jpeg" width="180px">
            </div>
            <div class="book-info">
              <div class="book-name" @click="showDetail(item)">{{item.name}}</div>
              <time class="time">{{ item.author }}</time>
              <div class="book-price">￥{{item.price}}</div>
            </div>
          </div>
        </el-col>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "HomeMain",
  data: () => ({
    orderList: [
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
  }),
  beforeMount() {
    this.ask_data("推荐");
  },
  methods: {
    ask_data(bookclass) {
      this.axios
        .post("/api/bookclass", {
          bookclass: bookclass
        })
        .then(res => {
          if (res.data["state"] == 0) {
            console.log(res.data["booklist"]);
            this.orderList = res.data["booklist"];
          } else {
            this.$message.error("获取信息失败，错误码：" + res.data["state"]);
          }
        });
    },
    handleSelect(key, keyPath) {
      this.ask_data(key);
      console.log(key, keyPath);
    },
    showDetail(item) {
      this.$router.push({
        name: "bookdetail",
        params: {
          book: item
        }
      });
    }
  }
};
</script>

<style scoped>
.home-main {
  width: 100%;
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
  height: 48px;
  font-size: 20px;
  word-wrap: break-word;
  overflow: hidden;
}

.time {
  display: block;
  font-size: 15px;
  color: #999;
}

.book-price {
  font-size: 28px;
  color: red;
}
</style>
