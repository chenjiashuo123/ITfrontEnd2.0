<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" :index="indexMethod" width="50"></el-table-column>
    <el-table-column prop="buyerid" label="买家ID" width="180"></el-table-column>
    <el-table-column prop="sellerid" label="卖家ID" width="180"></el-table-column>
    <el-table-column prop="bookname" label="书籍名称" width="180"></el-table-column>
    <el-table-column prop="price" label="价格" width="100"></el-table-column>
    <el-table-column prop="orderstate" label="订单状态"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CheckUser",
  data() {
    return {
      tableData: [
      ]
    };
  },
  beforeCreate(){
    this.axios.post('/api/admincheckorder').then(res=>{
      if (res.data["state"] == 0) {
        this.tableData=res.data["orderlist"];
      } else {
        console.log("get collected order error: " + res.data["state"]);
      }

    });
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    }
  }
};
</script>
