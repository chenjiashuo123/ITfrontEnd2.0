<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in orderList" :key="index">
      <div class="order-title-box">
        <span>{{item.time}}</span>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <span>{{item.orderID}}</span>
      </div>
      <div class="order-pic-box">
        <div class="book-pic">
          <img src="../../assets/book.png" alt width="200px" @click="showDetail(item)">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item.bookName}}</div>
          <div class="book-author">{{item.author}}</div>
          <div class="order-price">
            <strong>￥{{item.price}}</strong>
          </div>
        </div>
        <div class="order-btn-box" v-if="!isFinish(item)">
          <div>
            <el-button>
              <strong>完成订单</strong>
            </el-button>
          </div>
          <br>
          <br>
          <div>
            <el-button>
              <strong>取消订单</strong>
            </el-button>
          </div>
        </div>
        <div class="order-btn-box-unfinish" v-if="isFinish(item)">
          <div>
            <el-button disabled>
              <strong>已完成</strong>
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
          orderID: "123",
          picture: "",
          bookName: "数学分析",
          author: "123",
          price: 30,
          state: "完成",
          time: "2018/10/20",
          sellerPhone: "15521134440"
        },
        {
          orderID: "124",
          picture: "",
          bookName: "线性代数",
          author: "123",
          price: 30,
          state: "未完成",
          time: "2018/10/21",
          sellerPhone: "15521134443"
        },
        {
          orderID: "125",
          picture: "",
          bookName: "大学英语",
          author: "123",
          price: 40,
          state: "未完成",
          time: "2018/10/22",
          sellerPhone: "15521134444"
        },
        {
          orderID: "126",
          picture: "",
          bookName: "大学英语",
          author: "123",
          price: 40,
          state: "完成",
          time: "2018/10/22",
          sellerPhone: "15521134444"
        },
        {
          orderID: "127",
          picture: "",
          bookName: "大学英语",
          author: "123",
          price: 40,
          state: "完成",
          time: "2018/10/22",
          sellerPhone: "15521134444"
        }
      ]
    };
  },
  methods: {
    showDetail(item) {
      this.$router.push({
        name: "orderdetail",
        params: {
          id: item.ISBN
        }
      });
    },
    isFinish(item) {
      if (item.state === "完成") return true;
      else return false;
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
.book-author {
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

