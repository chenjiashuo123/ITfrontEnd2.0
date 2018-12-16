<template>
  <div class="main-container">
    <div class="each-box" v-for="(item, index) in bookList" :key="index">
      <div class="book-title-box">
        <span>{{item.time}}</span>
      </div>
      <div class="book-pic-box">
        <div class="book-pic" >
          <img src="../../assets/book.png" alt width="200px">
        </div>
        <div class="book-pic-desc">
          <div class="book-name">
            {{item.name}}
          </div>
          <div class="book-author">
            {{item.author}}
          </div>
          <div class="book-price">
            <strong>￥{{item.price}}</strong>
          </div>
        </div>
        <div class="book-btn-box">
          <div>
            <el-button @click="downBook(item.bookid)">
              <strong>下架</strong>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CheckedBook",
   data: () => ({
    bookList: []
  }),
  beforeCreate(){
    this.axios.get('/api/serchunreviewedbook').then(res=>{
      if (res.data["state"] == 0) {
        this.bookList=res.data["bookList"];
      } else {
        console.log("get collected book error: " + res.data["state"]);
      }

    });
  },
  methods:{
     showDetail(item) {
      this.$router.push({
        name: "checkbookdetail",
        params: {
          id: item.ISBN
        }
      });
    }
  }

};
</script>


<style  scoped>
.each-box {
  min-width: 750px;
  width: 90%;
  margin: 20px auto 40px auto;
  border: 1px solid #909199;
}

.book-title-box {
  text-align: left;
  font-size: 18px;
  border-bottom: 1px solid #909199;
  background-color: #909199;
}

.book-pic-box {
  margin-left: 20px;
  height: 240px;
}
.book-pic {
  margin-top: 20px;
  width: 200px;
  height: 200px;
  float: left;
  border: 1px solid #999;
  display: flex;
  align-items: center;
}

.book-name {
  margin: 20px 0 0 0 ;
  text-align: left;
  font-size: 30px;
  height:80px;
  width: 400px;
  word-wrap: break-word;
  overflow: hidden;
}
.book-author{
  text-align: left;
  font-size: 25px;
  height:70px;
  width: 400px;
 
  word-wrap: break-word;
  overflow: hidden;
}

.book-price {
  margin-top: 20px;
  text-align: left;
  font-size: 25px;
  height: 40px;
}

.book-pic-desc {
  float: left;
}
.book-btn-box {
  height: 150px;
  padding-top: 100px;
  padding-right: 50px;
  float: right;
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
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
</style>
