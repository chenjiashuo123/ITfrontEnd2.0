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
          <div class="book-name">{{item.name}}</div>
          <div class="book-state">
            <span style="font-size: 16px;">{{item.state}}</span>
          </div>
          <div class="order-price">
            ￥
            <strong style="font-size:30px;">{{item.price}}</strong>
          </div>
        </div>
        <div class="order-btn-box">
          <el-button type="primary" plain @click="modifyBook(item)" :disabled="isBuy(item)">修改信息</el-button>
          <div style="margin-top: 30px;">
            <el-button type="danger" plain @click="downBook(item)" :disabled="isBuy(item)">下架书籍</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OldBook",
  data() {
    return {
      bookList: []
    };
  },
  beforeCreate() {
    //获得已发布书籍
    this.axios.post("/api/usercheckpublish").then(res => {
      if (res.data["state"] == 0) {
        this.bookList = res.data["bookinfo"];
        console.log("gggggg");
      } else {
        console.log("get publish-book error: " + res.data["state"]);
      }
    });
  },
  methods: {
    isBuy(item) {
      if (this.bookList.state === "已售") return true;
      else return false;
    },
    getpic(img) {
      return "/show/" + img;
    },
    downBook(item) {
      alert("这是下架书籍接口");
    },
    modifyBook(item) {
      console.log(item);
      this.$router.push({
        name: "modifybook",
        params: {
          book: item
        }
      });
    },
    getpic(img) {
      return "/show/" + img;
    }
  }
};
</script>

<style scoped>
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
  padding-top: 10px;
  padding-bottom: 7px;
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
.book-state {
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
  margin-top: 34px;
  margin-right: 50px;
  float: right;
}
</style>

