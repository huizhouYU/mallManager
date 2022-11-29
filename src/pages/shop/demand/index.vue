<template>
  <div class="demand-box">

    <demand-item class="demand-item"></demand-item>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import demandItem from '../../../pages/shopDemand/demandItem.vue'
  export default {
    components: {
      demandItem
    },
    data() {
      return {
        isShowTitleImg: false,
      }
    }
  }
</script>

<style lang="less" scoped>
  .demand-box {
    width: 1200px;
    margin-top: 20px;
    .demand-item {
      background-color: #fff;
      padding: 18px 30px 20px 30px;
    }
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px 0px 0px 0px;
    }
    
    /deep/ .el-pagination {
      font-weight: 400;
    }
    
    /deep/ .el-pagination .el-select .el-input .el-input__inner {
      background-color: #f5f5f5;
    }
    
    /deep/.el-pagination .btn-next,
    /deep/.el-pagination .btn-prev,
    /deep/ .el-pager li {
      background: none;
    }
  }
</style>
