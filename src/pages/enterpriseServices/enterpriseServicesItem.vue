<template>
  <div>
    <div class=" flex-start-center services-item" v-for="(item,index) in list" :key="index" @click="toCompany">
      <div class="flex-column-between-start services-item-info">
        <div class="company-name">{{item.companyName}}</div>
        <div class="flex-start-start info-item">
          <div class="key">公司简介</div>
          <div class="value limit3">{{item.companyInfo}}</div>
        </div>
        <div class="flex-start-start info-item">
          <div class="key">店铺分类</div>
          <div class="value">{{item.classification}}</div>
        </div>
        <div class="flex-start-start info-item">
          <div class="key">公司简介</div>
          <div class="value limit1">{{item.address}}</div>
        </div>
      </div>
      <ul class="flex-between-center">
        <li v-for="(imgItem,i) in item.imgList" :key="i">
          <img :src="imgItem" alt="">
          <div class="mask"><span>{{item.companyInfo}}</span></div>
        </li>
      </ul>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 4,
        list: [{
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金，微信，支付宝，对公转账等多种方式',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
          },
          {
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
          },
          {
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
          },
          {
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
          },
          {
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
          },
          {
            companyName: '哈哈哈无限公司',
            companyInfo: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金',
            classification: '医用磁共振吧',
            address: '浙江杭州',
            imgList: [
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
              require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            ]
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
      },
      toCompany() {
        this.$router.push({
          path: '/shopHome'
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

      li {
        position: relative;
        width: 170px;
        overflow: hidden;

        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
        }

        .mask {
          // display: none;
          position: absolute;
          top: 100%;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #000000;
          opacity: 0.4;
          border-radius: 10px;
          box-sizing: border-box;
          padding: 25px 15px 25px 15px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          transition: top 1s, left 1s;

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
