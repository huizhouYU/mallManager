<template>
  <!-- 医院频道 -->
  <div>
    <div class="index-tag">首页 > 医院频道</div>
    <div class="filter-box">
      <div class="flex-start-start filter-item">
        <div class="item-title">
          区域
        </div>
        <div class="flex-column-start-start area-box">
          <div class="flex-start-start provice-box">
            <span class="no-limit" @click="changeArea({'laber':'不限','childer':[]})">不限</span>
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
          性质
        </div>
        <div class="flex-start-start item-option">
          <span :class="['item-option-name',{'selected-item':page.typeName == item.title}]"
            v-for="(item,index) in typeNameOption" :key="index" @click="changeTypeName(item)">{{item.title}}</span>
        </div>
      </div>
      <div class="flex-start-start filter-item">
        <div class="item-title">
          等级
        </div>
        <div class="flex-start-start item-option">
          <span :class="['item-option-name',{'selected-item':page.level == item.title}]"
            v-for="(item,index) in levelOption" :key="index" @click="changeLevel(item)">{{item.title}}</span>
        </div>
      </div>
    </div>
    <!-- 长条广告位 -->
    <div class="long-adv">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/20230512112116.jpg" alt="">
    </div>

    <div class="content-box">
      <div class=" flex-column-around-center hospital-item" v-for="(item,index) in list" :key="index"
        @click="toDetail(item.id)">
        <img src="../../assets/images/index/announce_bg.png" alt="">
        <div class="flex-center-center title">{{item.name}}</div>
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
  const citys = require("../../assets/json/citys.json")
  export default {
    data() {
      return {
        totalCount: 0,
        page: {
          pageNo: 1,
          pageSize: 20,
          province: '',
          city: '',
          typeName: '',
          level: ''
        },
        list: [],
        typeNameOption: [{
            title: '不限',
            id: ''
          },
          {
            title: '公立医院',
            id: '1'
          },
          {
            title: '私立医院',
            id: '2'
          }
        ],
        levelOption: [{
            title: '不限',
            id: ''
          },
          {
            title: '一级',
            id: '1'
          },
          {
            title: '二级',
            id: '2'
          },
          {
            title: '三级',
            id: '3'
          }
        ],
        areaOption: [], //省份
        cityOption: [], //市级
      }
    },
    mounted() {
      this.areaOption = citys
      if(this.$route.query.province){
        this.page.province = this.$route.query.province
      }
      this.getData()
    },
    methods: {
      getData() {
        hospitalList(this.page).then(response => {
          if(response.code == 10000){
            console.log("获取的医院列表：",response.data)
            this.list = response.data.list
            this.totalCount = response.data.totalCount
          }else{
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
        this.getData()
      },
      changeCity(item) {
        this.page.city = item
        this.getData()
      },
      changeTypeName(item) {
        this.page.typeName = item.title
        this.getData()
      },
      changeLevel(item) {
        this.page.level = item.title
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
    display: grid;
    grid-gap: 12px;
    justify-content: flex-start;
    grid-template-columns: repeat(4, auto);

    .hospital-item:hover {
      .title {
        background: #40A9FF;
        color: #FFFFFF;
      }
    }

    .hospital-item {
      width: 290px;
      height: 246px;

      img {
        width: 100%;
        height: 200px;
      }

      .title {
        height: 46px;
        width: 100%;
        background: #FFFFFF;
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
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
