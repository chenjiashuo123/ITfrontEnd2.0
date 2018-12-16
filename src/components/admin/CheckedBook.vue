<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in bookList" :key="index">
      <div class="order-title-box">
        &emsp;&emsp;
        <span>{{item.time}}</span>
      </div>
      <div class="order-pic-box">
        <div class="book-pic">
          <img :src="getpic(item.picture)" alt width="160px">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item. name}}</div>
          <div class="book-author">
            作者：
            <span style="font-size: 16px;">{{item.author}}</span>
          </div>
          <div class="order-price">
            ￥
            <strong style="font-size:30px;">{{item.price}}</strong>
          </div>
        </div>
        <div class="order-btn-box">
          <el-button type="success" plain @click="downBook(item)">下 架</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckedBook",
  data() {
    return {
      bookList: []
    };
  },
  beforeCreate() {
    //获得待审核书籍
    this.axios.post("/api/reviewed").then(res => {
      if (res.data["state"] == 0) {
        this.bookList = res.data["booklist"];
        console.log("gggggg");
      } else {
        console.log("get user info error: " + res.data["state"]);
      }
    });
  },
  methods: {
    getpic(img) {
      return "/show/" + img;
    },
    downBook(item) {
      this.axios
        .post("/api/soldoutbook", {
          bookid: item.bookid,
        })
        .then(res => {
          if (res.data["state"] == 0) {
            this.$message.success("下架成功");
            this.GLOBAL.isLogin = true;
          } else if (res.data["state"] == 101) {
            this.$message.success("下架失败");
            console.log("downBook", res.data["state"]);
          } 
        })
        .catch(err => {
          this.$message.error("请先连接网络");
        });
    }
  }
};
</script>

<style  scoped>
.each-box {
  min-width: 750px;
  width: 90%;
  height: 220px;
  border-radius: 20px;
  margin: 20px auto 40px auto;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 1px 1px 1px 0.5px #eee;
}

.order-btn-box-unfinish {
  margin-top: 70px;
  padding-right: 58px;
  float: right;
}

.order-title-box {
  text-align: left;
  padding-top: 8px;
  padding-bottom: 6px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #dedede;
}

.order-pic-box {
  margin-left: 20px;
}
.book-pic {
  width: 160px;
  height: 160px;
  float: left;
  margin-top: 10px;
  padding: 1px;
  border: 0.5px solid rgba(200, 200, 200, 0.5);
  display: flex;
  align-items: center;
}
.order-pic-desc {
  float: left;
  margin-left: 16px;
  margin-top: 10px;
  padding-right: 20px;
  border-right: 1px solid #909199;
}
.book-name {
  height: 72px;
  width: 400px;
  font-size: 22px;
  word-wrap: break-word;
  overflow: hidden;
}
.book-author {
  width: 360px;
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
  color: #888;
}

.order-price {
  margin-top: 25px;
  color: red;
  font-size: 20px;
}

.order-btn-box {
  margin-top: 70px;
  margin-right: 50px;
  float: right;
}
</style>

