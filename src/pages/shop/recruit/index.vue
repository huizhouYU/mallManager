<template>
  <div class="demand-box">
    <div class="select-content">
      <div class="select-item">
        <div class="title">招聘类型</div>
        <ul :class="['item']">
          <!-- <li @click="changeGoodsType('','')"><span>全部</span></li> -->
          <li v-for="(item,index) in recruitTypeList" :key="index" @click="changeRecruitType(item.name)">
            <span :class="{'bule':item.name == page.recruitType}">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-box">
      <!-- 左边列表 -->
      <div class="list-box">
        <template v-if="dataList && dataList.length>0">
          <recruit-item v-for="(item,index) in dataList" :key="index"></recruit-item>
        </template>
        <template v-else>
          <div class="flex-center-center no-data-box">
            暂无数据
          </div>
        </template>
      </div>
      <!-- 右边入口+推荐 -->
      <div class="right-box">
        <RecruitEnter></RecruitEnter>
        <div class="similar-recruit-unit-title">相关招聘单位</div>
        <div class="simllar-unit-box">
          <div class="simllar-unit" v-for="(item,index) in 5" :key="index">
            <span class="unit-name">宣城市宣州区北辰教育培训学校</span>
            <div class="statue-area">
              <span class="statue">招聘中</span>
              <span class="area">浙江-舟山</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[25, 50, 60, 80]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import RecruitItem from '../../../pages/recruit/recruitItem.vue'
  import RecruitEnter from '../../../pages/recruit/recruitEnter.vue'
  import {
    articleList
  } from '@/api/supplyDemand'
  export default {
    components: {
      RecruitItem,
      RecruitEnter
    },
    data() {
      return {
        total: 0,
        page: {
          pageNo: 1,
          pageSize: 25,
          recruitType: null,
          storeId: ''
        },
        recruitTypeList: [{
            id: null,
            name: '全部'
          }, {
            id: 1,
            name: '兼职招聘'
          },
          {
            id: 2,
            name: '社招'
          },
          {
            id: 3,
            name: '应届校园招聘'
          },
          {
            id: 4,
            name: '实习生招聘'
          }
        ],
        dataList: [{}, {}, {}, {}]
      }
    },
    mounted() {
      this.page.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      getData() {
        // articleList(this.page).then(response => {
        //   this.demandDataList = response.data.list
        //   this.total = response.data.totalCount
        //   this.page.pageNo = response.data.pageNum
        //   this.page.pageSize = response.data.pageSize
        // })
      },
      changeRecruitType(recruitType) {
        this.page.recruitType = recruitType
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
      border-radius: 6px;
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

    //招聘列表
    .content-box {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .list-box {
        width: 860px;
        padding-right: 10px;

        .no-data-box {
          width: 100%;
          height: 60px;
          font-size: 14px;
          color: #666666;
        }
      }

      .right-box {
        width: 340px;
        padding-left: 10px;

        .similar-recruit-unit-title {
          margin-top: 20px;
          width: 100%;
          height: 50px;
          background: linear-gradient(to bottom,  #F5FAFF 0%, #FDFEFF 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }

        .simllar-unit-box {
          width: 100%;
          padding: 0px 25px;
          background: #FFFFFF;
          .simllar-unit {
            cursor: pointer;
            width: 100%;
            height: 63px;

            padding: 15px 0px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            .unit-name {
              font-size: 14px;
              line-height: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-bottom: 10px;
            }

            .statue-area {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              line-height: 12px;

              .statue {
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #64B7FF;
              }

              .area {
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
              }
            }
          }
          .simllar-unit +.simllar-unit {
            border-bottom: 1px solid #EEEEEE;
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
  }
</style>
