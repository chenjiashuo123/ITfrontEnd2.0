<template>
  <el-container class="book-container">
    <div class="box-left">
      <div class="img-box">
        <img :src="picture" alt width="350px" style="margin-left:5px;">
      </div>
    </div>
    <div class="box-middle">
      <div class="book-name">
        <span class="s-label">订单号：</span>
        <span class="s-value-h3">{{orderID}}</span>
      </div>
      <div class="book-price">
        <span class="s-label">书名：</span>
        <span class="s-value-h3">{{bookName}}</span>
      </div>

      <div class="book-author">
        <span class="s-label">作者：</span>
        <span class="s-value-h3">{{author}}</span>
      </div>

      <div class="book-other">
        <span class="s-label">创建时间：</span>
        <span class="s-value-h3">{{time}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">订单总价：</span>
        <span class="s-value-h3 price">￥{{totalPrice}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">订单状态：</span>
        <span class="s-value-h4">{{orderState}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">{{isBuyer? '卖家联系方式：':'买家联系方式：'}}</span>
        <span class="s-value-h4">{{sellerPhone}}</span>
      </div>
      <br>
      <br>
      <div class="box-btn">
        <div class="finishOrder" v-if="isFnish">
          <el-button>
            <strong @click="finishOrder">完成订单</strong>
          </el-button>
          <el-button>
            <strong @click="cancelOrder">取消订单</strong>
          </el-button>
          <el-button @click="backHome">
            <strong>返回</strong>
          </el-button>
        </div>
        <div class="unfinishOrder" v-if="!isFnish">
          <el-button @click="backHome">
            <strong>返回</strong>
          </el-button>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import defaul_book from "../../../public/default_book.jpeg";

export default {
  name: "OrderDetail",
  data: () => ({
    isBuyer: true,
    orderID: "12345",
    bookName: "This is Book Name",
    author: "chen",
    time: "2018/10/20",
    picture: defaul_book,
    totalPrice: 30,
    orderState: "未完成",
    buyerPhone: "15521134441",
    sellerPhone: "15521134440"
  }),
  methods: {
    isFnish() {
      if (this.orderState === "完成") return true;
      else return false;
    },
    backHome() {
      this.$router.push("/buybook");
    },
    finishOrder() {
      alert("完成订单接口");
    },
    cancelOrder() {
      alert("取消订单接口");
    }
  }
};
</script>

<style scoped>
.book-container {
  margin: 60px 40px;
}
.box-btn {
  padding-left: 0px;
}
.unfinishOrder {
  padding-left: 70px;
}
.box-middle {
  margin-top: 30px;
  margin-left: 40px;
}
.book-author,
.book-other,
.book-price {
  margin-top: 12px;
}
.book-detail {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #909199;
}
.img-box {
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  border: 1px solid #909199;
}

.s-label {
  font-size: 16px;
  color: #999;
}
.s-value-h1 {
  font-size: 25px;
}
.s-value-h2 {
  font-size: 20px;
}
.s-value-h3 {
  font-size: 18px;
}
.price {
  color: red;
}
</style>
