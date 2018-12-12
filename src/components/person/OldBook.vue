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
    <el-dialog title="书籍详情" :visible.sync="detailDialogVisible" width="30%" center>
      <div class="showInfo">
        <el-row>
          <el-col>
            <div id="picture" class="information">
              <img src="../../assets/book.png" class="detailImage">
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
            <div id="ISBN" class="information">
              <div class="content">ISBN：</div>
              <div class="content">{{showItem.ISBN}}</div>
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
            <div id="price" class="information">
              <div class="content">单价：</div>
              <div class="content">{{showItem.price}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
       <el-row>
          <el-col>
            <div id="state" class="information">
              <div class="content">状态：</div>
              <div class="content">{{showItem.state}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="time" class="information">
              <div class="content">发布时间：</div>
              <div class="content">{{showItem.time}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        
        <el-row>
          <el-col>
            <div id="detail" class="information">
              <div class="content">详情：</div>
              <div class="content">{{showItem.detail}}</div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <el-button type="primary" class="sure" @click="modify" style="width:32%">修 改</el-button>
            <el-button type="primary" class="cancel" @click="cancel" style="width:32%">下 架</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="书籍详情" :visible.sync="modifyDialogVisible" width="30%" center>
      <div class="showInfo">
        <el-row>
          <el-col>
            <div id="picture" class="information">
              <img src="../../assets/book.png" class="modifyImage">
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="name" class="information-modify">
              <div class="content-modify">书名：</div>
              <div class="content-modify">
                <el-input v-model="showItem.bookName"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="ISBN" class="information-modify">
              <div class="content-modify">ISBN：</div>
              <div class="content-modify">
                <el-input v-model="showItem.ISBN"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="author" class="information-modify">
              <div class="content-modify">作者：</div>
              <div class="content-modify">
                <el-input v-model="showItem.author"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="price" class="information-modify">
              <div class="content-modify">单价：</div>
              <div class="content-modify">
                <el-input v-model="showItem.price"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="state" class="information-modify">
              <div class="content-modify">状态：</div>
              <div class="content-modify">
                <el-input v-model="showItem.state" disabled="true"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="time" class="information-modify">
              <div class="content-modify">发布时间：</div>
              <div class="content-modify">
                <el-input v-model="showItem.time" disabled="true"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <div id="detail" class="information-modify">
              <div class="content-modify">详情：</div>
              <div class="content-modify">
                <el-input v-model="showItem.detail"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col>
            <el-button type="primary" class="modifySure" @click="modifySure" style="width:32%">确 定</el-button>
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
        state: "",
        picture: "",
        detail: ""
      },
      orderList: [
        {
          bookName: "数学分析",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/21",
          price: 30,
          state: "待售",
          picture: "../../assets/book.png",
          detail: "..."
        },
        {
          bookName: "线性代数",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/20",
          price: 30,
          state: "已完成",
          picture: "../../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/22",
          price: 40,
          state: "未完成",
          picture: "../../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/22",
          price: 40,
          state: "未完成",
          picture: "../../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/22",
          price: 40,
          state: "未完成",
          picture: "../../assets/book.png",
          detail: "..."
        },
        {
          bookName: "大学英语",
          ISBN: "12345678",
          author: "123",
          time: "2018/10/22",
          price: 40,
          state: "未完成",
          picture: "../../assets/book.png",
          detail: "..."
        }
      ]
    };
  },
  methods: {
    showDetail(item) {
      this.showItem.bookName = item.bookName;
      this.showItem.ISBN = item.ISBN;
      this.showItem.author = item.author;
      this.showItem.time = item.time;
      this.showItem.price = item.price;
      this.showItem.state = item.state;
      this.showItem.time = item.time;
      this.showItem.detail = item.detail;
      this.detailDialogVisible = true;
    },
    cancel() {
      //取消订单
      this.detailDialogVisible = false;
    },
    modify() {
      this.detailDialogVisible = false;
      this.modifyDialogVisible = true;
    },
    modifySure() {
      this.modifyDialogVisible = false;
      alert("修改成功");
    }

    // getNowFormatDate() {
    //   date = new Date();
    //   seperator1 = "-";
    //   year = date.getFullYear();
    //   month = date.getMonth() + 1;
    //   strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   this.currentdate = year + seperator1 + month + seperator1 + strDate;
    // }
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

.modifySure {
  margin-left: 35%;
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

.information {
  margin: 0 auto;
}

.information-modify {
  margin: 0 auto;
}

.content-modify {
  float: left;
  width: 50%;
  font-size: 16px;
  margin: 0 auto;
}
</style>

