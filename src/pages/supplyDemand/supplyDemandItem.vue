<template>
  <div class="supply-demand-content">
    <div class="item-card" v-for="(item,index) in demandsList" :key="item.id">
      <img :src="item.imgPath" alt="" class="demand-img">
      <div class="demand-info">
        <div class="title-type">
          <span class="title">{{item.title}}</span>
          <span class="type">
            <template v-if="item.articleType == 1">求购设备</template>
            <template v-else-if="item.articleType == 2">项目外包</template>
            <template v-else-if="item.articleType == 3">灵活兼职</template>
          </span>
        </div>
        <div class="term">
          <div class="term-item">
            <span class="term-key">名称</span>
            <span class="term-value">{{item.name}}</span>
          </div>
          <div class="term-item">
            <span class="term-key">品牌</span>
            <span class="term-value">{{item.brand}}</span>
          </div>
          <div class="term-item">
            <span class="term-key">P/N码</span>
            <span class="term-value">{{item.PnCode}}</span>
          </div>
        </div>
        <span class="description">{{item.description}}</span>
        <div class="company">
          <img src="../../assets/images/index/icon_qi.png" alt="">
          <span class="company-name">{{item.company}}</span>
        </div>
      </div>
      <div class="contact">
        立即联系
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
  import {
    articleList
  } from '@/api/supplyDemand'
  export default {
    mounted() {
      this.getData()
    },
    data() {
      return {
        currentPage4: 4,
        demandsList: [{
            id: '1',
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            title: '高压蒸汽灭菌器故障解决',
            articleType: '1', //需求类型1-求购设备 2-项目外包 3-灵活兼职
            name: '铁线圈',
            brand: '铁线圈',
            PnCode: '铁线圈',
            description: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金结算，欢迎各界新老客户来电咨询、聊天',
            company: '哈哈哈无限公司',
            tel: '13965425452'
          },
          {
            id: '2',
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            title: '高压蒸汽灭菌器故障解决',
            articleType: '2', //需求类型1-求购设备 2-项目外包 3-灵活兼职
            name: '铁线圈',
            brand: '铁线圈',
            PnCode: '铁线圈',
            description: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金结算，欢迎各界新老客户来电咨询、聊天',
            company: '哈哈哈无限公司',
            tel: '13965425452'
          },
          {
            id: '3',
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            title: '高压蒸汽灭菌器故障解决',
            articleType: '3', //需求类型1-求购设备 2-项目外包 3-灵活兼职
            name: '铁线圈',
            brand: '铁线圈',
            PnCode: '铁线圈',
            description: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金结算，欢迎各界新老客户来电咨询、聊天',
            company: '哈哈哈无限公司',
            tel: '13965425452'
          },
          {
            id: '4',
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            title: '高压蒸汽灭菌器故障解决',
            articleType: '1', //需求类型1-求购设备 2-项目外包 3-灵活兼职
            name: '铁线圈',
            brand: '铁线圈',
            PnCode: '铁线圈',
            description: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金结算，欢迎各界新老客户来电咨询、聊天',
            company: '哈哈哈无限公司',
            tel: '13965425452'
          },
          {
            id: '5',
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            title: '高压蒸汽灭菌器故障解决',
            articleType: '3', //需求类型1-求购设备 2-项目外包 3-灵活兼职
            name: '铁线圈',
            brand: '铁线圈',
            PnCode: '铁线圈',
            description: '本公司面向全国专业回收：变压器、配电柜、高低压电机、电线电缆、电河北二手气动冲床回收，上门回收，现金结算，欢迎各界新老客户来电咨询、聊天',
            company: '哈哈哈无限公司',
            tel: '13965425452'
          }
        ]
      }
    },
    methods: {
      getData(){
        // pageNo	页码,示例值(1)	query	true
        // integer(int32)
        // pageSize	每页记录数,示例值(10)	query	true
        // integer(int32)
        // articleType	需求类型1-求购设备 2-项目外包 3-灵活兼职,示例值(1)	query	false
        // integer(int32)
        // keyType	关键字类型 title-标题 equipment-设备型号	query	false
        // string
        // keyword	搜索关键字	query	false
        // string
        var params = {
          pageNo:1,
          pageSize:10,
        }

        articleList(params).then(response => {
          console.log('供求信息-需求列表：',response)
        })
      },
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
  .supply-demand-content {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }

  .item-card {
    height: 180px;
    width: 920px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 20px 20px;
    margin-bottom: 12px;
    box-sizing: border-box;
    align-items: center;

    .demand-img {
      width: 200px;
      height: 140px;
    }

    .demand-info {
      width: 560px;
      height: 100%;
      padding: 0px 54px 0px 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .title-type {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .title {
          margin-right: 8px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #333333;
        }

        .type {
          width: 66px;
          height: 24px;
          display: inline-block;
          text-align: center;
          line-height: 24px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40A9FF;
          border: 1px solid #40A9FF;
          border-radius: 4px;
        }
      }

      .term {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .term-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-right: 6px;

          .term-key {
            background: #F4F4F4;
          }

          .term-key,
          .term-value {
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            display: inline-block;
            padding: 0px 15px;
            border: 1px solid #F4F4F4;
          }
        }
      }

      .description {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .company {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 18px;
          height: 20px;
          margin-right: 8px;
        }

        .company-name {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }
      }
    }

    .contact {
      width: 110px;
      height: 30px;
      background: #8DCFFF;
      border-radius: 4px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 30px;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
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
