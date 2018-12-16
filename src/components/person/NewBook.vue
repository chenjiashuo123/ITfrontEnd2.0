<template>
  <el-container class="container">
    <el-header class="sub-header">
      <div>
        <h2>出售书籍</h2>
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

        <el-form-item label="书籍分类">
          <el-select v-model="form.class" placeholder="请选择书籍分类">
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

        <el-form-item label="书籍图片">
          <el-upload
            class="upload-demo"
            ref="uploadscan"
            drag
            list-type="picture"
            action="/api/upload"
            :auto-upload="false"
            :on-success="handleSuccess"
            :on-change="handleFileChange"
            :on-remove="handleFileRemove"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将图片文件拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-button type="warning" @click="submitForm('form')" round id="submit-button">发 布</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>



<script>
export default {
  name: "NewBook",
  data() {
    return {
      form: {
        class: "",
        name: "",
        price: "",
        isbn: "",
        number: "",
        author: "",
        detail: "",
        picture: ""
      },
      rules: {
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
  methods: {
    submitForm(form) {
      console.log("submit!!!");
      this.$refs[form].validate(valid => {
        if (valid && this.curFileNum > 0) {
          this.$refs.uploadscan.submit();
        } else if (valid) {
          //提交不带文件的数据
          this.submitText();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitText() {
      this.axios
        .post("/api/apply", this.form)
        .then(res => {
          console.log("form post");
          console.log(res.data["state"]);
          if (res.data["state"] == 0) {
            //回传状态码
            //提交成功
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.$refs.form.resetFields(); //清除表单内容
          } else {
            console.log("form 提交失败");
            this.$message.error("提交失败");
          }
        })
        .catch(res => {
          console.log("catch error", res);
          this.$message.error("提交失败", res);
        });
    },
    handleFileRemove(file, fileList) {
      this.curFileNum = fileList.length;
    },
    handleFileChange(file, fileList) {
      this.curFileNum = fileList.length;
    },
    handleSuccess(res, file, filelist) {
      console.log("file upload success...");
      console.log(res);
      this.submitText();
      if (res["state"] == 0) {
        this.form.picture = res["picture"];
      } else {
        this.$message.error("提交失败");
      }
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