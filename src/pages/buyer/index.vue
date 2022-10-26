<template>
  <div class="buyer-box">
    <!-- 侧边导航栏 -->
    <div class="side-navigation">
      <div class="public-menu">
        <span class="title">个人首页</span>
        <ul>
          <li>个人资料</li>
          <li>收货地址</li>
        </ul>
      </div>
      <div class="public-menu">
        <span class="title">购物车</span>
      </div>
      <div class="public-menu">
        <span class="title">所有订单</span>
        <ul>
          <li>待付款</li>
          <li>待审核</li>
          <li>待发货</li>
          <li>待收货</li>
        </ul>
      </div>
      <div class="public-menu">
        <span class="title">退款订单</span>
        <ul>
          <li>退款中</li>
          <li>已退款</li>
        </ul>
      </div>
    </div>
    <router-view class="buyer-main"></router-view>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .buyer-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    // 侧边导航栏
    .side-navigation {
      width: 150px;
      background-color: #fff;

      .public-menu {
        padding: 20px 25px;
        border-bottom: 1px solid #F3F3F3;

        .title {
          cursor: pointer;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 20px;

          li {
            cursor: pointer;
            margin-bottom: 15px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }

          li:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }

    .buyer-main {
      margin-left: 20px;
      width: 1030px;
    }
  }
</style>
