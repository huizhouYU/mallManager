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
        <div class="brands-item" v-for="(item,index) in brandList" :key="index">
          <img :src="item.logo" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 4,
        selectedKey: '全部',
        zmList: ['全部', 'A ', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        brandList: [{
            logo: require('../../assets/images/index/brands/logo_联影.png'),
            name: '联影'
          }, {
            logo: require('../../assets/images/index/brands/logo_西门子_处理.png'),
            name: '西门子'
          },
          {
            logo: require('../../assets/images/index/brands/logo_佳能.png'),
            name: '佳能'
          },
          {
            logo: require('../../assets/images/index/brands/logo_奥泰.png'),
            name: '奥泰'
          },
          {
            logo: require('../../assets/images/index/brands/logo_安科.png'),
            name: '安科'
          },
          {
            logo: require('../../assets/images/index/brands/logo_康达洲际.png'),
            name: '康达洲际'
          },
          {
            logo: require('../../assets/images/index/brands/logo_明峰.png'),
            name: '明峰'
          },
          {
            logo: require('../../assets/images/index/brands/logo_朗润.png'),
            name: '朗润'
          },
          {
            logo: require('../../assets/images/index/brands/logo_飞利浦.png'),
            name: '飞利浦'
          },
          {
            logo: require('../../assets/images/index/brands/logo_佳能.png'),
            name: '佳能'
          },
          {
            logo: require('../../assets/images/index/brands/logo_西门子_处理.png'),
            name: '西门子'
          },
          {
            logo: require('../../assets/images/index/brands/logo_佳能.png'),
            name: '佳能'
          },
          {
            logo: require('../../assets/images/index/brands/logo_奥泰.png'),
            name: '奥泰'
          },
          {
            logo: require('../../assets/images/index/brands/logo_安科.png'),
            name: '安科'
          },
          {
            logo: require('../../assets/images/index/brands/logo_康达洲际.png'),
            name: '康达洲际'
          },
          {
            logo: require('../../assets/images/index/brands/logo_明峰.png'),
            name: '明峰'
          },
          {
            logo: require('../../assets/images/index/brands/logo_朗润.png'),
            name: '朗润'
          },
          {
            logo: require('../../assets/images/index/brands/logo_联影.png'),
            name: '联影'
          },
          {
            logo: require('../../assets/images/index/brands/logo_飞利浦.png'),
            name: '飞利浦'
          },
          {
            logo: require('../../assets/images/index/brands/logo_佳能.png'),
            name: '佳能'
          }

        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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

      img {
        width: 100%;
        // max-width: 115px;
        height: 50px;
        transform: scale(1);
        transition: all .3s ease-in-out;
      }

      span {
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
