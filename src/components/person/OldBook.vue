<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in orderList" :key="index">
      <div class="order-title-box">
        <span>{{item.time}}</span>
      </div>
      <div class="order-pic-box">
        <div class="book-pic">
          <img src="../../assets/book.png" alt width="200px">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item.bookName}}</div>
          <div class="book-state">{{item.state}}</div>
          <div class="order-price">
            <strong>￥{{item.price}}</strong>
          </div>
        </div>
        <div class="order-btn-box">
          <div>
            <el-button @click="modifyBook(item)">
              <strong>修改信息</strong>
            </el-button>
          </div>
          <br>
          <br>
          <div>
            <el-button @click="downBook(item)">
              <strong>下架书籍</strong>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyBook",
  data() {
    return {
      detailDialogVisible: false,
      orderList: [
        {
          bookID: "1",
          picture: "",
          bookName: "数学分析",
          price: 30,
          state: "待审核",
          time: "2018/10/20"
        },
        {
           bookID: "2",
          picture: "",
          bookName: "线性代数",
          price: 30,
          state: "待审核",
          time: "2018/10/21"
        },
        {
           bookID: "3",
          picture: "",
          bookName: "大学英语",
          price: 40,
          state: "待审核",
          time: "2018/10/22"
        },
        {
           bookID: "4",
          picture: "",
          bookName: "大学英语",
          price: 40,
          state: "待审核",
          time: "2018/10/22"
        },
        {
           bookID: "5",
          picture: "",
          bookName: "大学英语",
          price: 40,
          state: "已审核",
          time: "2018/10/22"
        }
      ]
    };
  },
  methods: {
    downBook(item) {
      alert("这是下架书籍接口");
    },
    modifyBook(item) {
      this.$router.push({
        name: "modifybook",
        params: {
          id: item.ISBN
        }
      });
    }
  }
};
</script>

<style  scoped>
.each-box {
  min-width: 750px;
  width: 90%;
  margin: 20px auto 40px auto;
  border: 1px solid #909199;
}

.order-btn-box-unfinish {
  height: 150px;
  padding-top: 100px;
  padding-right: 50px;
  float: right;
}

.order-title-box {
  text-align: left;
  font-size: 18px;
  border-bottom: 1px solid #909199;
  background-color: #909199;
}

.order-pic-box {
  margin-left: 20px;
  height: 240px;
}
.book-pic {
  margin-top: 20px;
  width: 200px;
  height: 200px;
  float: left;
  border: 1px solid #999;
  display: flex;
  align-items: center;
}

.book-name {
  margin: 20px 0 0 0;
  text-align: left;
  font-size: 30px;
  height: 80px;
  width: 400px;
  word-wrap: break-word;
  overflow: hidden;
}
.book-state {
  text-align: left;
  font-size: 25px;
  height: 70px;
  width: 400px;

  word-wrap: break-word;
  overflow: hidden;
}

.order-price {
  margin-top: 20px;
  text-align: left;
  font-size: 25px;
  height: 40px;
}

.order-pic-desc {
  float: left;
}
.order-btn-box {
  height: 150px;
  padding-top: 60px;
  padding-right: 50px;
  float: right;
}
.time {
  display: block;
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.content {
  float: left;
  width: 50%;
  font-size: 16px;
}

.sure {
  margin-left: 15%;
}

.showBlock {
  margin: 10px;
}
</style>

