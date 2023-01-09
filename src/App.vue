<template>
  <div id="app">
    <!-- 侧边固定部分 -->
    <ul class="flex-column-between-center side-fixing">
      <!-- 购物车 -->
      <!-- <li class="shoppingcart" @click="toShoppingcart">
        <i class="iconfont">&#xe60f;</i>
      </li>
      <div class="line"></div> -->
      <!-- 客服 -->
      <li class="service">
        <div class="flex-column-center-center service-content">
          <img src="../src/assets/images/index/buyer/pic_erweima.png" alt="">
          <span>扫一扫 联系客服</span>
        </div>
        <i class="iconfont">&#xe61e;</i>
      </li>
      <div class="line"></div>
      <!-- 回到顶部 -->
      <li class="top" @click="goTop">
        <i class="iconfont">&#xe780;</i>
      </li>
    </ul>
    <router-view />
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
    width: 48px;
    // height: 146px;
    background: #FFFFFF;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    right: 10px;
    top: 50%;
    padding: 10px;
    box-sizing: border-box;
    z-index: 999;

    .line {
      width: 20px;
      border-top: 1px solid #EDEDEC;
      margin: 4px 0px;
    }

    .shoppingcart {
      i {
        font-size: 22px;
      }
    }

    .service:hover {
      .service-content {
        display: flex;
      }
    }

    .service {
      position: relative;

      .service-content {
        display: none;
        position: absolute;
        background: #FFFFFF;
        padding-bottom: 10px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        width: 116px;
        box-sizing: border-box;
        left: -135px;
        top: -44px;
        font-size: 12px;

        img {
          width: 96px;
          height: 96px;
          box-sizing: border-box;
          margin: 10px;
        }
      }

      .service-content::after {
        display: block;
        position: absolute;
        content: '';
        top: 50%;
        right: -16px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent transparent #FFFFFF;
      }
    }

    li {
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      border-radius: 50%;
      cursor: pointer;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 20px;
      }
    }

    li:hover {
      // background: #F9F9F9;

      i {
        transform: scale(1.3);
        color: #40A9FF;
      }
    }

  }
</style>
