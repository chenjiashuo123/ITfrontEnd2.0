<template>
  <div class="main-container">
    <el-row>
      <el-col :span="8" v-for="(item, index) in orderList" :key="index">
        <div class="showBlock">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/book.png" class="image">
          <div style="padding: 14px;">
            <span>{{item.bookName}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.time }}</time>
              <el-button type="text" class="button" @click="showDetail(item)">查看详情</el-button>
            </div>
          </div>
        </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="订单详情" :visible.sync="detailDialogVisible" width="30%" center>
      <div class="showInfo">
        <el-row>
          <el-col>
            <div id="orderID" class="information">
              <div class="content">订单号：</div>
              <div class="content">{{showItem.orderID}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="bookName" class="information">
              <div class="content">书名：</div>
              <div class="content">{{showItem.bookName}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="author" class="information">
              <div class="content">作者：</div>
              <div class="content">{{showItem.author}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="time" class="information">
              <div class="content">创建时间：</div>
              <div class="content">{{showItem.time}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="price" class="information">
              <div class="content">订单总价：</div>
              <div class="content">{{showItem.price}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="state" class="information">
              <div class="content">订单状态：</div>
              <div class="content">{{showItem.state}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="salerPhone" class="information">
              <div class="content">买家联系方式：</div>
              <div class="content">{{showItem.sellerPhone}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <el-button type="primary" class="sure" @click="ensure" style="width:32%">完成订单</el-button>
            <el-button type="primary" class="cancel" @click="cancel" style="width:32%">取消订单</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SaleBook",
  data() {
    return {
      detailDialogVisible: false,
      showItem: {
        orderID: null,
        picture: "",
        bookName: "",
        author:"",
        price: null,
        state: "",
        time: "",
        sellerPhone: ""
      },
      orderList: [
        {
          orderID: 1,
          picture: "",
          bookName: "数学分析",
          author:"123",
          price: 30,
          state: "完成",
          time: "2018/10/20",
          sellerPhone: "15521134440"
        },
        {
          orderID: 2,
          picture: "",
          bookName: "线性代数",
           author:"123",
          price: 30,
          state: "未完成",
          time: "2018/10/21",
          sellerPhone: "15521134443"
        },
        {
          orderID: 3,
          picture: "",
          bookName: "大学英语",
           author:"123",
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
      this.showItem.orderID = item.orderID;
      this.showItem.bookName = item.bookName;
      this.showItem.author = item.author;
      this.showItem.price = item.price;
      this.showItem.state = item.state;
      this.showItem.time = item.time;
      this.showItem.sellerPhone = item.sellerPhone;
      this.detailDialogVisible = true;
    },
    ensure(){
        //完成订单
        this.detailDialogVisible = false;
    },
    cancel(){
        //取消订单
        this.detailDialogVisible = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
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
  display: block;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: '';
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

.main-container {
  margin-left : 150px
}
</style>

