<template>
  <div class="brands-content">
    <div class="brands-main">
      <div class="brands-top">
        <span class="zm-title">按首字母</span>
        <ul>
          <li v-for="(item,index) in zmList" :key="index" :class="{'actived':item == selectedKey}"
            @click="selectedKey = item">{{item}}</li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="brands-list">
        <div class="brands-item" v-for="(item,index) in brandList" :key="index" @click="toGoods(item.brandName)">
          <img :src="item.brandLogo" alt="">
          <span>{{item.brandName}}</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[16, 32, 48, 64]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    getBrandsListPage
  } from '@/api/index'
  export default {
    data() {
      return {
        total: 0, //总条数
        page: {
          pageNo: 1,
          pageSize: 16
        },
        selectedKey: '全部',
        zmList: ['全部', 'A ', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        brandList: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData(){
        //获取品牌列表
        getBrandsListPage(this.page).then(response => {
          this.brandList = response.data.list
          var origin = window.location.origin+window.location.pathname
          // this.page.pageNo = response.data.pageNum
          // this.page.pageSize  = response.data.pageSize
          this.total = response.data.totalCount
          for (var index in this.brandList) {
            if (this.brandList[index].brandLogo.indexOf("http://") == -1) {
              this.brandList[index].brandLogo = origin + this.brandList[index].brandLogo
            }
          }
        })
      },
      toGoods(brandName){
        this.$router.push({
          path:'/medicalApparatus',
          query:{
            brandName
          }
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
    },
  }
</script>

<style lang="less" scoped>
  .brands-content {}

  .brands-main {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 15px 30px 20px 30px;
  }

  .brands-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #F6F6F6;

    .zm-title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 700;
      color: #333333;
    }

    ul {
      display: flex;
      align-items: center;

      li {
        cursor: pointer;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        padding: 6px 10px;
      }

      li:hover,
      .actived {
        background: #8DCFFF;
        border-radius: 4px;
        color: #FFFFFF;
      }
    }
  }

  .brands-list {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(8, auto);

    .brands-item {
      cursor: pointer;
      width: 142px;
      padding: 12px 15px 15px;
      box-sizing: border-box;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-decoration: none;

      img {
        width: 100%;
        // max-width: 115px;
        height: 40px;
        transform: scale(1);
        transition: all .3s ease-in-out;
      }

      span {
        text-decoration: none;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }

    .brands-item:hover {

      // box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
      img {
        transform: scale(1.2);
      }

      span {
        color: #40A9FF;
      }
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
