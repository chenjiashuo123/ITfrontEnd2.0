<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" :index="indexMethod" width="50"></el-table-column>
    <el-table-column prop="buyerPhone" label="买家手机号" width="180"></el-table-column>
    <el-table-column prop="sellerPhone" label="卖家手机号" width="180"></el-table-column>
    <el-table-column prop="bookName" label="书籍名称" width="180"></el-table-column>
    <el-table-column prop="orderPrice" label="价格" width="100"></el-table-column>
    <el-table-column prop="orderState" label="订单状态"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CheckUser",
  data() {
    return {
      tableData: [
        {
          buyerPhone: "15521134441",
          sellerPhone: "15521134442",
          bookName: "数学分析",
          orderPrice: 30,
          orderState: "未完成"
        },
        {
          buyerPhone: "15521134441",
          sellerPhone: "15521134442",
          bookName: "数学分析",
          orderPrice: 30,
          orderState: "未完成"
        },
        {
          buyerPhone: "15521134441",
          sellerPhone: "15521134442",
          bookName: "数学分析",
          orderPrice: 30,
          orderState: "未完成"
        }
      ]
    };
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    }
  }
};
</script>
