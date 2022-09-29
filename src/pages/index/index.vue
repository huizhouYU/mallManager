<template>
  <div class="index-body">
    <!-- 首页banner图 -->
    <div class="top-banner">
      <img src="../../assets/images/index/banner_top.png" alt="">
    </div>
    <!-- 顶部模块 购物车 -->
    <div class="shop-box">
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
          <li>购物车</li>
          <li>我的收藏</li>
          <li class="yellow_font">
            <img src="../../assets/images/index/icon_vip.png" alt="">
            会员中心
          </li>
          <li>管理后台</li>
          <li class="bule_font">供应商入驻</li>
        </ul>
      </div>
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
            <li v-for="(item,index) in tabList" :key="index">{{item.title}}
              <img src="../../assets/images/index/icon_hot.png" alt="" v-if="item.isHot">
            </li>
          </ul>
        </div>
      </div>
    </div>
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
            <p>更多品牌</p>
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
              <equip-list-cart class="equipListCart-box"></equip-list-cart>
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
    <!-- 模块三 四张大图 -->
    <div class="modle3-picture">
      <div class="picture-item">
        <img src="../../assets/images/index/pic_540.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/login_bg.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
      <div class="picture-item">
        <img src="../../assets/images/index/equip1.png" alt="图片无法加载">
        <div class="name">西门子MR扫描仪</div>
      </div>
    </div>
    <!-- 模块四 企业服务 -->
    <div class="modle4-enter-service">
      <div class="enter-service-header">
        <div class="service-choose">
          <div class="modle-title">企业服务</div>
          <ul>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
          </ul>
        </div>
        <img src="../../assets/images/index/majorRepair.png" alt="">
      </div>
      <service-item4-page></service-item4-page>
    </div>
    <!-- 模块五 个人工程师 -->
    <div class="modle5-enter-service">
      <div class="enter-service-header">
        <div class="service-choose">
          <div class="modle-title">个人工程师</div>
          <ul>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
            <li>核磁共振</li>
          </ul>
        </div>
        <img src="../../assets/images/index/majorRepair.png" alt="">
      </div>
      <service-item5-page></service-item5-page>
    </div>
    <!-- 模块六 两张大图 -->
    <div class="modle6-pic">
      <img src="../../assets/images/index/pic_jineng.png" alt="">
      <img src="../../assets/images/index/pic_xuqiu.png" alt="">
    </div>
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
  import equipNav from '../../pages/index/equipNav.vue'
  import brandNav from '../../pages/index/brandNav.vue'
  import equipListCart from '../../pages/index/equipListCart.vue'
  import serviceItem4Page from '../../pages/index/serviceItem4Page.vue'
  import serviceItem5Page from '../../pages/index/serviceItem5Page.vue'

  export default {
    components: {
      indexHeader,
      equipNav,
      brandNav,
      equipListCart,
      serviceItem4Page,
      serviceItem5Page
    },
    data() {
      return {
        //顶部导航栏
        tabList: [{
            title: '首页',
            isHot: false
          },
          {
            title: '配件专区',
            isHot: true
          },
          {
            title: '供求信息',
            isHot: false
          },
          {
            title: '医疗器械',
            isHot: false
          },
          {
            title: '企业服务',
            isHot: true
          },
          {
            title: '学习园地',
            isHot: false
          },
          {
            title: '工程师服务',
            isHot: false
          },
          {
            title: '合作品牌',
            isHot: false
          },
        ],
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
    height: 40px;
    width: 100%;
    background-color: #fff;

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

          li:hover {
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

  // 模块三 四张大图
  .modle3-picture {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    margin-top: 15px;
    height: 170px;

    .picture-item {
      position: relative;
      width: 285px;

      img {
        width: 100%;
        height: 100%;
      }

      .name {
        width: 100%;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        left: 0;
        bottom: 0;
        color: #fff;
      }
    }
  }

  //模块四 企业服务
  //模块五 个人工程师
  .modle4-enter-service,
  .modle5-enter-service {
    width: 1200px;
    margin: auto;
    margin-top: 30px;
    background-color: #fff;

    .enter-service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #8DCFFF;
    }

    .service-choose {
      display: flex;
      align-items: center;

      .modle-title {
        // background-color: #8dcfff;
        background-image: url(../../assets/images/index/Business_bg.png);

        color: #fff;
        letter-spacing: 0.1875rem;
        width: 240px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
      }

      ul {
        display: flex;
        align-items: center;
        margin-left: 35px;

        li {
          font-size: 14px;
          color: #888;
          margin: 0px 10px;
          cursor: pointer;
        }

        li:hover {
          color: #8dcfff;
        }
      }

    }

    img {
      width: 10.375rem;
      height: 1.625rem;
    }

  }

  // 模块六 两张大图
  .modle6-pic {
    width: 1200px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: auto;
    margin-top: 30px;

    img {
      width: 600px;
      height: 100%;
    }
  }

  // 模块七 四大模块
  .model7-box {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 30px;
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
