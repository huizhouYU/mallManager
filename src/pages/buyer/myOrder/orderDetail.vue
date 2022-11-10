<template>
  <div class="flex-column-cente-center order-detail-box">
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <!-- 医界圈 搜索 -->
    <div class="flex-center-center yijiequan-select-div">
      <index-header class="index-header"></index-header>
    </div>
    <!-- 订单详情 -->
    <div class="order-detail-content">
      <span class="order-no">订单中心 > 订单228886666899</span>
      <!-- 订单状态进度条 -->
      <div class="flex-start-center status-process">
        <div :class="['flex-start-center','progress-item',{'over':item.flag == 1},{'in-progress':item.flag == 0}]"
          v-for="(item,index) in statusProgressList" :key="index">
          <div class="flex-center-center bule-or-gray">
            <template v-if="item.flag!='1' ">
              {{index+1}}
            </template>
            <template v-else>
              <i class="iconfont">&#xebe6;</i>
            </template>
          </div>
          <span class="progress-name">{{item.name}}</span>
          <div class="line" v-show="index!=statusProgressList.length-1"></div>
          <div class="progress-time" v-if="item.flag=='1' ">{{item.time}}</div>
        </div>
      </div>
      <!-- 订单详情 -->
      <div class="flex-start-center order-info">
        <div class="order-info-detail"></div>
        <div class="order-info-statue"></div>
      </div>
    </div>
    <!-- 底部 -->
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import headerTitle from '../../index/headerTitle.vue'
  import indexHeader from '../../index/indexHeader.vue'
  import indexBottom from '../../index/indexBottom.vue'
  export default {
    components: {
      headerTitle,
      indexHeader,
      indexBottom
    },
    data() {
      return {
        statusProgressList: [{
            name: '待审核',
            time: '2022-12-28 18:56:58',
            flag: 1
          },
          {
            name: '待付款',
            time: '2022-12-28 18:56:58',
            flag: 0
          },
          {
            name: '待发货',
            time: '2022-12-28 18:56:58',
            flag: -1
          },
          {
            name: '待收货',
            time: '2022-12-28 18:56:58',
            flag: -1
          },
          {
            name: '已完成',
            time: '2022-12-28 18:56:58',
            flag: -1
          }
        ]
      }
    }
  }
</script>

<style lang="less" scode>
  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-start-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-cente-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  // 整个页面 滚动条
  .order-detail-box::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .order-detail-box {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;

    // 顶部模块 购物车
    .shop-box {
      position: fixed;
      box-sizing: border-box;
      width: 100vw;
      height: 34px;
      background-color: #f5f5f5;
      z-index: 999;
    }

    // 医界圈 搜索
    .yijiequan-select-div {
      position: fixed;
      box-sizing: border-box;
      margin-top: 34px;
      height: 120px;
      width: 100vw;
      background-color: #fff;
      z-index: 999;
    }

    // 订单详情div
    .order-detail-content {
      width: 1200px;
      margin-top: 154px;
      box-sizing: border-box;

      .order-no {
        display: block;
        margin-top: 30px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #939393;
      }

      // 订单进度
      .status-process {
        width: 100%;
        height: 80px;

        .progress-item {
          position: relative;
          width: 240px;
          box-sizing: border-box;

          .bule-or-gray {
            margin: 0px 10px;
            box-sizing: border-box;
            width: 28px;
            height: 28px;
            background: #F2F3F4;
            border-radius: 50%;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
          }

          //环节名称
          .progress-name {
            display: block;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #777777;
          }

          .line {
            margin-left: 10px;
            box-sizing: border-box;
            height: 1px;
            width: 125px;
            background: #FEFEFE;
            border: 1px solid #E5E6EB;
          }

          .progress-time {
            position: absolute;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            bottom: -80%;
            left: 50px;
          }
        }

        //正在进行的进度条样式
        .in-progress {
          .bule-or-gray {
            background: #40A9FF;
            color: #fff;
          }

          //环节名称
          .progress-name {
            color: #40A9FF;
          }

          .line {
            border: 1px solid #40A9FF;
          }

          .progress-time {
            color: #40A9FF;
          }
        }

        //完成的进度条样式
        .over {
          .bule-or-gray {
            background: #E8F3FF;
            color: #40A9FF;
          }

          .line {
            border: 1px solid #40A9FF;
          }
        }
      }

      // 订单详情
      .order-info {
        margin-top: 30px;
        width: 100%;
        height: 203px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;

        .order-info-detail {
          width: 280px;
          box-sizing: border-box;
        }

        .order-info-statue {
          width: 920px;
          box-sizing: border-box;
        }
      }
    }

  }
</style>
