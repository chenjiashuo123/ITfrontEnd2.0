<template>
  <div>
    <div v-if="isNone">
      <div style="min-height:500px;width:100%;">
        <div style="margin:100px auto;text-align:center;font-size: 32px;">无收藏记录</div>
      </div>
    </div>
    <div v-else class="all-book">
      <div class="book-container">
        <el-col :span="6" v-for="(item, index) in orderList" :key="index">
          <div class="each-book">
            <div class="img-container" @click="showDetail(item)">
              <img :src="getpic(item.picture)" width="180px">
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
  </div>
</template>

<script>
import DefImg from "../../../public/timg.jpeg";
export default {
  name: "BookStore",
  data: () => ({
    orderList: [],
    isNone: true
  }),
  methods: {
    showDetail(item) {
      this.$router.push({
        name: "bookstoredetail",
        params: {
          book: item
        }
      });
    },
    getpic(pic) {
      if (pic.length > 0) {
        return "/show/" + pic;
      }
      return DefImg;
    }
  },
  beforeMount() {
    this.axios.get("/api/getcollect").then(res => {
      if (res.data["state"] == 0) {
        this.orderList = res.data["booklist"];
        if (this.orderList.length > 0) {
          this.isNone = false;
        }
      } else if (res.data["state"] != 400) {
        this.$message.error("获取数据错误，错误码：" + res.data["state"]);
      }
    });
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
