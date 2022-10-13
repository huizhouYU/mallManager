<template>
  <div>
    <!-- 模块二 -->
    <el-container class="module1-content index-content">
      <!-- 主体内容 -->
      <el-container class="index-main">

        <!-- 左侧导航 -->
        <el-aside width="240px" class="main-aside">
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
        </el-aside>
        <!-- 左侧导航条悬浮显示的内容 -->
        <div class="more-classification" v-show="isShow" @mouseover="enterClass('')" @mouseout="leaveClass()">
          <div class="item" v-for="(item,index) in classDatas" :key="index">
            <div class="title">{{item.name}}</div>
            <ul>
              <li v-for="(child,ind) in item.childers" :key="ind">{{child.name}}</li>
            </ul>
          </div>
        </div>

        <!-- 右边内容-->
        <el-main>
          <!-- 中间设备列表 + 右边发布需求 -->
          <div class="main-content">
            <!-- 中间设备列表 -->
            <div class="main-content-left">
              <equip-list-cart class="equipListCart-box" @jumpAllGoods="jumpAllGoods"></equip-list-cart>
            </div>
            <!-- 右边发布需求 -->
            <div class="main-content-right">
              <!-- 发布需求 -->
              <div class="release-demand">
                <div class="login-info">
                  <div class="person-logo">
                    <img src="../../assets/images/index/icon_tx.png" alt="">
                  </div>
                  <div class="person-info">
                    <span>您好，欢迎光临</span>
                    <ul>
                      <li class="bule-font li-login">登录</li>
                      <li>注册</li>
                    </ul>
                  </div>
                </div>
                <div class="explain">
                  企业一站式服务平台,登录立即享受
                </div>
                <el-button class="btn-demand">一键发布需求</el-button>
              </div>
              <!-- 热门求购  + 设备维修-->
              <div class="hot-shop-box">
                <div class="hot-shop-box-tab">
                  <ul>
                    <li :class="{'actived':isHotTab}" @click="isHotTab=true">热门求购</li>
                    <li :class="{'actived':!isHotTab}" @click="isHotTab=false">设备维修</li>
                  </ul>
                </div>
                <!-- 热门求购 -->
                <ul class="hot-list" v-show="isHotTab">
                  <li v-for="(item,index) in hotList">
                    <template v-if="index<3">
                      <div class="list-img"></div>
                    </template>
                    <template v-else>
                      <div class="list-left-bg">
                        <div class="line"></div>
                        <div class="circle"></div>
                      </div>
                    </template>
                    <span>{{item.title}}</span>
                  </li>
                </ul>
                <!-- 设备维修 -->
                <ul class="equipment-list" v-show="!isHotTab">
                  <li v-for="(item,index) in equipmentList">
                    <template v-if="index<4">
                      <div class="list-img"></div>
                    </template>
                    <template v-else>
                      <div class="list-left-bg">
                        <div class="line"></div>
                        <div class="circle"></div>
                      </div>
                    </template>
                    <span>{{item.title}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!--各大品牌 -->
    <div class="adv_brand-adv">
      <div class="advertisement_left">
        <img src="../../assets/images/index/pic_left.png" alt="">
      </div>
      <ul class="brands">
        <li v-for="(item,index) in brandsList" :key="index">
          <img :src="item" alt="图片加载失败">
        </li>
        <li>
          <span>更多品牌</span>
          <img src="../../assets/images/index/brands/icon_double-right.png" alt="">
        </li>
      </ul>
      <div class="advertisement_right">
        <img src="../../assets/images/index/pic_right.png" alt="">
      </div>
    </div>
    <!-- 配件专区 -->
    <accessories-area class="accessories_area" :showTitle="showTitle"></accessories-area>
    <!-- 产品展示 -->
    <product-show class="product-show"></product-show>
    <!-- 企业服务 -->
    <enterprise-services class="enterprise-services"></enterprise-services>
    <!-- 个人工程师 -->
    <personal-engineer class="personal-engineer"></personal-engineer>
    <!-- 模块六 两张大图 -->
    <div class="modle6-pic">
      <img src="../../assets/images/index/pic_jineng.png" alt="">
      <img src="../../assets/images/index/pic_xuqiu.png" alt="">
    </div>
  </div>
</template>

<script>
  import brandNav from '../../pages/index/brandNav.vue'
  import equipListCart from '../../pages/index/equipListCart.vue'
  import accessoriesArea from '../../pages/index/accessoriesArea.vue' //配件专区
  import productShow from '../../pages/index/productShow.vue' //产品展示
  import enterpriseServices from '../../pages/index/enterpriseServices.vue' //企业服务
  import personalEngineer from '../../pages/index/personalEngineer.vue' //个人工程师
  export default {
    components: {
      brandNav,
      equipListCart,
      accessoriesArea,
      productShow,
      enterpriseServices,
      personalEngineer
    },
    data() {
      return {
        showTitle:true,
        isHotTab: true, //true:选中'热门求购,false:选中'设备维修'
        //热门求购列表
        hotList: [{
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '动态血压记录分析系统'
          },
        ],
        //设备维修列表
        equipmentList: [{
            title: '设备维修分析系统记录维修'
          },
          {
            title: '设备维修分析系统'
          },
          {
            title: '设备维修分析系统'
          },
          {
            title: '设备维修分析系统记录维修'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '设备维修分析系统记录维修'
          },
          {
            title: '动态血压记录分析系统'
          },
          {
            title: '设备维修分析系统'
          },
          {
            title: '设备维修分析系统血压记录分析系统'
          },
          {
            title: '设备维修分析系统'
          },
          {
            title: '动设备维修分析系统'
          },
        ],
        //品牌logo
        brandsList: [require('../../assets/images/index/brands/logo_万东.png'),
          require('../../assets/images/index/brands/logo_飞利浦.png'),
          require('../../assets/images/index/brands/logo_明峰.png'),
          require('../../assets/images/index/brands/logo_联影.png'),
          require('../../assets/images/index/brands/logo_朗润.png'),
          require('../../assets/images/index/brands/logo_康达洲际.png'),
          require('../../assets/images/index/brands/logo_奥泰.png'),
          require('../../assets/images/index/brands/logo_安科.png'),
          require('../../assets/images/index/brands/logo_佳能.png'),
        ],

        isShow: false,
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
    methods: {
      jumpAllGoods(id){
        this.$router.replace({
          path:'/allGoods',
          query:{id:id}
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
  // 模块二
  .index-content {
    width: 1200px;
    margin: auto;
    height: 600px;

    .index-main {
      position: relative;

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

    // 右侧内容
    .el-main {
      width: 960px;
      height: 660px;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    // 头部导航
    .main-header-nav {
      height: 60px;
    }

    // 中间设备列表 + 右边发布需求
    .main-content {
      height: 600px;
      display: flex;
      justify-content: space-between;

      // 中间九宫格
      .main-content-left {
        width: 740px;
        height: 100%;

        .equipListCart-box {
          height: 100%;
        }
      }

      // 右边发布需求
      .main-content-right {
        width: 220px;
        display: flex;
        flex-direction: column;

        // 发布需求
        .release-demand {
          height: 205px;
          width: 100%;
          background-position: 100% bottom;
          background-image: url(../../assets/images/index/pic_login_bg.png);
          background-repeat: no-repeat;
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0px 35px 0px;
          box-sizing: border-box;
          overflow: hidden;

          //登录信息
          .login-info {
            width: 100%;
            padding-left: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .person-logo {
              width: 54px;
              height: 54px;
              background: #F5F5F5;
              border-radius: 50%;
              margin-right: 12px;
              box-sizing: border-box;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
              }
            }

            .person-info {
              height: 54px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 14px;
              font-family: Microsoft YaHei;
              color: #333333;

              ul {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                li {
                  cursor: pointer;
                  position: relative;
                  padding: 0px 12px;
                }

                li:first-child {
                  padding-left: 0px;
                }

                .li-login:after {
                  position: absolute;
                  content: "";
                  display: block;
                  width: 1px;
                  height: 15px;
                  border-right: 1px solid #BDBDBD;
                  right: 0px;
                  top: 3px;
                }

                .bule-font {
                  color: #40A9FF;
                }
              }
            }
          }

          // 企业一站式服务平台,登录立即享受
          .explain {
            position: relative;
            font-size: 12px;
            font-family: Microsoft YaHei;
            color: #EC3333;
            background-color: #FFF6F6;
            padding: 4px 6px;
            border-radius: 10px;
          }

          .explain::before {
            position: absolute;
            content: "";
            display: block;
            background-color: #333;
            top: -10px;
            left: 35%;
            border-left: 10px solid #fff;
            border-right: 10px solid #fff;
            border-bottom: 10px solid #FFF6F6;
          }

          // 一键发布需求
          .btn-demand {
            width: 170px;
            height: 40px;
            border: none;
            background: linear-gradient(0deg, #69C0FF 0%, #48AFF9 99%);
            box-shadow: 0px 3px 7px 0px rgba(61, 171, 255, 0.8);
            border-radius: 20px;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            font-family: Microsoft YaHei;
          }
        }

        // 热门求购
        .hot-shop-box {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          flex: 1;
          padding: 20px 20px 15px 20px;
          box-sizing: border-box;

          .hot-shop-box-tab {
            ul {
              display: flex;

              li {
                cursor: pointer;
                flex: 1;
                text-align: center;
                padding-bottom: 8px;
                border-bottom: 1px solid #DBDBDB;
              }

              .actived {
                position: relative;
                color: #40A9FF;
                border-bottom: 1px solid #40A9FF;

              }

              .actived:after {
                position: absolute;
                display: block;
                content: "";
                bottom: -5px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 7px;
                height: 7px;
                background-color: #fff;
                border: 1px solid #40A9FF;
                border-radius: 50%;
                z-index: 1;
                animation: moveline .8s infinite;
              }

              @keyframes moveline {
                0% {
                  box-shadow: 0px 0px 5px 0px rgba(61, 171, 255, 0.2);
                }

                50% {
                  box-shadow: 0px 0px 5px 0px rgba(61, 171, 255, 0.8);
                }

                100% {
                  box-shadow: 0px 0px 5px 0px rgba(61, 171, 255, 0.2);
                }
              }
            }
          }

          .equipment-list {
            margin-top: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            li {
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              color: #333333;

              .list-img {
                width: 16px;
                height: 16px;
                margin-right: 7px;
                background-image: url('../../assets/images/index/icon_new.png');
              }

              span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .list-left-bg {
              width: 16px;
              height: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-sizing: border-box;
              margin-right: 7px;

              .line {
                width: 8px;
                margin-bottom: 13px;
                height: 3px;
                background: #8DCFFF;
                border-radius: 0px 0px 2px 0px;
              }

              .circle {
                width: 3px;
                height: 3px;
                background: #DBDBDB;
                border-radius: 50%;
              }
            }

          }

          .hot-list {
            margin-top: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            li {
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              color: #333333;

              .list-img {
                width: 16px;
                height: 16px;
                margin-right: 7px;
              }

              span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            li:first-child {
              .list-img {
                background-image: url('../../assets/images/index/icon_1.png');
              }
            }

            li:nth-child(2) {
              .list-img {
                background-image: url('../../assets/images/index/icon_2.png');
              }
            }

            li:nth-child(3) {
              .list-img {
                background-image: url('../../assets/images/index/icon_3.png');
              }
            }

            .list-left-bg {
              width: 16px;
              height: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-sizing: border-box;
              margin-right: 7px;

              .line {
                width: 8px;
                margin-bottom: 13px;
                height: 3px;
                background: #8DCFFF;
                border-radius: 0px 0px 2px 0px;
              }

              .circle {
                width: 3px;
                height: 3px;
                background: #DBDBDB;
                border-radius: 50%;
              }
            }

          }
        }
      }
    }

  }

  // 各大品牌
  .adv_brand-adv {
    width: 1200px;
    height: 140px;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .advertisement_left,
    .advertisement_right {
      width: 240px;
      height: 140px;
      border-radius: 6px;
      box-sizing: border-box;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .advertisement_right {
      width: 220px;
    }

    .brands {
      width: 720px;
      margin: 0px 10px;
      height: 100%;
      box-sizing: border-box;
      border-radius: 6px;
      background-color: #fff;
      display: grid;
      grid-template-columns: repeat(5, auto);

      li {
        width: 144px;
        height: 70px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 0px 0px 0px #F6F6F6, 0px 1px 0px 0px #F6F6F6;
        transition: all 0.6s;

        img {
          width: auto;
        }
      }

      // 更多品牌
      li:last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }

        img {
          margin-left: 10px;
          width: 12px;
          height: 12px;
        }
      }

      li:hover {
        transform: scale(1.2);
        z-index: 2;
      }

      li:last-child:hover {
        span {
          color: #40A9FF;
        }
      }
    }
  }

  // 配件专区 产品展示 企业服务 个人工程师
  .accessories_area,
  .product-show,
  .enterprise-services,
  .personal-engineer {
    width: 1200px;
    margin: auto;
    margin-top: 25px;
  }

  // 模块六 两张大图
  .modle6-pic {
    width: 1200px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: auto;
    margin-top: 25px;

    img {
      width: 600px;
      height: 100%;
    }
  }
</style>
