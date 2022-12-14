<template>
  <div class="supply-demand-content">
    <div class="item-card" v-for="(item,index) in demandsList" :key="item.articleId">
      <!-- <img :src="'https://images.weserv.nl/?url='+item.imageList[0]" alt="" class="demand-img"> -->
      <template v-if="item.imageList != null && item.imageList.length>0">
        <img :src="'https://images.weserv.nl/?url='+item.imageList[0]" alt="" class="demand-img">
      </template>
      <template v-else>
        <img src="../../assets/images/index/s_logo.jpg" alt="" class="demand-img">
      </template>

      <div class="demand-info">
        <div class="title-type">
          <span class="title">{{item.title}}</span>
          <span class="type">
            <template v-if="item.articleType == 1">求购设备</template>
            <template v-else-if="item.articleType == 2">项目外包</template>
            <template v-else-if="item.articleType == 3">灵活兼职</template>
          </span>
        </div>
        <div class="term">
          <div class="term-item">
            <span class="term-key">名称</span>
            <span class="term-value">{{item.equipmentName||'-'}}</span>
          </div>
          <div class="term-item">
            <span class="term-key">品牌</span>
            <span class="term-value">{{item.brandName||'-'}}</span>
          </div>
          <div class="term-item">
            <span class="term-key">P/N码</span>
            <span class="term-value">{{item.pnCode||'-'}}</span>
          </div>
        </div>
        <span class="description">{{item.serviceContent}}</span>
        <div class="company">
          <img src="../../assets/images/index/icon_qi.png" alt="" v-if="item.stype =='company'">
          <img src="../../assets/images/index/icon_ge.png" alt="" v-else-if="item.stype =='personal'">
          <span class="company-name">{{item.storeName}}</span>
        </div>
      </div>
      <div class="contact" @click="toDetail(item.articleId)">
        立即联系
      </div>
    </div>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[10, 20, 30, 40]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {
    articleList
  } from '@/api/supplyDemand'
  export default {
    mounted() {
      this.getData()
    },
    data() {
      return {
        totalCount: 0,
        page: {
          pageNo: 1,
          pageSize: 10,
          keyType:'title',
          keyword:''
        },
        demandsList: []
      }
    },
    watch: {
      $route(to, from) {
        if (to.query.keyword != from.query.keyword) {
          this.getData()
        }
      }
    },
    methods: {
      getData() {
        this.page.keyword = this.$route.query.keyword
        articleList(this.page).then(response => {
          console.log('供求信息-需求列表：', response)
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
          this.totalCount = response.data.totalCount
          this.demandsList = response.data.list
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
      toDetail(articleId) {
        this.$router.push({
          path: '/demandDetail',
          query: {
            articleId
          }
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  .supply-demand-content {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }

  .item-card:hover {
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
  }

  .item-card {
    height: 180px;
    width: 920px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 20px 20px;
    margin-bottom: 12px;
    box-sizing: border-box;
    align-items: center;

    .demand-img {
      width: 200px;
      height: 140px;
    }

    .demand-info {
      width: 560px;
      height: 100%;
      padding: 0px 54px 0px 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .title-type {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .title {
          margin-right: 8px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #333333;
        }

        .type {
          width: 66px;
          height: 24px;
          display: inline-block;
          text-align: center;
          line-height: 24px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40A9FF;
          border: 1px solid #40A9FF;
          border-radius: 4px;
        }
      }

      .term {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .term-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-right: 6px;

          .term-key {
            background: #F4F4F4;
            width: 74px;
          }

          .term-value {
            width: 94px;
          }

          .term-key,
          .term-value {
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            display: inline-block;
            padding: 0px 15px;
            border: 1px solid #F4F4F4;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }
        }
      }

      .description {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .company {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 18px;
          height: 20px;
          margin-right: 8px;
        }

        .company-name {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }
      }
    }

    .contact {
      width: 110px;
      height: 30px;
      background: #8DCFFF;
      border-radius: 4px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 30px;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
    }

    .contact:hover {
      background: #40A9FF;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0px 0px 0px;
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
</style>
