<template>
  <div class="all-orders-box">
    <!-- 主要订单状态+ 搜索框 -->
    <div class="order-statue-select-div">
      <ul class="main-order-statue">
        <li :class="{'selected':item.id ==selectedStaute }" v-for="(item,index) in this.mainOrderStatue" :key="index"
          @click="selectedStaute=item.id">{{item.statue}}</li>
      </ul>
      <div class="selected-div">
        <input type="text" placeholder="商品名称/商品编号/订单号">
        <button>
          <img src="../../../assets/images/index/buyer/order/icon_order_search.png" alt="">
        </button>
      </div>
    </div>
    <!-- 表头 -->
    <div class="table-header">
      <div class="flex-cente-center good">商品</div>
      <div class="flex-cente-center price">单价</div>
      <div class="flex-cente-center num">数量</div>
      <div class="flex-cente-center money">实付款</div>
      <div class="flex-cente-center statue">交易状态</div>
      <div class="flex-cente-center operation">操作</div>
    </div>
    <!-- 循环每一个订单 -->
    <div v-for="(order,index) in orderList" :key="index" class="order-box">
      <table>
        <!-- 订单头部信息 -->
        <tr>
          <td colspan="6">
            <div class="order-header-div">
              <div class="flex-cente-center order-header-info">
                <span class="flex-cente-center">{{order.orderTime}}</span>
                <span class="flex-cente-center order-no">订单编号：{{order.orderNo}}
                  <template v-if="order.payWay == 1">
                    <img src="../../../assets/images/index/buyer/order/icon_Alipay_square.png" alt="" title="支付宝支付">
                  </template>
                  <template v-else-if="order.payWay == 2">
                    <img src="../../../assets/images/index/buyer/order/icon_WeChat_square.png" alt="" title="微信支付">
                  </template>
                  <template v-else-if="order.payWay == 3">
                    <img src="../../../assets/images/index/buyer/order/icon_duigong_square.png" alt="" title="对公转账">
                  </template>
                </span>
                <span class="flex-cente-center">{{order.storeName}}</span>
              </div>
              <i class="iconfont">&#xe607;</i>
            </div>
          </td>
        </tr>
        <!-- 一个订单商品信息 -->
        <tr>
          <!-- 商品信息 -->
          <td colspan="3" class="">
            <div class="good-info-div">
              <div class="good-info-item" v-for="(good,ind) in order.goods" :key="ind">
                <div class="flex-start-center good">
                  <img :src="good.imgUrl" alt="">
                  <div class="good-info">
                    <span class="title">{{good.name}}</span>
                    <span class="modle"> 型号:{{good.modle}} </span>
                  </div>
                </div>
                <div class="flex-column-start-center price">￥{{good.price}}</div>
                <div class="flex-column-start-center price">{{good.num}}</div>
              </div>
            </div>
          </td>
          <td class="border-left" valign="top">
            <div class="flex-column-start-center money">
              <span class="fontWeight7">￥{{order.money}}</span>
              <span class="color6 marginTop6">(含运费：￥0.00）</span>
            </div>
          </td>
          <td class="border-left" valign="top">
            <div class="flex-column-start-center statue">
              <template v-if="order.statue ==1">
                <span>待审核</span>
              </template>
              <template v-else-if="order.statue ==2">
                <span>待付款</span>
              </template>
              <template v-else-if="order.statue ==3">
                <span>待发货</span>
              </template>
              <template v-else-if="order.statue ==4">
                <span>待收货</span>
              </template>
              <template v-else-if="order.statue ==5">
                <span>已完成</span>
              </template>
              <template v-else-if="order.statue ==6">
                <span>已取消</span>
              </template>
              <span>订单详情</span>
            </div>
          </td>
          <td class="border-left" valign="top">
            <div class="flex-column-start-center operation">
              <template v-if="order.statue ==1">
                <span>取消订单</span>
              </template>
              <template v-else-if="order.statue ==2">
                <span>还剩{{order.surplusTime}}</span>
                <span class="bule-but">立即支付</span>
                <span>取消订单</span>
              </template>
              <template v-else-if="order.statue ==3">
                <span>申请退款</span>
              </template>
              <template v-else-if="order.statue ==4">
                <span>还剩{{order.surplusTime}}</span>
                <span class="bule-but">确认收货</span>
                <span>申请退款</span>
              </template>
              <template v-else-if="order.statue ==5">
                <span class="bule-but">立即支付</span>
              </template>
              <template v-else-if="order.statue ==6">
                <span class="bule-but">立即支付</span>
              </template>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

    </div>

    <!-- 页码 -->
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
        selectedStaute: 0,
        mainOrderStatue: [{
            id: '0',
            statue: '全部订单'
          },
          {
            id: '1',
            statue: '待审核'
          },
          {
            id: '2',
            statue: '待付款'
          },
          {
            id: '3',
            statue: '待发货'
          },
          {
            id: '4',
            statue: '待收货'
          }
        ],
        orderList: [{
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '1', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
                imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
                name: '飞利浦核磁CT线圈飞利浦核磁CT线圈',
                modle: 'AR586886',
                price: '99.9',
                num: '1'
              },
              {
                imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
                name: '飞利浦核磁CT线圈飞利浦核磁CT线圈',
                modle: 'AR586886',
                price: '99.9',
                num: '1'
              }
            ],
            money: '199.8',
            statue: '1', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
          },
          {
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '2', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '飞利浦核磁CT线圈飞利浦核磁CT线圈磁CT线圈飞利浦核磁CT磁CT线圈飞利浦核磁CT',
              modle: 'AR586886',
              price: '99.9',
              num: '1'
            }],
            surplusTime: '58:58:56',
            money: '99.9',
            statue: '2', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
          },
          {
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '1', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '飞利浦核磁CT线圈飞利浦核磁CT线圈磁CT线圈飞利',
              modle: 'AR586886',
              price: '99.9',
              num: '1'
            }],
            surplusTime: '58:58:56',
            money: '99.9',
            statue: '3', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
          },
          {
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '3', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '飞利浦核磁CT线圈飞利浦核磁CT线圈磁',
              modle: 'AR586886',
              price: '99.9',
              num: '1'
            }],
            surplusTime: '58:58:56',
            money: '99.9',
            statue: '4', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
          },
          {
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '2', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '飞利浦核磁CT线圈飞利浦核磁CT线圈磁CT线圈飞利',
              modle: 'AR586886',
              price: '99.9',
              num: '1'
            }],
            surplusTime: '58:58:56',
            money: '99.9',
            statue: '5', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
          },
          {
            orderTime: '2008-12-28 18:58:56',
            orderNo: '156786581686',
            payWay: '', //1:支付宝;2:微信;3:对公转账
            storeName: '哈哈哈无限公司',
            goods: [{
              imgUrl: require('../../../assets/images/index/buyer/pic_personal_recommend.png'),
              name: '飞利浦核磁CT线圈飞利浦核',
              modle: 'AR586886',
              price: '99.9',
              num: '1'
            }],
            surplusTime: '58:58:56',
            money: '99.9',
            statue: '6', //1:待审核;2:待付款;3:代发货;4:待收货;5:已完成;6:已取消
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
    }
  }
</script>

<style lang="less" scoped>
  .flex-cente-center {
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

  .all-orders-box {
    margin-top: 20px;
    padding: 20px;
    background: #FFFFFF;
    border-radius: 10px;

    //主要订单状态+ 搜索框
    .order-statue-select-div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      //主要订单状态
      .main-order-statue {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        li {
          cursor: pointer;
          padding: 4px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #333333;
        }

        li+li {
          margin-left: 20px;
        }

        .selected {
          color: #40A9FF;
          border-bottom: 2px solid #40A9FF;
          ;
        }
      }

      //搜索框
      .selected-div {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        input {
          width: 170px;
          height: 25px;
          background: #FEFEFE;
          border: 1px solid #DDDDDD;
          outline: none;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666;
          box-sizing: border-box;
          padding-left: 6px;
        }

        input::-webkit-input-placeholder {
          /* WebKit browsers，webkit内核浏览器 */
          color: #ccc;
          font-size: 12px;
        }

        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #ccc;
          font-size: 12px;
        }

        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #ccc;
          font-size: 12px;
        }

        input:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #ccc;
          font-size: 12px;
        }

        button {
          margin-left: -1px;
          cursor: pointer;
          width: 40px;
          height: 25px;
          background: #F4F4F4;
          border: 1px solid #DDDDDD;
          outline: none;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 12px;
            height: 12px;
          }
        }
      }
    }

    //表头
    .table-header {
      height: 30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      background: #F5F5F5;
      box-sizing: border-box;
      margin-top: 12px;
      // padding: 0px 20px;

      .good {
        margin-left: 20px;
        width: 270px;
      }

      .price,
      .num,
      .money {
        width: 130px;
      }

      .statue,
      .operation {
        width: 145px;
      }
    }

    .order-box {
      border: 1px solid #EEEEEE;
      margin-top: 20px;
      box-sizing: border-box;
      width: 100%;
    }

    table {
      width: 100%;
      padding: 0;
      border-spacing: 0;
      border: none;

      tr {
        padding: 0;
        border: none;
      }

      td {
        padding: 0;
        border: none;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #454545;
      }
      .color6{
        color: #666;
      }
      .marginTop6{
        margin-top: 6px;
      }
      .fontWeight7{
        font-weight: 700;
      }
    }

    // 订单头部信息
    .order-header-div {
      padding: 0px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      background: #F5F5F5;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;

      .order-header-info {
        span {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .order-no {
          margin: 0px 46px 0px 28px;

          img {
            cursor: pointer;
            margin-left: 6px;
            width: 14px;
            height: 14px;
          }
        }
      }

      i {
        cursor: pointer;
      }
    }

    .good-info-div {
      padding: 15px 0px;
      padding-left: 20px;

      // 商品信息
      .good-info-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;


        .good {
          width: 270px;

          img {
            width: 60px;
            height: 60px;
            margin-right: 15px;
          }

          .good-info {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-self: flex-start;
            flex-direction: column;

            .title {
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .modle {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #9E9E9E;
            }
          }
        }

        .price,
        .num {
          height: 60px;
          width: 130px;
        }
      }
    }

    .good-info-item+.good-info-item {
      margin-top: 30px;
    }

    .border-left {
      padding-top: 15px;
      border-left: 1px solid #EEEEEE;
    }

    .money {
      width: 130px;
      box-sizing: border-box;
    }

    .statue,
    .operation {
      box-sizing: border-box;
      width: 145px;
      cursor: pointer;

      .bule-but {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px 0px;
        cursor: pointer;
        padding: 4px 10px;
        height: 24px;
        background: #40A9FF;
        border-radius: 4px;
        color: #FFFFFF;
        box-sizing: border-box;
      }
    }

    .statue {
      span+span {
        margin-top: 5px;
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
