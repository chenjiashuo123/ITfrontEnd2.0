<template>
  <el-container class="book-container">
    <div class="box-left">
      <div class="img-box">
        <img
          :src="getpic(orders.picture)"
          alt
          width="350px"
          style="margin-left:5px;max-height:350px;"
        >
      </div>
    </div>
    <div class="box-middle">
      <div class="book-name">
        <span class="s-label">订单号：</span>
        <span class="s-value-h3">{{orders.orderid}}</span>
      </div>
      <div class="book-price">
        <span class="s-label">书&emsp;名：</span>
        <span class="s-value-h3">{{orders.name}}</span>
      </div>

      <div class="book-author">
        <span class="s-label">作&emsp;者：</span>
        <span class="s-value-h3">{{orders.author}}</span>
      </div>

      <div class="book-other">
        <span class="s-label">创建时间：</span>
        <span class="s-value-h3">{{orders.time}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">订单总价：</span>
        <span class="s-value-h3 price">￥{{orders.total}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">订单状态：</span>
        <span class="s-value-h4">{{orders.state}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">{{isBuyer? '卖家联系方式：':'买家联系方式：'}}</span>
        <span class="s-value-h4">{{orders.phone}}</span>
      </div>
      <br>
      <br>
      <div class="box-btn">
        <div class="finishOrder" v-if="isFnish">
          <el-button @click="finishOrder()">完成订单</el-button>
          <el-button @click="cancelOrder()" style="margin-left: 30px;">取消订单</el-button>
          <!-- <el-button @click="backHome">
            <strong>返回</strong>
          </el-button>-->
        </div>
        <!-- <div class="unfinishOrder" v-if="!isFnish">
          <el-button @click="backHome">
            <strong>返回</strong>
          </el-button>
        </div>-->
      </div>
    </div>
  </el-container>
</template>

<script>
import defaul_book from "../../../public/default_book.jpeg";

export default {
  name: "OrderDetail",
  data: () => ({
    isBuyer: null,
    orders: {
      orderid: "",
      name: "",
      author: "",
      time: "",
      picture: "",
      total: "",
      state: "",
      phone: ""
    }
  }),
  methods: {
    isFnish(item) {
      if (item.state === "已完成" || item.state === "已取消") return true;
      else return false;
    },
    backHome() {
      if (buyerornot === "True") this.$router.push("/buybook");
      else this.$router.push("/salebook");
    },
    finishOrder() {
      this.axios
        .post("/api/changestate", {
          oderid: this.orderid,
          orderstate: "已完成"
        })
        .then(res => {
          if (res.data["state"] == 0) {
            //完成订单成功
            this.$message.success("完成订单成功");
          } else {
            this.$message.error(
              "完成订单成功失败，错误码：" + res.data["state"]
            );
          }
        })
        .catch(err => {
          this.$message.error("请先连接网路");
        });
    },
    cancelOrder() {
      this.axios
        .post("/api/changestate", {
          oderid: this.orderid,
          orderstate: "已取消"
        })
        .then(res => {
          if (res.data["state"] == 0) {
            //完成订单成功
            this.$message.success("取消订单成功");
          } else {
            this.$message.error("取消订单失败，错误码：" + res.data["state"]);
          }
        })
        .catch(err => {
          this.$message.error("请先连接网路");
        });
    },
    getpic(pic) {
      if (pic.length > 0) {
        return "/show/" + pic;
      }
      return defaul_book;
    }
  },
  beforeMount() {
    var book = this.$route.params.book;
    var buyerornot = this.$route.params.buyerornot;
    if (buyerornot === "True") this.isBuyer = true;
    else this.isBuyer = false;
    console.log(book);
    console.log(buyerornot);
    console.log("234");
    this.orders.orderid = book.orderid;
    this.orders.name = book.name;
    this.orders.author = book.author;
    this.orders.time = book.time;
    this.orders.picture = book.picture;
    this.orders.total = book.total;
    this.orders.state = book.state;
    //this.orders.phone = book.phone;

    this.axios
      .post("/api/orderdetail", {
        orderid: book.orderid,
        buyerornot: buyerornot
      })
      .then(res => {
        if (res.data["state"] == 0) {
          this.orders.phone = res.data["userphone"];
        } else {
          this.orders.phone = "NULL";
        }
      });
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
