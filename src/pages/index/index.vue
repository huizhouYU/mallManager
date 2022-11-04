<template>
  <div class="index-body">
    <!-- 首页banner图 -->
    <div class="top-banner">
      <img src="../../assets/images/index/banner_top.png" alt="">
    </div>
    <!-- 顶部模块 购物车 -->
    <div class="shop-box">
      <header-title @changeTab="changeTab"></header-title>
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
    <router-view class="each-module" @changeTab="changeTab"></router-view>
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import indexHeader from '../../pages/index/indexHeader.vue'
  import headerTitle from '../../pages/index/headerTitle.vue'
  import serviceItem4Page from '../../pages/index/serviceItem4Page.vue'
  import serviceItem5Page from '../../pages/index/serviceItem5Page.vue'
  import indexBottom from '../../pages/index/indexBottom.vue'
  export default {
    components: {
      indexHeader,
      headerTitle,
      serviceItem4Page,
      serviceItem5Page,
      indexBottom
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
    },
    methods: {
      changeTab(key){
        this.chooseTab = key
      },
      jumpTab(path, index) {
        this.chooseTab = index
         console.log("this.chooseTab:",this.chooseTab)
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
</style>
