<template>
  <div class="index-body">
    <!-- 侧边固定部分 -->
    <ul class="side-fixing">
      <!-- 购物车 -->
      <li class="shoppingcart" @click="toShoppingcart">
        <i class="iconfont">&#xe60f;</i>
      </li>
      <!-- 客服 -->
      <li class="service">
        <el-popover placement="left" trigger="hover" popper-class="service-tips-con" style="left: 1420px;">
          <div class="service-content" slot="default">
            <img src="../../assets/images/index/buyer/pic_erweima.png" alt="">

          <span>扫一扫 联系客服</span>
          </div>
          <i slot="reference" class="iconfont">&#xe645;</i>
        </el-popover>
      </li>
      <!-- 回到顶部 -->
      <li class="top" @click="goTop">
        <i class="iconfont">&#xe780;</i>
      </li>
    </ul>

    <!-- 首页banner图 -->
    <div class="top-banner" v-show="!hiddenTopImg">
      <img src="../../assets/images/index/banner_top.png" alt="">
      <div class="del-icon-div" @click="hiddenTopImg=true">
        <i class="iconfont">&#xe8e7;</i>
      </div>

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
        <el-popover placement="bottom-start" width="215" trigger="hover" v-show="isShowContent"  :visible-arrow="false">
          <div slot="reference" class="main-tab-content-left">
            <img src="../../assets/images/index/icon_hamburger.png" alt="">
            <span class="title">品牌分类</span>
          </div>
          <!-- 悬浮 品牌分类 展示内容 -->
          <div class="brand-classification">
            <div width="240px" class="main-aside">
              <ul class="brand-nav-box">
                <li v-for="(item,index) in brandList" :key="item.id" @mouseenter="enterClass(item.id)"
                  @mouseout="leaveClass()">{{item.name}}
                  <i class="iconfont">&#xe63c;</i>
                </li>
              </ul>
              <div class="more-brands">
                <p>更多分类</p>
                <img src="../../assets/images/index/double-right.png" alt="">
              </div>
            </div>
            <!-- 左侧导航条悬浮显示的内容 -->
            <div class="more-classification" v-show="isShow" @mouseover="enterClass('')" @mouseout="leaveClass()">
              <div class="item" v-for="(item,index) in classDatas" :key="index">
                <div class="title">{{item.name}}</div>
                <ul>
                  <li v-for="(child,ind) in item.childers" :key="ind">{{child.name}}</li>
                </ul>
              </div>
            </div>
          </div>
        </el-popover>
        <div slot="reference" class="main-tab-content-left" v-show="!isShowContent">
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
        hiddenTopImg: false,
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
        ],
        isShow: false,
        isShowContent: false,
        brandList: [{
            id: '1',
            name: '西门子'
          },
          {
            id: '2',
            name: '东软'
          },
          {
            id: '3',
            name: '万东'
          },
          {
            id: '4',
            name: '安科'
          },
          {
            id: '5',
            name: '明峰'
          },
          {
            id: '6',
            name: '万东'
          },
          {
            id: '7',
            name: '新奥博伟'
          },
          {
            id: '8',
            name: '鑫高益'
          },
          {
            id: '9',
            name: '贝斯达'
          },

          {
            id: '10',
            name: '开普/宽腾'
          },
          {
            id: '11',
            name: '联影'
          },
          {
            id: '12',
            name: '朗润'
          },
          {
            id: '13',
            name: '康达洲际'
          },

        ],
        classDatas: [{
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          },
          {
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          },
          {
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          },
          {
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          },
          {
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          },
          {
            id: '1',
            name: '分子影像成像系统',
            childers: [{
                id: '1-1',
                name: '英特拉阿奇瓦 1.5T'
              },
              {
                id: '1-2',
                name: '全景0.23T'
              },
              {
                id: '1-3',
                name: '全景1.0T'
              },
              {
                id: '1-4',
                name: '多瓦 1.5T'
              },
              {
                id: '1-5',
                name: '英特拉 1.5T'
              },
              {
                id: '1-6',
                name: '英特网'
              },
              {
                id: '1-7',
                name: '全景1.0T'
              },
              {
                id: '1-8',
                name: '多瓦 1.5T'
              },
              {
                id: '1-9',
                name: '英特拉 1.5T'
              },
              {
                id: '1-10',
                name: '英特网'
              },
              {
                id: '1-11',
                name: '全景1.0T'
              },
              {
                id: '1-12',
                name: '多瓦 1.5T'
              }
            ]
          }
        ]
      }
    },
    mounted() {},
    methods: {
      enterClass(id) {
        //根据id去请求classDatas数据
        this.isShow = true
      },
      leaveClass() {
        // console.log("离开", this.isShow)
        this.isShow = false
      },
      changeTab(key) {
        this.chooseTab = key
        if (this.chooseTab != '0') {
          this.isShowContent = true
        } else {
          this.isShowContent = false
        }
      },
      jumpTab(path, index) {
        this.chooseTab = index
        if (this.chooseTab != '0') {
          this.isShowContent = true
        } else {
          this.isShowContent = false
        }
        // console.log("this.chooseTab:", this.chooseTab)
        this.$router.replace({
          path: path
        })

      },
      toShoppingcart(){
        this.changeTab("-1");
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      enterClass(id) {
        //根据id去请求classDatas数据
        this.isShow = true
      },
      leaveClass() {
        console.log("离开", this.isShow)
        this.isShow = false
      },
      //回到顶部
      goTop(){
       document.documentElement.scrollTop = 0;
      }
    }
  }
</script>
<style lang="less">
  /**写样式要注意，写在不带scoped的 style 里 */
  // 修改下面的小三角，属性名根据组件的placement位置做相应修改

  .el-popper[x-placement^=left] .popper__arrow {
    border-left-color: #fff;
  }

  .el-popover {
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

  .side-fixing {
    position: fixed;
    width: 48px;
    height: 146px;
    background: #FFFFFF;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    right: 10px;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    z-index: 999;

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
      background: #F9F9F9;

      i {
        transform: scale(1.3);
        color: #40A9FF;
      }

    }

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
    // position: fixed;
    width: 100%;
    height: 100px;
    overflow: hidden;
    // top: 0;
    // left: 0;
    // z-index: 99;

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
    // position: sticky;
    // top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    z-index: 99;
  }

  /* 模块一 头部 */
  .module0-header {
    position: sticky;
    // top: 30px;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
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
        width: 100%;
        height: 530px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
          height: calc((100%)/10);
          box-sizing: border-box;
          background-color: #fff;
          padding: 0px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }

        li:hover {
          background-color: #E6F7FF;
          color: #40A9FF;
        }

      }


      .more-brands {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    .more-classification {
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
</style>
