<template>
  <el-container class="home-main">
    <div class="side-bar">
      <el-menu
        default-active="0"
        class="el-menu-demo"
        mode="vertical"
        @select="handleSelect"
        background-color="#909399"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="0">推荐</el-menu-item>
        <el-menu-item index="1">计算机</el-menu-item>
        <el-menu-item index="2">工程科学</el-menu-item>
        <el-menu-item index="3">经济管理</el-menu-item>
        <el-menu-item index="4">自然科学</el-menu-item>
        <el-menu-item index="5">英语</el-menu-item>
        <el-menu-item index="6">数学</el-menu-item>
        <el-menu-item index="7">文学艺术</el-menu-item>
        <el-menu-item index="8">政治法律</el-menu-item>
        <el-menu-item index="9">其他</el-menu-item>
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
              <div class="book-name" @click="showDetail(item)">{{item.bookName}}</div>
              <time class="time">{{ item.time }}</time>
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
      }
    ]
  }),
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case 0: //推荐
          this.$router.push("/homebody");
          break;
        case 1: //计算机
          this.$router.push("/homebody");
          break;
        case 2: //工程科学
          this.$router.push("/homebody");
          break;
        case 3: //经济管理
          this.$router.push("/homebody");
          break;
        case 4: //自然科学
          this.$router.push("/homebody");
          break;
        case 5: //英语
          this.$router.push("/homebody");
          break;
        case 6: //数学
          this.$router.push("/homebody");
          break;
        case 7: //文学艺术
          this.$router.push("/homebody");
          break;
        case 8: //政治法律
          this.$router.push("/homebody");
          break;
        case 9:
          this.$router.push("/homebody");
          break;
        default:
          break;
      }
      console.log(key, keyPath);
    },
    showDetail(item) {
      this.$router.push({
        name: "bookdetail",
        params: {
          id: item.ISBN
        }
      });
    }
  }
};
</script>

<style scope>
.home-main {
  width: 100%;
  margin-top: 40px;
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
