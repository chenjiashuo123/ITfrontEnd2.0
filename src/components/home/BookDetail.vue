<template>
  <el-container class="book-container">
    <div class="box-left">
      <div class="img-box">
        <img :src="getpic(picture)" alt width="350px" style="margin-left:5px;max-height:350px;">
      </div>
    </div>
    <div class="box-middle">
      <div class="book-name">
        <span class="s-label">书名：</span>
        <span class="s-value-h1">{{name}}</span>
      </div>
      <div class="book-price">
        <span class="s-label">价格：</span>
        <span class="s-value-h1 price">￥{{price}}</span>
      </div>

      <div class="book-author">
        <span class="s-label">作者：</span>
        <span class="s-value-h2">{{author}}</span>
      </div>

      <div class="book-other">
        <span class="s-label">数量：</span>
        <span class="s-value-h3">{{number}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">分类：</span>
        <span class="s-value-h3">{{bookclass}}</span>
      </div>
      <div class="book-other">
        <span class="s-label">ISBN：</span>
        <span class="s-value-h4">{{isbn}}</span>
      </div>
      <div class="box-btn">
        <el-button @click="store">收藏</el-button>
        <el-button
          @click="buy"
          style="margin-left: 30px;"
          :disabled="isSaled"
        >{{isSaled?'已售罄':'购买'}}</el-button>
      </div>
      <div class="book-detail">
        <div class="s-label">详情：</div>
        <div class="s-value-h4">{{detail}}</div>
      </div>
    </div>

    <el-dialog title="购买成功" :visible.sync="dialogVisible" width="30%">
      <div style="height: 45px;">
        <span class="dlg_title">订 单 号：</span>
        <span class="dlg_val">{{dlg_orderid}}</span>
      </div>
      <div style="height: 36px;">
        <span class="dlg_title">订单总价：</span>
        <span class="dlg_val price">{{dlg_total}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import defaul_book from "../../../public/default_book.jpeg";

export default {
  name: "BookDetail",
  data: () => ({
    bookid: "12345",
    name: "This is Book Name",
    price: 0,
    isbn: "无",
    number: 1,
    picture: defaul_book,
    bookclass: "计算机",
    author: "无",
    detail: "无",
    dlg_total: "",
    dlg_orderid: "",
    dialogVisible: false,
    isSaled: false
  }),
  methods: {
    store() {
      this.axios
        .post("/api/collect", { bookid: this.bookid })
        .then(res => {
          if (res.data["state"] == 0) {
            this.$message.success("收藏成功");
          } else if (res.data["state"] == 100) {
            this.$message.warning("该书已存在于收藏夹");
          } else {
            this.$message.error("收藏失败，错误码：" + res.data["state"]);
          }
        })
        .catch(() => {
          this.$message.error("请连接网络");
        });
    },
    buy() {
      this.axios
        .post("/api/addorder", { bookid: this.bookid })
        .then(res => {
          if (res.data["state"] == 0) {
            this.dialogVisible = true;
            this.dlg_orderid = res.data["orderid"];
            this.dlg_total = res.data["price"];
          } else {
            this.$message.error("购买失败，错误码：" + res.data["state"]);
          }
        })
        .catch(err => {
          this.$message.error("请连接网络");
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
    console.log();
    this.bookid = book.bookid;
    this.name = book.name;
    this.price = book.price;
    this.isbn = book.ISBN;
    this.number = book.number;
    this.bookclass = book.class;
    this.author = book.author;
    this.detail = book.detail;

    this.picture = book.picture;

    if (book.state != "待售") {
      this.isSaled = true;
    }
  }
};
</script>

<style scoped>
.book-container {
  margin: 60px 40px;
}
.box-btn {
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
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
  margin-top: 40px;
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

.dlg_title {
  font-size: 16px;
  color: #999;
}

.dlg_val {
  font-size: 25px;
  color: #909199;
}
</style>
