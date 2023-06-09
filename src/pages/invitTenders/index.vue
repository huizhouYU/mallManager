<template>
  <!-- <div>招标频道</div> -->
  <div>
    <div class="index-tag">首页 > 招标频道</div>
    <div class="filter-box">
      <div class="flex-start-start filter-item">
        <div class="item-title">
          区域
        </div>
        <div class="flex-column-start-start area-box">
          <div class="flex-start-start provice-box">
            <span class="no-limit" @click="changeArea({'laber':'不限','childer':[]})">不限</span>
            <div class="flex-start-start item-option">
              <span :class="['item-option-name',{'selected-item':page.areaTitle == item.label}]"
                v-for="(item,index) in areaOption" :key="index" @click="changeArea(item)">{{item.label}}</span>
            </div>
          </div>
          <div class="city-box">
            <div class="flex-start-start item-option" v-show="cityOption && cityOption.length>0">
              <span :class="['item-option-name',{'selected-item':page.cityTitle == item}]"
                v-for="(item,index) in cityOption" :key="index" @click="changeCity(item)">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 长条广告位 -->
    <div class="long-adv">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/20230512112116.jpg" alt="">
    </div>

    <div class="content-box">
      <div class=" flex-start-center invit-tenders-item" v-for="(item,index) in invitTendersList" :key="index"
        @click="toDetail(item)">
        <div class="flex-between-center title-address">
          <div class="flex-center-center title-box">
            <div class="circle"></div>
            <span>襄阳市第一人民医院移动DR 项目的询价文件</span>
          </div>
          <div class="flex-center-center address">
            <i class="iconfont my-iconfont-address">&#xe61c;</i>
            <span>襄阳市</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="flex-column-start-start time">
          <div class="month-day">08-18</div>
          <div class="year">2018</div>
        </div>
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
  const city = require("../../assets/json/citys.json")
  export default {
    data() {
      return {
        totalCount: 0,
        page: {
          pageNo: 1,
          pageSize: 20,
          keyType: 'title',
          areaId: null,
          areaTitle: '',
          cityTitle: ''
        },
        invitTendersList: [{}, {}, {}, {}],
        areaOption: [], //省份
        cityOption: [], //市级
      }
    },
    mounted() {
      this.areaOption = city
      this.getData()
    },
    methods: {
      getData() {
        // this.page.keyword = this.$route.query.keyword
        // articleList(this.page).then(response => {
        //   this.page.pageNo = response.data.pageNum
        //   this.page.pageSize = response.data.pageSize
        //   this.totalCount = response.data.totalCount
        //   this.demandsList = response.data.list
        // })
      },
      changeArea(item) {
        this.page.areaTitle = item.label
        this.cityOption = item.childer
        this.getData()
      },
      changeCity(item) {
        this.page.cityTitle = item
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
      toDetail(articleId) {
        this.$router.push({
          path: '/invitTendersDetail',
          query: {
            articleId
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .index-tag {
    margin: 10px auto 8px;
    height: 20px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }

  //筛选框
  .filter-box {
    padding: 10px 56px 10px 30px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 25px;

    .filter-item {
      .item-title {
        margin-top: 10px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #757575;
        padding-right: 50px;
      }

      .area-box {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        flex: 1;

        .no-limit {
          margin: 10px 22px 10px 0px;
          cursor: pointer;
        }

        .city-box {
          width: 100%;
          padding-left: 50px;
          background: #F3F3F3;
          margin-bottom: 15px;
        }

        .item-option {
          width: 100%;

        }
      }

      .item-option {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        flex: 1;
        flex-wrap: wrap;

        .item-option-name {
          margin: 10px 22px 10px 0px;
          cursor: pointer;
        }

        .selected-item {
          color: #40A9FF;
        }
      }
    }

    .filter-item+.filter-item {
      padding-top: 5px;
      border-top: 1px solid #F6F6F6;
    }
  }


  //长条广告位
  .long-adv {
    margin-bottom: 30px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  //展会列表
  .content-box {
    .invit-tenders-item:hover {
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

      .title-address {
        .title-box {
          color: #40A9FF;
        }
      }
    }

    .invit-tenders-item {
      margin-bottom: 20px;
      cursor: pointer;
      width: 100%;
      height: 88px;
      background: #FFFFFF;
      border-radius: 10px;

      .title-address {
        width: 1084px;
        padding: 0px 14px 0px 30px;

        .title-box {
          line-height: 16px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;

          .circle {
            margin-right: 10px;
            width: 8px;
            height: 8px;
            background: #FFFFFF;
            border: 1px solid #008CFF;
            border-radius: 50%;
          }
        }

        .address {
          line-height: 16px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;

          .my-iconfont-address {
            line-height: 18px;
            font-size: 18px;
            color: #40A9FF;
            margin-right: 8px;
          }
        }
      }

      .line {
        width: 1px;
        height: 30px;
        border: 1px solid #E1E1E1;
        margin-right: 18px;
      }

      .time {
        .month-day {
          font-size: 26px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
        }

        .year {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
        }
      }

    }
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
</style>
