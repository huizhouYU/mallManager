<template>
  <!-- 招聘频道 -->
  <div>
    <div class="index-tag">首页 > 招聘频道</div>
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

      <div class="flex-start-start filter-item">
        <div class="item-title">
          求职类型
        </div>
        <div class="flex-start-start item-option">
          <span class="item-option-name" @click="changeTypeName({title:'',id:''})">不限</span>
          <span :class="['item-option-name',{'selected-item':page.recruitType == item.title}]"
            v-for="(item,index) in recruitTypeOption" :key="index" @click="changeTypeName(item)">{{item.title}}</span>
        </div>
      </div>
      <div class="flex-start-start filter-item">
        <div class="item-title">
          职位类型
        </div>
        <div class="flex-start-start provice-box">
          <span class="item-option-name" @click="changePosition({title:'',id:''})">不限</span>
          <div class="flex-start-start item-option">
            <span :class="['item-option-name',{'selected-item':page.positionType == item.title}]"
              v-for="(item,index) in positionTypeOption" :key="index"
              @click="changePosition(item)">{{item.title}}</span>
          </div>
        </div>

      </div>
    </div>
    <!-- 长条广告位 -->
    <div class="long-adv">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/20230512112116.jpg" alt="">
    </div>

    <div class="content-box">
      <!-- 左边列表 -->
      <div class="list-box">
        <template v-if="list && list.length>0">
          <recruit-item v-for="(item,index) in list" :key="index"></recruit-item>
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
    hospitalList
  } from '@/api/index'
  import RecruitItem from '../../pages/recruit/recruitItem.vue'
  import RecruitEnter from '../../pages/recruit/recruitEnter.vue'
  const citys = require("../../assets/json/citys.json")
  export default {
    components: {
      RecruitItem,
      RecruitEnter
    },
    data() {
      return {
        totalCount: 0,
        page: {
          pageNo: 1,
          pageSize: 20,
          province: '',
          city: '',
          recruitType: '',
          positionType: ''
        },
        list: [{}, {}],
        recruitTypeOption: [{
            title: '兼职招聘',
            id: '1'
          },
          {
            title: '社招',
            id: '2'
          },
          {
            title: '应届校园招聘',
            id: '3'
          },
          {
            title: '实习生招聘',
            id: '4'
          }
        ],
        positionTypeOption: [{
            title: '临床',
            id: 1
          },
          {
            title: '生物',
            id: 2
          },
          {
            title: '辅助科室及护理',
            id: 3
          },
          {
            title: '互联网/电脑/软件',
            id: 4
          },
          {
            title: '医院',
            id: 5
          },
          {
            title: '生物化工',
            id: 6
          },
          {
            title: '医药研发/制药生产',
            id: 7
          },
          {
            title: '公关市场营销',
            id: 8
          }, {
            title: '财务/人力',
            id: 9
          },
          {
            title: '客服/与技术支持',
            id: 12
          },
          {
            title: '销售人员及行政管理',
            id: 13
          }
        ],
        areaOption: [], //省份
        cityOption: [], //市级
      }
    },
    mounted() {
      this.areaOption = citys
      if (this.$route.query.province) {
        this.page.province = this.$route.query.province
      }
      this.getData()
    },
    methods: {
      getData() {
        // hospitalList(this.page).then(response => {
        //   if (response.code == 10000) {
        //     console.log("获取的招聘列表：", response.data)
        //     this.list = response.data.list
        //     this.totalCount = response.data.totalCount
        //   } else {
        //     this.message.error(response.message)
        //   }
        //   // console.log("获取的招聘列表：", response)
        // })
      },
      changeArea(item) {
        this.page.province = item.label
        this.cityOption = item.childer
        this.getData()
      },
      changeCity(item) {
        this.page.city = item
        this.getData()
      },
      changeTypeName(item) {
        this.page.recruitType = item.title
        this.getData()
      },
      changePosition(item) {
        // this.page.level = item.title
        this.page.positionType = item.title
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
          path: '/hospitalDetail',
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
        width: 78px;
        margin-top: 10px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #757575;
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

      .provice-box,
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
