<template>
  <div class="main-container">
    <div class="each-box">
      <div class="book-title-box">
        <span>2018-12-12</span>
      </div>
      <div class="book-pic-box">
        <div class="book-information">
          <div class="book-pic">
            <img src="../../assets/book.png" alt width="200px">
          </div>
          <div class="book-pic-desc">
            <div class="book-name">
              <strong>数学分析</strong>
            </div>

            <div class="book-price"><strong>￥100</strong></div>
          </div>
        </div>
        <div class="book-btn-box">
          <div>
            <el-button><strong>通过</strong></el-button>
          </div>
          <br>
          <br>
          <div>
            <el-button><strong>不通过</strong></el-button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  name: "WaitCheckBook.vue"
};
</script>


<style  scoped>
.each-box {
  min-width: 750px;
  width: 90%;
  margin: 20px auto;
  border: 1px solid #909199;
}

.book-title-box {
  text-align: left;
  font-size: 18px;
}

.book-pic-box {
  height: 250px;
}
.book-pic {
  width: 200px;
  height: 250px;
  float: left;
  border: 1px solid #999;
  display: flex;
  align-items: center;
}

.book-name {
  text-align: left;
  font-size: 40px;
  height: 90px;
  padding-top: 20px;
  width: 400px;
}

.book-price {
  text-align: left;
  font-size: 30px;
  height: 60px;
  padding-top: 20px;
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
