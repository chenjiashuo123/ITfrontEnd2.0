<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in orderList" :key="index">
      <div class="order-title-box">
        &emsp;&emsp;
        <span>{{item.time}}</span>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <span style="font-size: 14px;color:#777;">订单号：
        </span>
          <span style="font-size:18px;">{{item.orderID}}</span>
      </div>
      <div class="order-pic-box">
        <div class="book-pic">
          <img src="../../assets/book.png" alt width="160px" @click="showDetail(item)">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item.bookName}}</div>
          <div class="book-author">
            作者：
            <span style="font-size: 16px;">{{item.author}}</span>
          </div>
          <div class="order-price">￥
            <strong style="font-size:30px;">{{item.price}}</strong>
          </div>
        </div>
        <div class="order-btn-box" v-if="!isFinish(item)">
          <el-button type="success" plain>完成订单</el-button>
          <div style="margin-top: 30px;">
            <el-button type="danger" plain>取消订单</el-button>
          </div>
        </div>
        <div class="order-btn-box-unfinish" v-if="isFinish(item)">
          <el-button disabled>已完成</el-button>
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
          bookName:
            "数学分析少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所",
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
  margin-top: 34px;
  margin-right: 50px;
  float: right;
}
</style>

