<template>
  <el-container class="book-container">
    <div class="box-left">
      <div class="img-box">
        <img :src="picture" alt width="350px" style="margin-left:5px;">
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
      <br>
      <br>
      <div class="box-btn">
        <div>
          <el-button @click="store">
            <strong>收藏</strong>
          </el-button>
          <el-button>
            <strong @click="buy">购买</strong>
          </el-button>
        </div>
      </div>
      <br>
      <br>
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
        <span class="dlg_val">{{dlg_total}}1</span>
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
    dialogVisible: false
  }),
  methods: {
    store() {
      this.axios
        .post("/api/collect", { bookid: this.bookid })
        .then(res => {
          if (res.data["state"] == 0) {
            this.$message.success("收藏成功");
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
    }
  },
  beforeMount() {
    var book = this.$route.params.book;
    this.bookid = book.bookid;
    this.name = book.name;
    this.price = book.price;
    this.isbn = book.isbn;
    this.number = book.number;
    this.bookclass = book.bookclass;
    this.author = book.author;
    this.detail = book.detail;
    if (book.picture.length > 0) {
      this.picture = "/show/" + book.picture;
    }
  }
};
</script>

<style scoped>
.book-container {
  margin: 60px 40px;
}
.box-btn {
  padding-left: 50px;
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

.dlg_title {
  font-size: 16px;
  color: #999;
}

.dlg_val {
  font-size: 25px;
  color: #909199;
}
</style>
