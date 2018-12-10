<template>
  <div class="person">
    <el-container>
      <el-header><PersonHead/></el-header>
      <el-main>
        <el-row>
          <el-col :span="8">
            <div ><person-side-bar/></div>
          </el-col>
          <el-col :span="12">
            <div><Order/></div>
          </el-col>
        </el-row>  
      </el-main>
    </el-container>
  </div>
</template>

<script>
import PersonSideBar from "@/components/PersonSideBar.vue"
import PersonHead from "@/components/PersonHead.vue"
import Order from "@/components/Order.vue"
export default {
    name: "Person",
    components: {
      PersonSideBar,
      PersonHead,
      Order
    }
};
</script>









