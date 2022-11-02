<template>
  <div class="personal-box">
    <div class="left">
      <div class="user">
        <div class="img-name">
          <img src="../../../assets/images/index/buyer/pic_Buyer_Default.png" alt="">
          <span>用户昵称啊</span>
        </div>
        <ul class="address-myinfo">
          <li>我的收货地址</li>
          <li>我的信息</li>
        </ul>
      </div>
      <!-- 订单模块 -->
      <div class="order">
        <div class="order-state">
          <div class="order-state-item">
            <div class="img-box">
              <img class="no-select" src="../../../assets/images/index/buyer/icon_paid.png" alt="">
              <img class="selected" src="../../../assets/images/index/buyer/icon_paid_Selected.png" alt="">
            </div>
            <span>待付款</span>
          </div>
          <div class="order-state-item">
            <div class="img-box">
              <img class="no-select" src="../../../assets/images/index/buyer/icon_examine.png" alt="">
              <img class="selected" src="../../../assets/images/index/buyer/icon_examine_Selected.png" alt="">
            </div>
            <span>待审核</span>
          </div>
          <div class="order-state-item">
            <div class="img-box">
              <img class="no-select" src="../../../assets/images/index/buyer/icon_received.png" alt="">
              <img class="selected" src="../../../assets/images/index/buyer/icon_received_Selected.png" alt="">
            </div>
            <span>待收货</span>
          </div>
          <div class="order-state-item">
            <div class="img-box">
              <img class="no-select" src="../../../assets/images/index/buyer/icon_After_sales.png" alt="">
              <img class="selected" src="../../../assets/images/index/buyer/icon_After_sales_Selected.png" alt="">
              
            </div>
            <span>退款售后</span>
          </div>
          <div class="order-state-item">
            <div class="img-box">
              <img class="no-select" src="../../../assets/images/index/buyer/icon_All_Orders.png" alt="">
              <img class="selected" src="../../../assets/images/index/buyer/icon_All_Orders_Selected.png" alt="">
            </div>
            <span>全部订单</span>
          </div>
        </div>
        <div class="order-item">
          <div class="order-item-left">
            <img src="../../../assets/images/index/buyer/pic_order_01.png" alt="">
            <div class="state-time">
              <span>退款中</span>
              <div class="time">2026-12-28 18:26:58 <span>剩余时间：<font>71:59:59</font></span> </div>
            </div>
          </div>
          <ul class="order-item-right">
            <li>物流明细</li>
            <li>查看详情</li>
          </ul>
        </div>
        <div class="order-item">
          <div class="order-item-left">
            <img src="../../../assets/images/index/buyer/pic_order_01.png" alt="">
            <div class="state-time">
              <span>退款中</span>
              <div class="time">2026-12-28 18:26:58 <span>剩余时间：<font>71:59:59</font></span> </div>
            </div>
          </div>
          <ul class="order-item-right">
            <li>物流明细</li>
            <li>查看详情</li>
          </ul>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="guess">
        <div class="guess-top">根据浏览，猜你需要</div>
        <div class="guess-main">
          <div class="guess-main-left">
            <img src="../../../assets/images/index/buyer/pic_tag_ppsb.png" alt="" class="icon-img">
            <div class="img-div">
              <img src="../../../assets/images/index/buyer/pic_personal_recommend.png" alt="">
            </div>
            <span class="name">飞利浦核磁共振 CT线圈</span>
            <span class="price"><span class="money">￥</span>议价</span>
          </div>
          <div class="guess-main-right">
            <div class="goods-item">
              <img src="../../../assets/images/index/buyer/pic_personal_recommend_1.png" alt="">
              <div class="info">
                <span>飞利浦核磁线圈核磁共振 CT线圈</span>
                <div class="price">
                  <font class="money">￥</font>议价
                </div>
              </div>
            </div>
            <div class="goods-item">
              <img src="../../../assets/images/index/buyer/pic_personal_recommend_1.png" alt="">
              <div class="info">
                <span>飞利浦核磁线圈核磁共振 CT线圈</span>
                <div class="price">
                  <font class="money">￥</font>议价
                </div>
              </div>
            </div>
            <div class="goods-item">
              <img src="../../../assets/images/index/buyer/pic_personal_recommend_1.png" alt="">
              <div class="info">
                <span>飞利浦核磁线圈核磁共振 CT线圈</span>
                <div class="price">
                  <font class="money">￥</font>议价
                </div>
              </div>
            </div>
            <div class="goods-item">
              <img src="../../../assets/images/index/buyer/pic_personal_recommend_1.png" alt="">
              <div class="info">
                <span>飞利浦核磁线圈核磁共振 CT线圈</span>
                <div class="price">
                  <font class="money">￥</font>议价
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="right">
      <div class="QR-code">
        <div class="white-bg">
          <div class="remark">有疑问，<font class="bule">就扫它</font>
          </div>
          <div class="border-code">
            <img src="../../../assets/images/index/buyer/pic_erweima.png" alt="">
          </div>
        </div>
        <div class="bottom-banner">
          扫描咨询官方客服
        </div>
      </div>
      <div class="bottom-advertisement">
        <img src="../../../assets/images/index/buyer/pic_left.png" alt="">
      </div>
    </div>
  </div>


</template>

<script>
</script>

<style lang="less" scoped>
  .personal-box {
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .left {
      width: 710px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: 20px;

      .user {
        background-color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;

        .img-name {
          flex: 1;
          height: 60px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }

          span {
            margin-left: 20px;
            margin-top: 12px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
        }

        .address-myinfo {
          margin-top: 20px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            cursor: pointer;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            padding-right: 30px;
            border-right: 1px solid #CCCCCC;
          }

          li:last-child {
            padding-left: 30px;
            padding-right: 0px;
            border-right: none;
          }
        }

      }

      // 订单模块
      .order {
        width: 710px;
        background-color: #fff;
        margin-bottom: 20px;

        // 不同的订单状态
        .order-state {
          height: 110px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid #F3F3F3;

          .order-state-item {
            width: 90px;
            height: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .no-select {
              display: block;
            }

            .selected {
              display: none;
            }

            .img-box {
              width: 35px;
              height: 35px;
            }

            span {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
            }
          }

          .order-state-item:hover {
            box-shadow: 0 0 16px 0 rgba(0, 0, 0, .1);

            .no-select {
              display: none;
            }

            .selected {
              display: block;
            }
          }
        }

        .order-item {
          height: 100px;
          width: 665px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0px;
          margin: 0px 25px 0px 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #F3F3F3;

          .order-item-left {
            width: 470px;
            display: flex;
            justify-content: flex-start;

            img {
              width: 70px;
              height: 70px;
            }

            .state-time {
              margin-left: 20px;
              width: 400px;
              height: 70px;
              display: flex;
              justify-content: space-around;
              align-items: flex-start;
              flex-direction: column;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;

              .time {
                span {
                  margin-left: 20px;

                  font {
                    color: #E60000;
                  }
                }
              }
            }
          }

          .order-item-right {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
              cursor: pointer;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              padding-right: 20px;
              border-right: 1px solid #CCCCCC;
            }

            li:last-child {
              padding-left: 20px;
              padding-right: 0px;
              border-right: none;
            }
          }
        }
      }

      // 猜你喜欢
      .guess {
        width: 710px;
        background-color: #fff;

        .guess-top {
          width: 100%;
          height: 40px;
          background: #92D5FF;
          padding-left: 20px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FEFEFE;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .guess-main {
          padding: 15px 20px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .guess-main-left {
            width: 200px;
            height: 240px;
            background: #F7F8F9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            position: relative;
            padding: 30px 34px 15px 30px;
            box-sizing: border-box;

            .icon-img {
              position: absolute;
              width: 75px;
              height: 34px;
              left: -10px;
              top: 0px;
            }

            .img-div {
              padding-left: 2px;
              width: 130px;
              height: 140px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .name {
              width: 100%;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .price {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #E60000;

              .money {
                font-size: 12px;
              }
            }
          }

          .guess-main-right {
            flex: 1;
            height: 240px;
            margin-left: 20px;
            display: grid;
            grid-template-columns: repeat(2, auto);

            .goods-item {
              width: 215px;
              height: 110px;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              padding: 10px 0px;
              box-sizing: border-box;

              img {
                width: 90px;
                height: 90px;
                margin-right: 6px;
              }

              .info {
                display: flex;
                flex: 1;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;

                span {
                  font-size: 12px;
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

                .price {
                  width: 100%;
                  font-size: 14px;
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #E60000;

                  .money {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }


      }

    }

    .right {
      .QR-code {
        width: 300px;
        height: 140px;
        margin-bottom: 20px;
        position: relative;

        .white-bg {
          width: 285px;
          height: 100%;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .remark {
            flex: 1;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            text-align: center;
          }

          .bule {
            color: #40A9FF;
          }

          .border-code {
            width: 135px;
            height: 135px;
            border: 3px solid #40A9FF;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              border-radius: 6px;
              width: 125px;
              height: 125px;
              z-index: 1;
            }
          }

        }

        .bottom-banner {
          width: 100%;
          height: 40px;
          position: absolute;
          left: 0px;
          bottom: 0px;
          padding-left: 16px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 40px;
          box-sizing: border-box;
          background-image: url('../../../assets/images/index/buyer/pic_erweima_line.png');
        }
      }

      .bottom-advertisement {
        width: 300px;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

  }
</style>
