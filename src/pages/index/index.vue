<template>
  <div class="index-body">

    <!-- 首页banner图 -->
    <div class="top-banner" v-show="!hiddenTopImg">
      <img src="../../assets/images/index/banner_top.png" alt="">
      <div class="del-icon-div" @click="hiddenTopImg=true">
        <i class="iconfont">&#xe8e7;</i>
      </div>

    </div>
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
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
    <!-- <index-tab></index-tab> -->
    <div class="main-tab">
      <div class="flex-start-center main-tab-content">
        <el-popover placement="bottom-start" width="215" trigger="hover" v-show="isShowContent" :visible-arrow="false">
          <div slot="reference" class="main-tab-content-left">
            <img src="../../assets/images/index/icon_hamburger.png" alt="">
            <span class="title">品牌分类</span>
          </div>
          <!-- 悬浮 品牌分类 展示内容 -->
          <div class="brand-classification">
            <div width="240px" class="main-aside">
              <ul class="brand-nav-box">
                <li v-for="(item,index) in brandList" :key="item.cateId" class="flex-between-center"
                  @mouseenter="enterClass(index)">{{item.cateName}}
                  <i class="iconfont">&#xe63c;</i>
                </li>
                <!-- 左侧导航条悬浮显示的内容 -->
                <div class="more-classification">
                  <div class="item" v-for="(item,index) in classDatas" :key="index">
                    <div class="title" @click="jumpToGood(item,'2')">{{item.cateName}}</div>
                    <ul>
                      <li v-for="(child,ind) in item.children" :key="ind" @click="jumpToGood(child,'3')">
                        {{child.cateName}}
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </el-popover>
        <div class="main-tab-content-left" v-show="!isShowContent">
          <img src="../../assets/images/index/icon_hamburger.png" alt="">
          <span class="title">品牌分类</span>
        </div>
        <div class="main-tab-content-right">
          <ul class="flex-start-center">
            <li v-for="(item,index) in tabList" :key="index" :class="{'selected':chooseTab==item.path}"
              @click="jumpTab(item.path)">{{item.title}}
              <img src="../../assets/images/index/icon_hot.png" alt="" v-if="item.isHot">
              <img src="../../assets/images/index/icon_new_red.png" alt="" v-else-if="item.isNew">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view class="each-module" :brandList='brandList' @topImg="topImg"></router-view>
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import indexHeader from '../../pages/index/indexHeader.vue'
  import headerTitle from '../../pages/index/headerTitle.vue'
  import serviceItem4Page from '../../pages/index/serviceItem4Page.vue'
  import serviceItem5Page from '../../pages/index/serviceItem5Page.vue'
  import indexBottom from '../../pages/index/indexBottom.vue'
  import {
    categoryList
  } from '@/api/index'
  export default {
    components: {
      indexHeader,
      headerTitle,
      serviceItem4Page,
      serviceItem5Page,
      indexBottom
    },
    props: {
      hiddenTopImg: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        // hiddenTopImg: false,
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
            path: '/medicalApparatus'
          },
          {
            title: '企业服务',
            isHot: false,
            isNew: true,
            path: '/enterpriseServices'
          },
          // {
          //   title: '学习园地',
          //   isHot: false,
          //   path: ''
          // },
          // {
          //   title: '工程师服务',
          //   isHot: false,
          //   isNew: false,
          //   path: ''
          // },
          {
            title: '合作品牌',
            isHot: false,
            isNew: false,
            path: '/cooperationBrand'
          },
        ],
        isShowContent: false,
        brandList: [],
        classDatas: [],
        chosedLevel: []
      }
    },
    mounted() {
      this.goTop()
      var path = this.$route.fullPath
      this.chooseTab = path
      this.getData()
    },
    watch: {
      $route(to, from) {
        if (to.fullPath != from.fullPath) {
          this.chooseTab = to.fullPath
          if (this.chooseTab != '/home') {
            this.isShowContent = true
          } else {
            this.isShowContent = false
          }
        }
      }
    },
    methods: {
      getData() {
        if (this.chooseTab != '/home') {
          this.isShowContent = true
        } else {
          this.isShowContent = false
        }

        //获取分类
        categoryList().then(response => {
          if (response.code == 10000) {
            this.brandList = response.data
          } else {
            this.brandList = []
          }
        })
      },
      enterClass(index) {
        //根据id去请求classDatas数据
        if (this.brandList[index].children != undefined && this.brandList[index].children.length > 0) {
          this.classDatas = this.brandList[index].children
        } else {
          this.classDatas = []
        }
      },
      jumpTab(path) {
        this.chooseTab = path
        if (this.chooseTab != '/home') {
          this.isShowContent = true
        } else {
          this.isShowContent = false
        }
        var params = {}
        if (path == '/medicalApparatus') {
          params = {
            goodsType: 'equipment'
          }
        }
        var newPath =  this.$router.resolve({
          path: path,
          query: params,
          replace: true
        })
        window.open(newPath.href,'_blank')

      },
      jumpToGood(item, level) {
        this.getChosedLevel(item.cateName, item.parentId, level)
        var newPath =  this.$router.resolve({
          path: '/medicalApparatus',
          query: {
            cateId: item.cateId,
            goodsType: item.goodsType,
            chosedLevel: this.chosedLevel.join(' / ')
          }
        })
        this.chooseTab = '-1'
        console.log("hhh")
        window.open(newPath.href,'_blank')
      },
      getChosedLevel(name, parerntId, level) {
        this.chosedLevel = []
        for (var i in this.brandList) {
          if (level == '3') {
            for (var y in this.brandList[i].children) {
              if (this.brandList[i].children[y].cateId == parerntId) {
                this.chosedLevel.push(this.brandList[i].cateName)
                this.chosedLevel.push(this.brandList[i].children[y].cateName)
                this.chosedLevel.push(name)
                return
              }
            }
          } else if (level == '2') {
            if (this.brandList[i].cateId == parerntId) {
              this.chosedLevel.push(this.brandList[i].cateName)
              this.chosedLevel.push(name)
              return
            }
          }
        }
      },
      //回到顶部
      goTop() {
        document.documentElement.scrollTop = 0;
      },
      topImg(val){
        this.hiddenTopImg = val
      }
    }
  }
</script>
<style lang="less">
  //   /**写样式要注意，写在不带scoped的 style 里 */
  //   // 修改下面的小三角，属性名根据组件的placement位置做相应修改

  .el-popper[x-placement^=left] .popper__arrow {
    border-left-color: #fff;
  }

  .el-popper[x-placement^=bottom] {
    margin-top: 0;
  }

  .el-popover {
    padding: 0px;
    min-width: 96px;
    margin-right: 30px !important;
  }

  .service-tips-con {
    width: 110px;
    background-color: red;
    box-sizing: border-box;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;

    .service-content {
      max-width: 110px;
      font-size: 12px;

      img {
        width: 96px;
        height: 96px;
      }

    }
  }
</style>
<style scoped lang="less">
  // 首页整体
  .index-body {
    width: 100%;
    min-width: 1200px;
    background-color: #f5f5f5;
    position: relative;
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
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100px;
    }

    .del-icon-div {
      box-sizing: border-box;
      cursor: pointer;
      position: absolute;
      height: 25px;
      width: 25px;
      top: -8px;
      right: -6px;
      font-size: 14px;
      border-radius: 50%;
      color: #fff;
      background-color: #989898;

      i {
        position: absolute;
        bottom: 1px;
        left: 3px;
      }
    }
  }

  // 顶部模块 购物车
  .shop-box {
    background-color: #f5f5f5;
    height: 30px;
    z-index: 99;
  }

  /* 模块一 头部 */
  .module0-header {
    position: sticky;
    top: 0px;
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
    height: 40px;
    width: 100%;
    background-color: #fff;

    .main-tab-content {
      position: relative;
      width: 1200px;
      height: 100%;
      background-color: #fff;
      margin-left: 50%;
      transform: translate(-50%, 0);
      box-sizing: border-box;
      border-bottom: 1px solid #F6F6F6;

      //品牌分类
      .main-tab-content-left {
        width: 240px;
        height: 40px;
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
    padding-bottom: 20px;
  }

  .brand-classification {
    position: absolute;
    left: 0px;

    // 左侧导航
    .main-aside {
      width: 240px;
      height: 100%;
      box-sizing: border-box;
      padding-bottom: 10px;
      display: flex;
      flex-direction: column;
      background-color: #fff;

      img {
        width: 100%;
        height: 60px;
      }

      .brand-nav-box {
        position: relative;
        width: 100%;
        height: 590px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
          height: calc((100%)/10);
          box-sizing: border-box;
          background-color: #fff;
          padding: 0px 15px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }

        li:hover {
          background-color: #E6F7FF;
          color: #40A9FF;
        }

        //更改每个模块滚动条样式
        .more-classification::-webkit-scrollbar {
          width: 6px;
        }

        .more-classification::-webkit-scrollbar-thumb {
          border-radius: 10px;
          box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.2);
        }

        .more-classification::-webkit-scrollbar-track {
          box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
          border-radius: 0;
          background: rgba(0, 0, 0, 0);
        }

        .more-classification {
          display: none;
          width: 730px;
          height: 600px;
          background-color: #fff;
          position: absolute;
          top: 0px;
          left: 240px;
          overflow-y: auto;
          padding: 35px 20px 40px 30px;
          box-sizing: border-box;
          box-shadow: 0px 0px 10px 5px #eee;

          .item:last-child {
            padding-bottom: 0;
          }

          .item {
            padding-bottom: 30px;

            .title {
              padding: 2px 0px 2px 10px;
              border-left: 1px solid #40A9FF;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
            }

            ul {
              display: flex;
              flex-wrap: wrap;
              margin-top: 10px;

              li {
                margin: 5px 10px 5px 0px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #555555;
                cursor: pointer;
              }

              li:hover {
                color: #40A9FF;
              }
            }
          }
        }
      }

      .brand-nav-box:hover {
        .more-classification {
          display: block;
        }
      }


      .more-brands {
        height: 60px;
        box-sizing: border-box;
        padding: 0px 15px;
        background-color: #F4FBFF;

        p {
          color: #333;
          font-size: 16px;
        }

        img {
          width: 22px;
          height: 22px;
        }
      }
    }


  }
</style>
