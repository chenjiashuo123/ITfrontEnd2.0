<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in orderList" :key="index">
      <div class="order-title-box">
        &emsp;&emsp;
        <span>{{item.time}}</span>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <span style="font-size: 14px;color:#777;">订单号：</span>
        <span style="font-size:18px;">{{item.orderid}}</span>
      </div>
      <div class="order-pic-box" @click="showDetail(item)">
        <div class="book-pic">
          <img :src="getpic(item.picture)" alt width="160px" style="max-height:160px;">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item.name}}</div>
          <div class="book-author">
            作者：
            <span style="font-size: 16px;">{{item.author}}</span>
          </div>
          <div class="order-price">
            ￥
            <strong style="font-size:30px;">{{item.total}}</strong>
          </div>
        </div>
        <div class="order-btn-box" v-if="!isFinish(item)">
          <el-button type="success" plain @click="finishOrder(item.orderid)">完成订单</el-button>
          <div style="margin-top: 30px;">
            <el-button type="danger" plain @click="cancelOrder(item.orderid)">取消订单</el-button>
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
import Img from "../../../public/timg.jpeg";
export default {
  name: "SaleBook",
  data() {
    return {
      buyerornot: "False",
      orderList: []
    };
  },
  methods: {
    showDetail(item) {
      this.$router.push({
        name: "orderdetail",
        params: {
          book: item,
          buyerornot: "False"
        }
      });
    },
    isFinish(item) {
      if (item.state === "完成" || item.state === "已取消") return true;
      else return false;
    },
    finishOrder(orderid) {
      this.axios
        .post("/api/changestate", {
          oderid: orderid,
          orderstate: "完成"
        })
        .then(res => {
          if (res.data["state"] == 0) {
            //完成订单成功
            this.$message.success("已成功");
          } else {
            this.$message.error(
              "完成订单失败，错误码：" + res.data["state"]
            );
          }
        })
        .catch(err => {
          this.$message.error("请先连接网路");
        });
    },
    cancelOrder(orderid) {
      this.axios
        .post("/api/changestate", {
          oderid: orderid,
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
      return Img;
    }
  },
  beforeCreate() {
    //获得订单
    this.axios
      .post("/api/orders", {
        test: "False"
      })
      .then(res => {
        if (res.data["state"] == 0) {
          //获得成功
          this.orderList = res.data["orderlist"];
        } else {
          this.$message.error("获得失败，错误码：" + res.data["state"]);
        }
      })
      .catch(err => {
        this.$message.error("请先连接网路");
      });
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

