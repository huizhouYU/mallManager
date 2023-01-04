<template>
  <div>
    <div class=" flex-start-center services-item" v-for="(item,index) in list" :key="index"
      @click="toCompany(item.storeId)">
      <div class="flex-column-between-start services-item-info">
        <div class="company-name">{{item.storeName}}</div>
    <!--    <div class="flex-start-start info-item">
          <div class="key">服务内容</div>
          <div class="value limit3">{{item.serviceContent||'-'}}</div>
        </div> -->
        <div class="flex-start-start info-item">
          <div class="key">店铺分类</div>
          <div class="value">{{item.categoryName}}</div>
        </div>
        <div class="flex-start-start info-item">
          <div class="key">所在地区</div>
          <div class="value limit1">{{item.regionName || item.address}}</div>
        </div>
      </div>
      <ul class="flex-start-center">
        <li v-for="(goods,i) in item.goodsList" :key="i" v-show="i<4" @click="toGoodsDetail(goods.goodsId)"
          class="myli">
          <img :src="goods.defaultImage" alt="">
          <div class="mask"><span>{{goods.goodsName}}</span></div>
        </li>
      </ul>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
      :page-sizes="[10, 20, 30, 40]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {
    storeList
  } from '@/api/store'
  export default {
    data() {
      return {
        total: 0,
        page: {
          pageNo: 1,
          pageSize: 10,
          storeName: '',
          stype:''
        },
        list: []
      }
    },
    mounted() {
      this.page.stype = this.$route.query.stype
      this.getData()
    },
    methods: {
      getData() {
        storeList(this.page).then(response => {
          this.list = response.data.list
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
          this.total = response.data.totalCount
        })
      },
      handleSizeChange(val) {
        this.page.pageSize = val
        this.getData()
      },
      handleCurrentChange(val) {
        this.page.pageNo = val
        this.getData()
      },
      toCompany(storeId) {
        this.$router.push({
          path: '/shopHome',
          query: {
            storeId
          }
        })
      },
      toGoodsDetail(goodsId) {
        this.$router.push({
          path: '/goodDetail',
          query: {
            goodsId
          }
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  .services-item+.services-item {
    margin-top: 15px;
  }

  .services-item:hover {
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
  }

  .services-item {
    width: 1200px;
    padding: 20px 30px;
    box-sizing: border-box;
    // height: 180px;
    background: #FFFFFF;
    // box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

    .services-item-info {
      width: 360px;
      padding: 5px 60px 5px 0px;
      box-sizing: border-box;
      border-right: 1px solid #EEEEEE;

      .company-name {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }

      .info-item {
        margin-top: 5px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;

        .key {
          width: 50px;
          margin-right: 20px;
          box-sizing: border-box;
        }

        .value {
          width: 250px;
        }

        .limit1 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .limit3 {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }

    ul {
      flex: 1;
      padding: 5px 0px 5px 25px;

      .myli+.myli {
        margin-left: 25px;
      }

      .myli {
        position: relative;
        width: 170px;
        height: 120px;
        overflow: hidden;

        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
        }

        .mask {
          position: absolute;
          top: 100%;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          box-sizing: border-box;
          padding: 25px 15px 25px 15px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          transition: top 1s, left 1s;
          text-align: center;

          span {
            opacity: 0;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            transition: opacity 2s;
          }

        }
      }

      li:hover .mask {
        display: block;
        top: 0%;
        left: 0%;

        span {
          opacity: 1;
          /*  简写      名字    时间   曲线  开始时间  次数  逆向还原  结束状态是否回去*/
          // animation: myShowSpan 1s linear 0.5s 1 normal forwards;
        }
      }

      @keyframes myShowSpan {
        0% {
          opacity: 0;
        }

        50% {
          opacity: 0.5;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }

  /deep/ .el-pagination {
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 5px 0px;
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
