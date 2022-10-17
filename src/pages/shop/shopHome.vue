<template>
  <div class="shop-home-box">
    <div class="shop-home-box-left">
      <div class="left-top">
        <div class="shop-logo">
          <img src="../../assets/images/shop/pic_shoplogo_default.png" alt="">
        </div>
        <div class="shop-name">
          <img src="../../assets/images/index/icon_qi.png" alt="">
          <span>迅即网络科技有限公司</span>
        </div>
      </div>
    </div>
    <div class="shop-home-box-right"></div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .shop-home-box {
    display: flex;
    justify-content: center;
    padding-top: 20px;

    .shop-home-box-left {
      width: 230px;
      margin-right: 20px;
      .left-top{
        height: 576px;
        width: 100%;
        padding: 20px 10px 40px 10px;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        background-color: #fff;
        border-top: 2px solid #40A9FF;
        // 店铺logo
        .shop-logo{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          padding: 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #F5F5F5;
          margin-bottom: 13px;
          img{
            width: 82px;
            height: 74px;
          }
        }
        // 店铺名称
        .shop-name{
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 18px;
            height: 20px;
            margin-right: 6px;
          }
          span{
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
            line-height: 10px;
          }

        }
      }
    }

    .shop-home-box-right {
      width: 950px;
    }
  }
</style>
