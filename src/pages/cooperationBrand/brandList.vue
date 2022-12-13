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
        <a class="brands-item" v-for="(item,index) in brandList" :key="index" :href="item.linkUrl">
          <img :src="'https://images.weserv.nl/?url='+item.brandLogo" alt="">
          <span>{{item.brandName}}</span>
        </a>
      </div>
    </div>
    <div class="pagination">
      <el-pagination @size-change="page.pageSize" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    getBrandsList
  } from '@/api/index'
  export default {
    data() {
      return {
        total: 0, //总条数
        page: {
          pageNo: 1,
          pageSize: 12,
          limit:999
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
        getBrandsList({
          limit: 999
        }).then(response => {
          this.brandList = response.data
          for (var index in this.brandList) {
            if (this.brandList[index].brandLogo.indexOf("http://") == -1) {
              this.brandList[index].brandLogo = 'http://www.yijiequan.cn/' + this.brandList[index].brandLogo
            }
          }
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
      toBrand(url){
        console.log("跳转到对应的公司地址")
      }
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
