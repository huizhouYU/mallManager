<template>
  <div class="header-title-box">
    <div class="shop-content-item">
      <ul>
        <li>您好，欢迎来到医界商城！</li>
        <li>请登录</li>
        <li class="bule_font">免费注册</li>
        <li>客服热线：400-010-1866</li>
      </ul>
    </div>
    <div class="shop-content-item shop-content-right">
      <ul>
        <li @click="toIndex">医界圈首页</li>
        <li @click="toShopCart">购物车</li>
        <!-- <li>我的收藏</li> -->
        <li class="yellow_font" @click="personCenter">
          <img src="../../assets/images/index/icon_vip.png" alt="">
          会员中心
        </li>
        <li>管理后台</li>
        <li class="bule_font">供应商入驻</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  methods:{
    toIndex(){
      this.$emit("changeTab",'0')
      this.$router.push({
        path:'/'
      })
    },
    toShopCart(){
      this.$emit("changeTab",'-1')
      this.$router.push({
        path:'/shoppingCart'
      })
    },
    personCenter(){
      this.$emit("changeTab",'-1')
      this.$router.push({
        path: '/buyer',
        query: {
          // id: id
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
  // 顶部模块 购物车
  .header-title-box {
    background-color: #f5f5f5;
    // position: fixed;
    // top: 100px;
    // left: 50%;
    // transform: translate(-50%, 0);
    // height: 30px;
    // width: 100%;
    // z-index: 99;
    display: flex;
    width: 1200px;

    .shop-content-item {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #696969;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          cursor: pointer;
          padding-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 16px;
            height: 14px;
            margin-right: 4px;
          }
        }
      }

      .yellow_font {
        color: #F5C164;
      }

      .bule_font {
        color: #40A9FF;
      }
    }

    .shop-content-right {
      justify-content: flex-end;

      ul {
        li {
          padding-right: 0px;
          padding-left: 10px;
        }
      }
    }
  }
</style>
