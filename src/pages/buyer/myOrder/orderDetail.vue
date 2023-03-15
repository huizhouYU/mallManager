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
      <span class="order-no">订单中心 > 订单{{orderDetail.orderNo}}</span>
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
      <!-- 物流信息 -->
      <!-- :style="{height:logisticsHeight}" -->
      <div class="logistics-info-div" v-if="orderDetail.orderStatue == 3">
        <div class="flex-start-center logistics-info-company">
          <div class="item-span">
            <span>快递公司：</span><span class="font-weight">德邦物流</span>
          </div>
          <div class="item-span">
            <span>快递单号：</span><span class="font-weight">89658965896698</span>
          </div>
        </div>
        <el-timeline :reverse="false" class="my-el-timeline">
          <el-timeline-item v-for="(activity, index) in showLogisticsList" :key="index">
            {{activity.timestamp}} {{activity.content}}
            <span class="open-more" v-if="index==0" @click="openMore">展开更多
              <i class="iconfont" v-if="!showMore">&#xe601;</i>
              <i class="iconfont" v-if="showMore">&#xe733;</i>
            </span>
          </el-timeline-item>
        </el-timeline>
      </div>
      <!-- 订单详情 -->
      <div class="flex-start-center order-info">
        <div class="order-info-detail">
          <div class="flex-start-center title">订单详情</div>
          <div class="info-item">
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">收件人信息：</span>
              <span
                class="flex-start-center item-value one-line">{{orderDetail.recipientName}}（{{orderDetail.tel}}）</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">收货地址：</span>
              <span class="flex-start-center item-value two-line">{{orderDetail.address}}</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">订单编号：</span>
              <span class="flex-start-center item-value one-line">{{orderDetail.orderNo}}</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">店铺名称：</span>
              <span class="flex-start-center item-value one-line">{{orderDetail.storeName||'-'}}</span>
            </div>
            <div class="flex-start-center item">
              <span class="flex-start-center item-key">买家留言：</span>
              <span class="flex-start-center item-value one-line">{{orderDetail.buyerMsg||'-'}}</span>
            </div>
          </div>
        </div>
        <div class="order-info-statue">
          <div class="order-info-statue-top">
            <div class="statue-opt">
              <span>当前状态：
                <template v-if="orderDetail.orderStatue == '0'">待审核</template>
                <template v-else-if="orderDetail.orderStatue == '1'">待付款
                  <button class="immediately-pay">立即支付</button>
                </template>
                <template v-else-if="orderDetail.orderStatue == '2'">待发货</template>
                <template v-else-if="orderDetail.orderStatue == '3'">待收货
                  <button class="immediately-pay">确认收货</button>
                </template>
                <template v-else-if="orderDetail.orderStatue == '4'">已完成</template>
              </span>
              <template
                v-if="orderDetail.orderStatue == '0' || orderDetail.orderStatue == '1'"><button>取消订单</button></template>
              <template
                v-if="orderDetail.orderStatue == '2' || orderDetail.orderStatue == '3' "><button>申请退款</button></template>
            </div>
            <div class="marginTop">
              <template v-if="orderDetail.orderStatue == '0'">尊敬的用户，您的订单还在审核中，请耐心等待</template>
              <template v-else-if="orderDetail.orderStatue == '1'">尊敬的用户，该订单暂未支付成功，请您尽快支付（<font class="bule-color">立即支付
                </font>）</template>
              <template v-else-if="orderDetail.orderStatue == '2'">尊敬的用户，您已付款，等待卖家发货。</template>
              <template v-else-if="orderDetail.orderStatue == '3'">尊敬的用户，您的订单已在运输中， 请耐心等候。</template>
              <template v-else-if="orderDetail.orderStatue == '4'">尊敬的用户，感谢您对医界商城的支持！</template>
            </div>
            <div class="marginTop">
              <template v-if="orderDetail.orderStatue == '0' || orderDetail.orderStatue == '1'">
                该订单为您保留<font class="red-color">{{orderDetail.surplusTime}}</font>
                (自下单起算)，
                <template v-if="orderDetail.orderStatue == '0'">订单若未在保留时间内通过审核，</template>
                <template v-else-if="orderDetail.orderStatue == '1'">订单若未在保留时间内支付，</template>
                系统将自动取消该订单。
              </template>
              <template v-if="orderDetail.orderStatue == '2' ">付款后如果卖家没有按照约定时间发货，可以联系卖家，您如果也不想再要货物，可以申请退款。</template>
              <template
                v-if="orderDetail.orderStatue == '3' ">配送时间：受疫情影响，物流时效可能延迟，您还有12天20小时48分53秒;来确认收货,超时订单自动确认收货。</template>


            </div>
          </div>
          <div class="order-info-statue-bottom">
            <img src="../../../assets/images/index/buyer/pic_warning_deladdress.png" alt="">
            <span>重要提醒：医界商城及营销商不会以订单异常、系统升级为由要求你点击任何网址链接进行金额操作，遇见问题烦请联系医界商城</span>
            <span class="bule-font">官方客服</span>
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
        <div class="flex-start-center goods-item" v-for="(item,index) in orderDetail.goods" :key="index">
          <div class="goods">
            <img :src="item.imgUrl" alt="">
            <div class="good-info">
              <div class="good-name">{{item.name}}</div>
              <span>{{item.modle}}</span>
            </div>
          </div>
          <div class="flex-column-start-center price">{{item.price}}</div>
          <div class="flex-column-start-center num">{{item.num}}</div>
          <div class="flex-column-start-center operation" v-if="index == 0">
            <template v-if="orderDetail.orderStatue == '0'">
              <div>待审核</div>
            </template>
            <template v-if="orderDetail.orderStatue == '1'">
              <div>立即支付</div>
            </template>
            <template v-if="orderDetail.orderStatue == '2'">
              <div>待发货</div>
            </template>
            <template v-if="orderDetail.orderStatue == '3'">
              <div>确认收货</div>
            </template>
            <template v-if="orderDetail.orderStatue == '4'">
              <div>交易成功</div>
            </template>
            <template v-if="orderDetail.orderStatue != '2' && orderDetail.orderStatue != '4'">
              <div class="red-color">{{orderDetail.surplusTime}}</div>
            </template>

          </div>
        </div>
      </div>
      <!-- 订单价格详情 -->
      <div class="flex-column-between-end order-sum-price-info">
        <!-- 商品总价 -->
        <div class="flex-between-center order-good-sum-price-item">
          <span class="title-key">商品总价：</span>
          <span>￥{{orderDetail.money}}</span>
        </div>
        <!-- 运费（快递） -->
        <div class="flex-between-center order-good-sum-price-item">
          <span class="title-key">运费（快递）：</span>
          <span>￥{{orderDetail.freight}}</span>
        </div>
        <!-- 实付款 -->
        <div class="flex-between-center order-good-sum-price-item totle-price">
          <span class="title-key">实付款：</span>
          <span class="red-weight">￥{{orderDetail.payment}}</span>
        </div>
      </div>

    </div>
    <div class="gray-div">
      <span>.</span>
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
        ],
        orderDetail: {
          orderNo: '228886666899', //订单号
          orderStatue: '3', //状态：0：待审核，1：待付款，2：待发货，3：待收货，4：已完成
          time0: '2022-12-28 18:56:58',
          time1: '2022-12-28 18:56:58',
          time2: '2022-12-28 18:56:58',
          time3: '2022-12-28 18:56:58',
          time4: '2022-12-28 18:56:58',
          storeName: '你参加有限公司',
          //收件人信息
          recipientName: '冯宝宝',
          tel: '188 8888 8888',
          address: '上海市静安区汶水路210号静安新业坊3号楼遇见博物馆',
          buyerMsg: '',
          surplusTime: '1小时58分6秒',
          goods: [{
              imgUrl: require('../../../assets/images/index/demand/pic_gongqiu_qg.png'),
              name: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称品名称商品名称商品名称商品名称',
              modle: 'AR8888',
              price: '999.99',
              num: '1',
            },
            {
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称品名称商品名称商品名称商品名称',
              modle: 'AR8888',
              price: '999.99',
              num: '1',
            }
          ],
          money: '999.99',
          freight: '0.00',
          payment: '999.99'
        },
        logisticsList: [{
            content: '[杭州市]快件已从萧山物流中转站出发，正发往浙江市金华服务物流服务中心',
            timestamp: '2008-12-28 18:26:58'
          }, {
            content: '[杭州市]快件已到达杭州市',
            timestamp: '2008-12-27 18:26:58'
          }, {
            content: '[西安市]快件已从北郊中转营业部出发，正发往杭州市',
            timestamp: '2008-12-27 18:26:58'
          },
          {
            content: '[西安市]快件已到达西安转运中心',
            timestamp: '2008-12-27 18:26:58'
          },
          {
            content: '[上海市]快件已从上海保税区营业部发出，正在发往西安转运中心',
            timestamp: '2008-12-27 18:26:58'
          },
          {
            content: '[上海市]您的包裹已由物流公司揽收',
            timestamp: '2008-12-27 18:26:58'
          },
          {
            content: '包裹正在等待揽收',
            timestamp: '2008-12-27 18:26:58'
          },
          {
            content: '商品已下单',
            timestamp: '2008-12-27 18:26:58'
          }
        ],
        showLogisticsList: [],
        showMore: false
      }
    },
    mounted() {
      var i = this.orderDetail.orderStatue
      for (var index in this.statusProgressList) {
        if (index < i) {
          this.statusProgressList[index].time = this.orderDetail['time' + index]
          this.statusProgressList[index].flag = 1
        } else if (index == i) {
          this.statusProgressList[index].flag = 0
          this.statusProgressList[index].time = ''
        } else {
          this.statusProgressList[index].flag = -1
          this.statusProgressList[index].time = ''
        }
      }
      if (i == '4') {
        this.statusProgressList[4].flag = 1
        this.statusProgressList[4].time = this.orderDetail.time4
      }
      if (this.showMore) {
        this.showLogisticsList = this.logisticsList
      } else {
        this.showLogisticsList = []
        this.showLogisticsList.push(this.logisticsList[0])
      }

    },
    methods: {
      openMore() {
        this.showMore = !this.showMore
        if (this.showMore) {
          this.showLogisticsList = this.logisticsList
        } else {
          this.showLogisticsList = []
          this.showLogisticsList.push(this.logisticsList[0])
        }
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

  .flex-end-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-around-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .flex-column-start-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-between-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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
      border-bottom: 2px solid #F6F6F6;
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

      // 物流信息
      .logistics-info-div {
        margin-top: 30px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        padding: 30px 20px 10px 20px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #6C6C6C;
        overflow: hidden;

        // 快递公司
        .logistics-info-company {
          .item-span {
            margin-right: 30px;
          }

          .font-weight {
            color: #343434;
          }
        }

        .my-el-timeline {
          margin-top: 22px;

          // 展开更多
          .open-more {
            cursor: pointer;
            margin-left: 20px;
          }
        }

        .el-timeline-item__tail {
          height: 58%;
          top: 36%;
          left: 3px;
        }

        .el-timeline-item__node--normal {
          left: 0px;
          top: 4px;
          width: 8px;
          height: 8px;
        }

        .el-timeline-item__content {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #6C6C6C;
        }

        .el-timeline-item:first-child {
          .el-timeline-item__node--normal {
            box-shadow: 0px 0px 4px rgba(245, 63, 63, .8);
            // background: #FBACA3;
          }

          .el-timeline-item__node {
            background-color: #F53F3F;
          }

          .el-timeline-item__content {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #F53F3F;
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

              .immediately-pay {
                margin-left: 24px;
                cursor: pointer;
                border-radius: 4px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                background-color: #40A9FF;
                color: #fff;
                padding: 6px 10px;
                outline: none;
              }

              .immediately-pay:hover {
                background-color: #3a9bea;
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

              .bule-color {
                color: #8DCFFF;
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

            .bule-font {
              color: #8DCFFF;
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

        .goods-item:last-child {
          padding-bottom: 20px;
        }

        .goods-item {
          // height: 154px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
          padding-top: 20px;

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
              height: 80px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-around;
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

          .price,
          .num,
          .operation {
            width: 200px;
            height: 80px;
          }

        }
      }

      // 订单价格详情
      .order-sum-price-info {
        width: 100%;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin: 25px 0px 25px;
        box-sizing: border-box;

        // 商品总价
        .order-good-sum-price-item {
          width: 250px;

          .title-key {
            width: 122px;
            text-align: right;
          }

          .red-weight {
            font-weight: 700;
            font-size: 14px;
            font-family: Microsoft YaHei;
            color: #E60000;
          }
        }

        .order-good-sum-price-item+.order-good-sum-price-item {
          margin-top: 10px;
        }

        .totle-price {
          margin-top: 20px !important;
          padding-top: 20px;
          border-top: 1px solid #EEEEEE;
        }
      }

    }

    .gray-div {
      height: 20px;
      width: 100%;
      background-color: #F5F5F5;
      color: #F5F5F5;
      box-sizing: border-box;
    }




  }
</style>
