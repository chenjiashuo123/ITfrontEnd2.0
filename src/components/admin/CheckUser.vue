<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" :index="indexMethod" width="50"></el-table-column>
    <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
    <el-table-column prop="userPhone" label="手机" width="160"></el-table-column>
    <el-table-column prop="userCard" label="手机" width="160"></el-table-column>
    <el-table-column prop="userAddress" label="地址"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CheckUser",
  data() {
    return {
      tableData: [
        {
          userName: "陈佳烁",
          userPhone: "15521134441",
          userCard: "201630664031",
          userAddress: "华南理工大学C10"
        },
        {
          
          userName: "张耀",
          userPhone: "15521134442",
          userCard: "201630664032",
          userAddress: "华南理工大学C10"
        },
        {
        
          userName: "张昶",
          userPhone: "1552113443",
          userCard: "201630664033",
          userAddress: "华南理工大学C10"
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
