<template>
  <div class="main-container">
    <el-row>
      <el-col :span="8" v-for="(item, index) in orderList" :key="index">
        <div class="showBlock">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/book.png" class="image">
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
    <el-dialog title="书籍详情" :visible.sync="detailDialogVisible" width="30%" center>
      <div class="showInfo">
        <el-row>
          <el-col>
            <div id="picture" class="information">
              <img src="../assets/book.png" class="detailImage">
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="name" class="information">
              <div class="content">书名：</div>
              <div class="content">{{showItem.bookName}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="name" class="information">
              <div class="content">作者：</div>
              <div class="content">{{showItem.author}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="time" class="information">
              <div class="content">ISBN：</div>
              <div class="content">{{showItem.ISBN}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="price" class="information">
              <div class="content">单价：</div>
              <div class="content">{{showItem.price}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="price" class="information">
              <div class="content">状态：</div>
              <div class="content">{{showItem.state}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="state" class="information">
              <div class="content">发布时间：</div>
              <div class="content">{{showItem.time}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="state" class="information">
              <div class="content">详情：</div>
              <div class="content">{{showItem.detail}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <el-button type="primary" class="sure" @click="buy" style="width:32%">购 买</el-button>
            <el-button type="primary" class="cancel" @click="deleteItems" style="width:32%">删 除</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "OldBook",
  data() {
    return {
      currentdate: "",
      modifyDialogVisible: false,
      detailDialogVisible: false,
      showItem: {
        bookName: "",
        author: "",
        ISBN: "",
        time: "",
        price: "",
        state: " ",
        picture: "",
        detail: ""
      },

      orderList: [
        {
          bookName: "数学分析",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/21",
          price: 30,
          state: "待售",
          picture: "../assets/book.png",
          detail: "..."
        },
        {
          bookName: "线性代数",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/20",
          price: 30,
          state: "未完成",
          picture: "../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/22",
          price: 40,
          state: "完成",
          picture: "../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/22",
          price: 40,
          state: "完成",
          picture: "../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/22",
          price: 40,
          state: "完成",
          picture: "../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          author: "123",
          ISBN: "12345678",
          time: "2018/10/22",
          price: 40,
          state: "完成",
          picture: "../assets/book.png",
          detail: "..."
        }
      ]
    };
  },
  methods: {
    showDetail(item) {
      this.showItem.bookName = item.bookName;
      this.showItem.author = item.author;
      this.showItem.ISBN = item.ISBN;
      this.showItem.time = item.time;
      this.showItem.price = item.price;
      this.showItem.time = item.time;
      this.showItem.state=item.state;
      this.showItem.detail = item.detail;
      this.detailDialogVisible = true;
    },
    buy() {
      //完成订单
      this.detailDialogVisible = false;
    },
    deleteItems() {
      //取消订单
      this.detailDialogVisible = false;
      alert("删除成功");
    }
  }
};
</script>

<style lang="stylus" scoped>
#picture {
  margin-left: 20%;
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
  margin: 0 auto;
}

.sure {
  margin-left: 15%;
}

.showBlock {
  margin: 10px;
}

.main-container {
  margin-left: 150px;
}
</style>

