<template>
  <!-- 展会频道 -->
  <div>
    <div class="index-tag">首页 > 展会频道</div>
    <div class="filter-box">
      <div class="flex-start-start filter-item">
        <div class="item-title">
          区域
        </div>
        <div class="flex-column-start-start area-box">
          <div class="flex-start-start provice-box">
            <span class="no-limit" @click="changeArea({'label':null,'childer':[]})">不限</span>
            <div class="flex-start-start item-option">
              <span :class="['item-option-name',{'selected-item':page.province == item.label}]"
                v-for="(item,index) in areaOption" :key="index" @click="changeArea(item)">{{item.label}}</span>
            </div>
          </div>
          <div class="city-box">
            <div class="flex-start-start item-option" v-show="cityOption && cityOption.length>0">
              <span :class="['item-option-name',{'selected-item':page.city == item}]" v-for="(item,index) in cityOption"
                :key="index" @click="changeCity(item)">{{item}}</span>
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
      <template v-if="exhibitList && exhibitList.length>0">
        <div class=" flex-start-start exhibit-item" v-for="(item,index) in exhibitList" :key="index"
          @click="toDetail(item.id)">
          <img :src="item.pic || '../../assets/images/index/announce_bg.png'" alt="" class="exhibit-img">
          <div class="flex-column-start-start exhibit-item-right">
            <img src="../../assets/images/pic_triangle.png" alt="">
            <div class="flex-start-center exhibit-content">
              <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="publish">发布者：{{item.author}}</div>
              </div>
              <div class="line"></div>
              <div class="content-time">
                <div class="day">{{item.updatedAt.slice(8,10)}}</div>
                <div class="year-month">{{item.updatedAt.slice(0,7)}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex-center-center no-data-box">
          暂无数据
        </div>
      </template>

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
    exHibInvitList
  } from '@/api/index'
  const city = require("../../assets/json/citys.json")
  export default {
    data() {
      return {
        totalCount: 0,
        page: {
          pageNo: 1,
          pageSize: 20,
          province: '',
          typeId: 1,
          city: ''
        },
        exhibitList: [],
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
        exHibInvitList(this.page).then(response => {
          if (response.code == 10000) {
            console.log("获取的展会列表：", response.data)
            this.exhibitList = response.data.list
            this.totalCount = response.data.totalCount
          } else {
            this.message.error(response.message)
          }
          // console.log("获取的医院列表：", response)
        })
        // this.page.keyword = this.$route.query.keyword
        // articleList(this.page).then(response => {
        //   this.page.pageNo = response.data.pageNum
        //   this.page.pageSize = response.data.pageSize
        //   this.totalCount = response.data.totalCount
        //   this.demandsList = response.data.list
        // })
      },
      changeArea(item) {
        this.page.province = item.label
        this.cityOption = item.childer
        if (this.cityOption && this.cityOption.length > 0) {
          this.page.city = this.cityOption[0]
        } else {
          this.page.city = null
        }
        this.getData()
      },
      changeCity(item) {
        this.page.city = item
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
      toDetail(id) {
        this.$router.push({
          path: '/exhibitDetail',
          query: {
            id
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
    .no-data-box {
      width: 1200px;
      height: 60px;
      font-size: 14px;
      color: #666666;

    }

    .exhibit-item:hover {
      .exhibit-item-right {
        .exhibit-content {
          box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

          .content {
            .title {
              color: #40A9FF;
            }
          }
        }
      }
    }

    .exhibit-item {
      margin-bottom: 30px;
      cursor: pointer;

      .exhibit-img {
        width: 224px;
        height: 169px;
      }

      .exhibit-item-right {
        flex: 1;
        height: 169px;

        .exhibit-content {
          padding: 44px 36px 44px 40px;
          flex: 1;
          width: 100%;
          height: 158px;
          background: #FFFFFF;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;

          .content {
            // height: 100%;
            // border: 1px solid red;
            width: 718px;

            .title {
              font-size: 20px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-bottom: 25px;
            }

            .publish {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }
          }

          .line {
            width: 1px;
            height: 50px;
            border: 1px solid #E1E1E1;
            margin: 0px 40px;
          }

          .content-time {
            height: 100%;

            // border: 1px solid;
            .day {
              font-size: 40px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }

            .year-month {
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }
          }
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
