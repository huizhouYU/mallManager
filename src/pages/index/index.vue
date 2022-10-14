<template>
  <div class="index-body">
    <!-- 首页banner图 -->
    <div class="top-banner">
      <img src="../../assets/images/index/banner_top.png" alt="">
    </div>
    <!-- 顶部模块 购物车 -->
    <div class="shop-box">
      <header-title></header-title>
    </div>
    <!-- 模块一 -->
    <el-container class="module0-header">
      <!-- 头部搜索一栏 -->
      <el-header>
        <index-header class="index-header"></index-header>
      </el-header>
    </el-container>
    <!-- 主要模块 -->
    <div class="main-tab">
      <div class="main-tab-content">
        <div class="main-tab-content-left">
          <img src="../../assets/images/index/icon_hamburger.png" alt="">
          <span class="title">品牌分类</span>
        </div>
        <div class="main-tab-content-right">
          <ul>
            <li v-for="(item,index) in tabList" :key="index" :class="{'selected':chooseTab==index}"
              @click="jumpTab(item.path,index)">{{item.title}}
              <img src="../../assets/images/index/icon_hot.png" alt="" v-if="item.isHot">
              <img src="../../assets/images/index/icon_new_red.png" alt="" v-else-if="item.isNew">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view class="each-module"></router-view>
    <!-- 模块七 四大模块 -->
    <div class="model7-box">
      <div class="content">
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">资金安全</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>

      </div>
    </div>
    <!-- 模块八 关于商城 -->
    <div class="modle8-box">
      <div class="content">
        <div class="item-left">
          <div class="left-item1">
            <p class="title">关于商城</p>
            <p class="remark">
              360商城是奇虎360公司的官方电商平台，主要经营
              360安全智能设备，以及相关领域消费品。提供最新
              的360智能设备，最贴心的售后服务，360社区一手
              评测资讯，享受360安全、安心、放心的购物体验。
            </p>
            <div class="about-we">
              <p>关于我们</p>
              <img src="../../assets/images/index/wx.png" alt="">
              <img src="../../assets/images/index/xl.png" alt="">

            </div>
          </div>
          <div class="left-item2">
            <p class="title">售后服务</p>
            <ul>
              <li>7日无理由退货</li>
              <li>质量问题15日内换货</li>
              <li>保修条款</li>
              <li>服务流程</li>
              <li>许可协议</li>
              <li>隐私政策</li>
            </ul>
          </div>
        </div>
        <div class="item-right">
          <div class="right-item1">
            <p class="title">帮助中心</p>
            <ul>
              <li>用户注册</li>
              <li>会员说明</li>
              <li>登录与密码找回</li>
              <li>购买指南</li>
              <li>支付方式</li>
              <li>配送与说明</li>
            </ul>
          </div>
          <div class="right-item2">
            <p class="title">联系我们</p>
            <div class="remark"> </div>
            <p class="mobile">400-123-1234</p>
            <p class="time">周一至周日 9:00-18:00（仅收市话费）</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 模块九 底部链接 -->
    <div class="modle9-bottom">
      <p class="item1"> ©2019-2021 yijiequan.cn版权所有 </p>
      <p class="item2">京ICP备08010314号-6</p>
      <p class="item3">公司名称：医界网络科技（安徽）有限公司 | 社会统一信用代码：91110105336460203N</p>
    </div>
  </div>
</template>

<script>
  import indexHeader from '../../pages/index/indexHeader.vue'
  import headerTitle from '../../pages/index/headerTitle.vue'
  import serviceItem4Page from '../../pages/index/serviceItem4Page.vue'
  import serviceItem5Page from '../../pages/index/serviceItem5Page.vue'
  export default {
    components: {
      indexHeader,
      headerTitle,
      serviceItem4Page,
      serviceItem5Page
    },
    data() {
      return {
        chooseTab: 0,
        //顶部导航栏
        tabList: [{
            title: '首页',
            isHot: false,
            isNew: false,
            path: '/home'
          },
          {
            title: '配件专区',
            isHot: true,
            isNew: false,
            path: '/accessory'
          },
          {
            title: '供求信息',
            isHot: false,
            isNew: false,
            path: '/supplyDemand'
          },
          {
            title: '医疗器械',
            isHot: false,
            isNew: false,
            path: ''
          },
          {
            title: '企业服务',
            isHot: false,
            isNew: true,
            path: ''
          },
          {
            title: '学习园地',
            isHot: false,
            path: ''
          },
          {
            title: '工程师服务',
            isHot: false,
            isNew: false,
            path: ''
          },
          {
            title: '合作品牌',
            isHot: false,
            isNew: false,
            path: '/cooperationBrand'
          },
        ]

      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData() {
        this.jumpTab('/home', 0)
      },
      jumpTab(path, index) {
        this.chooseTab = index
        this.$router.replace({
          path: path
        })
      },
      enterClass(id) {
        //根据id去请求classDatas数据
        this.isShow = true
      },
      leaveClass() {
        console.log("离开", this.isShow)
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="less">
  // 首页整体
  .index-body {
    width: 100%;
    min-width: 1200px;
    background-color: #f5f5f5;
    position: relative;
    padding-top: 235px;
  }

  /* 清除浮动 */
  .clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }

  // 首页banner图
  .top-banner {
    position: fixed;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 99;

    img {
      width: 100%;
      height: 100px;
    }
  }

  // 顶部模块 购物车
  .shop-box {
    background-color: #f5f5f5;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 30px;
    width: 100%;
    z-index: 99;
    display: flex;
    width: 1200px;
  }

  /* 模块一 头部 */
  .module0-header {
    position: fixed;
    top: 130px;
    left: 0;
    width: 100%;
    height: 105px;
    background-color: #fff;
    z-index: 99;

    .el-header {
      margin: auto;
      padding: 0;
    }
  }

  // 主要模块
  .main-tab {
    position: fixed;
    height: 40px;
    width: 100%;
    background-color: #fff;
    z-index: 99;

    .main-tab-content {

      width: 1200px;
      height: 100%;
      background-color: #fff;
      margin-left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 1px solid #F6F6F6;

      //品牌分类
      .main-tab-content-left {
        width: 240px;
        height: 100%;
        background-color: #8DCFFF;
        border-radius: 10px 10px 0px 0px;
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 15px;
          margin: 0px 10px 0px 20px;
        }

        .title {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #FFFFFF;
        }
      }

      //顶部导航栏
      .main-tab-content-right {
        display: flex;
        align-items: center;
        height: 100%;

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
          padding-left: 40px;
          box-sizing: border-box;

          li {
            cursor: pointer;
            margin-right: 40px;
            font-size: 16px;
            padding: 0px 5px;
            font-family: Microsoft YaHei;
            color: #333;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            box-sizing: border-box;

            img {
              position: absolute;
              top: 0px;
              right: -20px;
              animation: movepoint .5s infinite;
            }
          }

          li:hover,
          .selected {
            color: #40A9FF;
            border-bottom: 2px solid #40A9FF;
            margin-bottom: 2px;
          }

          @keyframes movepoint {
            50% {
              top: 1px;
            }

            100% {
              top: 0px;
            }
          }
        }
      }
    }
  }

  .each-module {
    margin-top: 40px;
    width: 1200px;
    margin: auto;
    padding-top: 40px;
  }



  // 模块七 四大模块
  .model7-box {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 25px;
    border-bottom: 1px solid #eee;

    .content {
      width: 1200px;
      height: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 56px;
          height: 56px;
        }

        .title {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 12px;

          .name {
            font-size: 20px;
            color: #333;
          }

          .remark {
            font-size: 12px;
            color: #999;
          }
        }

      }
    }
  }

  // 模块八 关于商城
  .modle8-box {
    width: 100%;
    height: 350px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    .content {
      width: 1200px;
      height: 350px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 60px 0px;

      .item-left,
      .item-right {
        width: 600px;
        height: 100%;
        box-sizing: border-box;
        display: flex;

        .title {
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 600;
          color: #333333;
          margin-bottom: 40px;
        }

        ul {
          li {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            margin: 10px 0px;
            cursor: pointer;
          }
        }

      }

      .left-item1 {
        width: 430px;
        height: 100%;

        .remark {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          width: 340px;
          line-height: 24px;
        }

        .about-we {
          margin-top: 30px;
          padding-top: 30px;
          width: 340px;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: start;

          p {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            margin-right: 20px;
          }

          img {
            width: 22px;
            height: 18px;
            margin-right: 20px;
          }
        }
      }

      .left-item2 {
        width: 170px;
        height: 100%;
      }

      .right-item1 {
        padding-left: 20px;
        width: 250px;
        height: 100%;
      }

      .right-item2 {
        width: 350px;
        height: 100%;
        border-left: 1px solid #eee;

        .title {
          text-align: center;
        }

        .remark {
          display: flex;
          flex-direction: column;
        }

        .mobile {
          font-size: 28px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          text-align: center;
        }

        .time {
          margin-top: 15px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
          text-align: center;
        }
      }
    }

  }

  // 模块九 底部链接
  .modle9-bottom {
    background-color: #fff;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    box-sizing: border-box;

    p {
      font-size: 12px;
      color: #999;
      text-align: center;
    }
  }
</style>
