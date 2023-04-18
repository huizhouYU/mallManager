<template>
  <div class="demand-box">
    <div class="select-content">
      <div class="current-selected" v-show="page.articleType != null && page.articleType != ''">
        <div class="title">当前筛选结果</div>
        <div class="value">
          <template v-if="page.articleType == 1"> 求购设备</template>
          <template v-else-if="page.articleType == 2"> 项目外包 </template>
          <template v-else-if="page.articleType == 3">灵活兼职</template>
        </div>
      </div>
      <div class="select-item">
        <div class="title">类型</div>
        <ul :class="['item']">
          <!-- <li @click="changeGoodsType('','')"><span>全部</span></li> -->
          <li v-for="(item,index) in articleTypeList" :key="index" @click="changeGoodsType(item.id)">
            <span :class="{'bule':item.id == page.articleType}">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <demand-item class="demand-item" :demandDataList="demandDataList"></demand-item>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[25, 50, 60, 80]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
        total: 0,
        page: {
          pageNo: 1,
          pageSize: 25,
          articleType: null,
          storeId: ''
        },
        articleTypeList: [{
            id: null,
            name: '全部'
          }, {
            id: 1,
            name: '求购设备'
          },
          {
            id: 2,
            name: '项目外包'
          },
          {
            id: 3,
            name: '灵活兼职'
          }
        ],
        demandDataList: []
      }
    },
    mounted() {
      this.page.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      getData() {
        articleList(this.page).then(response => {
          this.demandDataList = response.data.list
          this.total = response.data.totalCount
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
        })
      },
      changeGoodsType(articleType) {
        this.page.articleType = articleType
        this.getData()
      },
      handleSizeChange(val) {
        this.page.pageSize = val
        this.getData()
      },
      handleCurrentChange(val) {
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

    .select-content {
      margin-bottom: 18px;
      background-color: #fff;
      padding: 10px 30px 10px 20px;

      .title {
        width: 100px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #757575;
        display: flex;
        justify-content: flex-start;
      }

      .current-selected {
        padding-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px dashed #F6F6F6;

        .value {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40A9FF;
        }
      }
    }
    .select-item {
      padding: 13px 0px 0px 0px;
      // border-bottom: 1px dashed #F6F6F6;
      display: flex;
      justify-content: flex-start;

      .minImgHeight {
        height: 50px;
        overflow: hidden;
      }

      .minHeight {
        height: 25px;
        overflow: hidden;
      }

      .item {
        width: 1000px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        li {
          margin-bottom: 10px;
          cursor: pointer;
        }

        img {
          width: 100px;
          height: 40px;
          border: 1px solid #F5F5F5;
          border-radius: 6px;
          padding: 4px;
          margin-right: 15px;
        }

        span {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          margin-right: 30px;
        }

        .bule {
          color: #40A9FF;
        }
      }

      .isStow {
        display: flex;
        align-content: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
      }
    }

    .demand-item {
      // background-color: #fff;
      // padding: 18px 30px 20px 30px;
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
