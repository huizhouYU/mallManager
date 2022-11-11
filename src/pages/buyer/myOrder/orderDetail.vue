<template>
  <div class="flex-column-start-center order-detail-box">
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
        <div class="order-info-detail">
          <div class="flex-start-center title">订单详情</div>
          <div class="info-item">
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">收件人信息：</span>
              <span class="flex-start-center item-value one-line">冯宝宝（188 8888 8888）</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">收货地址：</span>
              <span class="flex-start-center item-value two-line">上海市静安区汶水路210号静安新业坊3号楼遇见博物馆</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">订单编号：</span>
              <span class="flex-start-center item-value one-line">8698689268928695</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">买家留言：</span>
              <span class="flex-start-center item-value one-line">你参加有限公司</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">卖家留言：</span>
              <span class="flex-start-center item-value one-line">下斯诺克实现实现数据库回家...</span>
            </div>
          </div>
        </div>
        <div class="order-info-statue">
          <div class="order-info-statue-top">
            <div class="statue-opt">
              <span>当前状态： 待审核 </span>
              <button>取消订单</button>
            </div>
            <div class="marginTop">尊敬的用户，您的订单还在审核中，请耐心等待</div>
            <div class="marginTop">该订单为您保留<font class="red-color">1小时58分6秒</font>(自下单起算)，订单若未在保留时间内通过审核，系统将自动取消该订单。
            </div>
          </div>
          <div class="order-info-statue-bottom">
            <img src="../../../assets/images/index/buyer/pic_warning_deladdress.png" alt="">
            <span>重要提醒：医界商城及营销商不会以订单异常、系统升级为由要求你点击任何网址链接进行金额操作，遇见问题烦请联系医界商城</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单商品 -->
    <div class="order-good">
      <div class="flex-start-center order-good-title">
        <div class="flex-center-center goods">商品</div>
        <div class="flex-center-center price">单价</div>
        <div class="flex-center-center num">数量</div>
        <div class="flex-center-center operation">操作</div>
      </div>
      <div class="flex-start-center goods-item">
        <div class="goods">
          <img src="../../../assets/images/index/demand/pic_gongqiu_qg.png" alt="">
          <div class="good-inf">
            <div class="good-name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
            <span>AR8888</span>
          </div>
        </div>
        <div class="flex-start-center price">999.99</div>
        <div class="flex-start-center num">1</div>
        <div class="flex-column-start-center operation">
          <div>待审核</div>
          <div class="red-color">1时58分6秒</div>
        </div>
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

  .flex-column-start-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-center-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      border-bottom: 1px solid #F6F6F6;
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
        margin-bottom: 25px;
        width: 100%;
        height: 204px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;

        .order-info-detail {
          width: 280px;
          height: 100%;
          border-right: 1px solid #EEEEEE;
          box-sizing: border-box;

          .title {
            padding-left: 14px;
            height: 34px;
            width: 100%;
            background: #F6F6F6;
            box-sizing: border-box;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }

          .info-item {
            padding: 15px 14px;
            width: 100%;
            height: 170px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .item {
              width: 100%;

              .item-key {
                width: 76px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #939393;
              }

              .item-value {
                flex: 1;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
              }

              .one-line {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              .two-line {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }

        .order-info-statue {
          width: 920px;
          height: 100%;
          box-sizing: border-box;
          padding: 34px 30px 20px 56px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;

          .order-info-statue-top {
            width: 100%;

            .statue-opt {
              display: flex;
              justify-content: space-between;
              align-items: center;

              span {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
              }

              button {
                background: #F3F3F3;
                border: 1px solid #D3D4D6;
                border-radius: 4px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #909399;
                padding: 6px 10px;
                outline: none;
              }

              button:hover {
                background-color: #40A9FF;
                color: #fff;
              }
            }

            .marginTop {
              margin-top: 10px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;

              .red-color {
                color: #E81111;
              }
            }
          }

          .order-info-statue-bottom {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;

            img {
              width: 13px;
              height: 11px;
              margin-left: 5px;
            }
          }

        }
      }
    }

    // 订单商品
    .order-good {
      width: 1200px;
      border: 1px solid #EEEEEE;

      .order-good-title {
        width: 100%;
        height: 34px;
        background: #F6F6F6;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }

      .goods {
        width: 600px;
      }

      .price,
      .num,
      .operation {
        width: 200px;
      }

      .goods-item {
        height: 154px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        .red-color {
          color: #E81111;
        }

        .goods {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          img {
            margin: 0px 20px;
            width: 80px;
            height: 80px;
          }

          .good-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }

          .good-name {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          span {
            margin-top: 10px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #939393;
          }
        }

      }
    }

  }
</style>
