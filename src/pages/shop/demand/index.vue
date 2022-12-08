<template>
  <div class="demand-box">

    <demand-item class="demand-item" :demandDataList="demandDataList"></demand-item>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[24, 36, 48, 60]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import demandItem from '../../../pages/shopDemand/demandItem.vue'
  import {
    articleList
  } from '@/api/supplyDemand'
  export default {
    components: {
      demandItem
    },
    data() {
      return {
        total:0,
        page:{
          pageNo:1,
          pageSize:12,
          storeId:''
        },
        isShowTitleImg: false,
        demandDataList:[]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.page.storeId  = this.$route.query.storeId
      this.getData()
    },
    methods:{
      getData(){
        articleList(this.page).then(response=>{
          console.log("获取店铺内的需求列表：",response)
          this.demandDataList = response.data.list
          this.total = response.data.totalCount
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.page.pageSize = val
        this.getData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page.pageNo = val
        this.getData()
      },
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
