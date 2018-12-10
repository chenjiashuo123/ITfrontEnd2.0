<template>
    <div class="order">
        <el-row >
            <el-col :span="8" v-for="(item, index) in orderList" :key="index" >
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/书本.png" class="image">
                    <div style="padding: 14px;">
                        <span>{{item.bookName}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ item.time }}</time>
                            <el-button type="text" class="button" @click="detailDialogVisible=true">查看详情</el-button>
                        </div>
                                <el-dialog
                                    title="订单详情"
                                    :visible.sync="detailDialogVisible"
                                    width="30%"
                                    center>
                                    <div class="showInfo">
                                        <el-row>
                                            <el-col>
                                                <div  id="name" class="information">
                                                    <div >订单号：</div>
                                                    <div>{{item.orderID}}</div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <br/>
                                        <el-row>
                                            <el-col>
                                                <div id="address" class="information">
                                                    <div>创建时间：</div>
                                                    <div>{{item.time}}</div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <br/>
                                        <el-row>
                                            <el-col>
                                                <div id="phone" class="information">
                                                    <div>订单总价：</div>
                                                    <div>{{item.price}}</div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <br/>
                                        <el-row>
                                            <el-col>
                                                <div id="idCard" class="information">
                                                    <div>订单状态：</div>
                                                    <div>{{item.state}}</div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col>
                                                <div id="idCard" class="information">
                                                    <div>卖家联系方式：</div>
                                                    <div>{{item.sellerPhone}}</div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col>
                                                <el-button type="primary" >修 改</el-button>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-dialog>
                    </div>
                </el-card>
            </el-col>
        </el-row>


    </div>
    
</template>

<script>
export default {
    name: "Order",
    data() {
    return {
        detailDialogVisible : false,
        orderList : [
          {
              orderID: 1,
              picture:"",
              bookName:"数学分析",
              price: 30,
              state: "完成",
              time: "2018/10/20",
              sellerPhone:"15521134440",

          },
                    {
              orderID: 2,
              picture:"",
              bookName:"线性代数",
              price: 30,
              state: "未完成",
              time: "2018/10/21",
              sellerPhone:"15521134443",

          },
                              {
              orderID: 3,
              picture:"",
              bookName:"大学英语",
              price: 40,
              state: "完成",
              time: "2018/10/22",
              sellerPhone:"15521134444",

          }
      ]
    };
  }
}
</script>

<style lang="stylus" scoped>
.time {
    display block
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

</style>

