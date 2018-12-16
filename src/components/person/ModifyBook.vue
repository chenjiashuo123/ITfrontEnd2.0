<template>
  <el-container class="container">
    <el-header class="sub-header">
      <div>
        <h2>修改信息</h2>
      </div>
    </el-header>

    <el-main class="sub-main">
      <el-form ref="form" :model="form" :rules="rules" label-width="90px" style="text-align:left;">
        <el-form-item label="书名" prop="name">
          <el-input class="inputBox" placeholder="请输入书籍名称" v-model="form.name" clearable></el-input>
        </el-form-item>

        <el-form-item label="价格" prop="price">
          <el-input class="inputBox" placeholder="请输入出售价格" v-model="form.price" clearable></el-input>
        </el-form-item>

        <el-form-item label="ISBN" prop="isbn">
          <el-input class="inputBox" placeholder="请输入书籍ISBN" v-model="form.isbn" clearable></el-input>
        </el-form-item>

        <el-form-item label="数量" prop="number">
          <el-input class="inputBox" placeholder="请输入书籍数量" v-model="form.number" clearable></el-input>
        </el-form-item>

        <el-form-item label="书籍作者" prop="author">
          <el-input class="inputBox" placeholder="请输入书籍作者" v-model="form.author" clearable></el-input>
        </el-form-item>

        <el-form-item label="书籍分类" prop="bookclass">
          <el-select v-model="form.bookclass" placeholder="请选择书籍分类">
            <el-option label="计算机" value="1"></el-option>
            <el-option label="工程科学" value="2"></el-option>
            <el-option label="经济管理" value="3"></el-option>
            <el-option label="自然科学" value="4"></el-option>
            <el-option label="英语" value="5"></el-option>
            <el-option label="数学" value="6"></el-option>
            <el-option label="文学艺术" value="7"></el-option>
            <el-option label="政治法律" value="8"></el-option>
            <el-option label="其他" value="9"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="书籍概述">
          <el-input
            class="textarea"
            type="textarea"
            resize="none"
            rows="6"
            placeholder="请输入书籍概述"
            v-model="form.detail"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-button type="warning" round id="submit-button" @click="modifyBook">确 定</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>



<script>
export default {
  name: "ModifyBook",
  data() {
    return {
      form: {
        name: "",
        price: "",
        isbn: "",
        number: "",
        author: "",
        bookclass: "",
        detail: ""
      },
      rules: {
        bookclass: [
          { required: true, message: "请输入书籍分类", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入你的姓名", trigger: "blur" }],
        number: [
          { required: true, message: "请输入书籍数量", trigger: "blur" }
        ],
        author: [{ required: true, message: "请输入书籍作者", trigger: "blur" }]
      },
      curFileNum: 0
    };
  },
  beforeMount() {
    var book = this.$route.params.book;
    console.log(book.bookclass);
    this.form.name = book.name;
    this.form.price = book.price;
    this.form.isbn = book.isbn;
    this.form.number = book.number;
    this.form.author = book.author;
    this.form.bookclass = book.class;
    this.form.detail = book.detail;
    console.log("234");
  },
  methods:{
    modifyBook(){
      alert("修改成功");
    }
  }
};
</script>


<style scoped>
.sub-header {
  border: #606266;
  border-bottom-style: solid;
  margin: 1% auto 0 44%;
}
.sub-main {
  margin-left: 200px;
  width: 500px;
}
.inputBox {
  width: 300px;
}
.textarea {
  width: 360px;
}
</style>