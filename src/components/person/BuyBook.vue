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
      <div class="order-pic-box">
        <div class="book-pic">
          <img :src="getpic(item.picture)" alt width="160px" @click="showDetail(item)">
        </div>
        <div class="order-pic-desc">
          <div class="book-name">{{item.name}}炸</div>
          <div class="book-author">
            作者：
            <span style="font-size: 16px;">{{item.author}}</span>
          </div>
          <div class="order-price">
            ￥
            <strong style="font-size:30px;">{{item.total}}</strong>
          </div>
        </div>
        <div class="order-btn-box-unfinish" v-if="isFinish(item) || isfinish">
          <el-button disabled>已完成</el-button>
        </div>
        <div class="order-btn-box" v-else>
          <el-button type="success" plain @click="finishOrder(item.orderid)">完成订单</el-button>
          <div style="margin-top: 30px;">
            <el-button type="danger" plain>取消订单</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Img from "../../../public/timg.jpeg";

export default {
  name: "BuyBook",
  data() {
    return {
      detailDialogVisible: false,
      buyerornot: "True",
      orderList: [],
      isfinish: false
    };
  },
  methods: {
    showDetail(item) {
      this.$router.push({
        name: "orderdetail",
        params: {
          book: item,
          buyerornot: this.buyerornot
        }
      });
    },
    isFinish(item) {
      if (item.state === "完成" || (item.state === "已取消") return true;
      else return false;
    },
    getpic(pic) {
      if (pic.length > 0) {
        return "/show/" + pic;
      }
      return;
    },
    finishOrder(orderid) {
      this.axios
        .post("/api/changestate", {
          orderid: orderid,
          orderstate: "完成"
        })
        .then(res => {
          if (res.data["state"] == 0) {
            this.$message.success("已完成");
            this.isfinish = true;
          } else {
            this.$message.error("操作失败，错误码：" + res.data["state"]);
          }
        });
    }
  },
  beforeCreate() {
    //获得订单
    this.axios
      .post("/api/orders", {
        test: "True"
      })
      .then(res => {
        if (res.data["state"] == 0) {
          //获得成功
          this.orderList = res.data["orderlist"];
          this.$message.success("获得数据成功");
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
  margin-top: 5px;
  height: 68px;
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
  margin-top: 20px;
  color: red;
  font-size: 25px;
}

.order-btn-box {
  margin-top: 34px;
  margin-right: 50px;
  float: right;
}
</style>

