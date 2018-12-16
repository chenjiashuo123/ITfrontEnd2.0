<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" :index="indexMethod" width="50"></el-table-column>
    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
    <el-table-column prop="phone" label="手机" width="160"></el-table-column>
    <el-table-column prop="idnumber" label="学生证号" width="160"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
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
    this.axios.get('/api/viewuser').then(res=>{
      if (res.data["state"] == 0) {
        this.tableData=res.data["userList"];
      } else {
        console.log("get collected book error: " + res.data["state"]);
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
