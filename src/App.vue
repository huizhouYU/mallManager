<template>
  <div id="app">
    <!-- 侧边固定部分 -->
    <ul class="flex-column-start-center side-fixing">
      <!-- 购物车 -->
      <!-- <li class="shoppingcart" @click="toShoppingcart">
        <i class="iconfont">&#xe60f;</i>
      </li> -->
      <!-- 客服 -->
      <li class="flex-column-center-center select-item service-item">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/pic_service.png" alt="">
        </div>
        <span>客服</span>
        <div class="flex-column-center-center hidden-part">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_erweima.png" alt="">
          <span>联系客服</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item" @click="findGoods">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_zhaohuo_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_zhaohuo_sel.png" alt="" class="sel-img">
        </div>
        <span>找货</span>
        <div class="flex-column-center-center hidden-part only-font-hidden-part">
          <span>为您找货</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_phone_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_phone_sel.png" alt="" class="sel-img">
        </div>
        <span>手机端</span>
        <div class="flex-column-center-center hidden-part">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_xiaochengxu.jpg" alt="">
          <span>小程序</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item" @click="goTop">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_top_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_top_sel.png" alt="" class="sel-img">
        </div>
        <span>顶部</span>
        <div class="flex-column-center-center hidden-part only-font-hidden-part">
          <span>回到顶部</span>
        </div>
      </li>
      <!-- <li class="service">
        <div class="flex-column-center-center select-item service-content">
          <img src="../src/assets/images/index/buyer/pic_erweima.png" alt="">
          <span>扫一扫 联系客服</span>
        </div>
        <i class="iconfont">&#xe61e;</i>
      </li>-->
      <!-- 找货 -->
      <!-- <li class="service">
        <div class="flex-column-center-center select-item find-goods">
          <img src="../src/assets/images/icon_cate.png" alt="">
          <span>找货</span>
        </div>
        <i class="iconfont">&#xe61e;</i>
      </li> -->
      <!-- 回到顶部 -->
      <!--    <li class="top" @click="goTop">
        <i class="iconfont">&#xe780;</i>
      </li> -->
    </ul>
    <router-view ref="child" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      toShoppingcart() {
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      //回到顶部
      goTop() {
        document.documentElement.scrollTop = 0;
      },
      // 找货
      findGoods() {
        this.$refs.child.openVisible();
      }
    }
  }
</script>

<style>
  #app {
    /* background-color: #2c3e50; */
    height: 100vh;
  }
</style>
<style lang="less" scoped>
  .side-fixing {
    position: fixed;
    // background: #FFFFFF;
    top: 50%;
    right: 10px;
    padding: 10px;
    box-sizing: border-box;
    z-index: 999;

    .select-item {
      cursor: pointer;
      position: relative;
      width: 60px;
      height: 60px;
      background: #FFFFFF;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 12px;
      margin-bottom: 2px;

      .img-box {
        width: 20px;
        // height: 20px;
        box-sizing: border-box;
        margin-bottom: 5px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .def-img {
          display: block;
        }

        .sel-img {
          display: none;
        }
      }

      .hidden-part {
        display: none;
        position: absolute;
        top: 50%;
        left: -70px;
        // height: 100px;
        // width: 100%;
        padding: 10px;
        background: #FFFFFF;
        box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.1);
        transform: translate(-50%, -50%);
        border-radius: 4px;
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #333333;

        img {
          width: 100px;
          height: 100px;
          margin-bottom: 6px;
          object-fit: contain;
        }
      }

      .only-font-hidden-part {
        left: -44px;
        transform: translate(-50%, -50%);
      }

      .hidden-part::after {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: -16px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent transparent #FFFFFF;

      }
    }

    .select-item:hover {
      background: #239BFF;
      color: #FFFFFF;

      .img-box {

        .def-img {
          display: none;
        }

        .sel-img {
          display: block;
        }
      }

      .hidden-part {
        display: flex;
      }
    }

    .service-item {
      height: 70px;

      .img-box {
        width: 36px;
        height: 36px;
        box-sizing: border-box;
      }
    }
  }


  // .side-fixing {
  //   position: fixed;
  //   width: 48px;
  //   // height: 146px;
  //   background: #FFFFFF;
  //   box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  //   border-radius: 24px;
  //   right: 10px;
  //   top: 50%;
  //   padding: 10px;
  //   box-sizing: border-box;
  //   z-index: 999;



  //   .shoppingcart {
  //     i {
  //       font-size: 22px;
  //     }
  //   }

  //   .service:hover {
  //     .service-content {
  //       display: flex;
  //     }
  //   }

  //   .service {
  //     position: relative;


  //     .service-content {
  //       display: none;
  //       position: absolute;
  //       background: #FFFFFF;
  //       padding-bottom: 10px;
  //       box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  //       width: 116px;
  //       box-sizing: border-box;
  //       left: -135px;
  //       top: -44px;
  //       font-size: 12px;

  //       img {
  //         width: 96px;
  //         height: 96px;
  //         box-sizing: border-box;
  //         margin: 10px;
  //       }
  //     }

  //     .service-content::after {
  //       display: block;
  //       position: absolute;
  //       content: '';
  //       top: 50%;
  //       right: -16px;
  //       transform: translateY(-50%);
  //       width: 0;
  //       height: 0;
  //       border: 10px solid;
  //       border-color: transparent transparent transparent #FFFFFF;
  //     }
  //   }

  //   li {
  //     width: 36px;
  //     height: 36px;
  //     background: #FFFFFF;
  //     border-radius: 50%;
  //     cursor: pointer;
  //     box-sizing: border-box;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;

  //     i {
  //       font-size: 20px;
  //     }
  //   }

  //   li:hover {
  //     // background: #F9F9F9;

  //     i {
  //       transform: scale(1.3);
  //       color: #40A9FF;
  //     }
  //   }

  // }
</style>
