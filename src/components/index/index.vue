<template>
  <div class="index-body">
    <!-- 顶部模块 购物车 -->
    <div class="shop-box">
      <div class="shop-content">
        <ul>
          <li>购物车</li>
          <li>会员中心</li>
          <li>供应商入驻</li>
          <li>特色专区</li>
        </ul>
        <p>400-123-1234</p>
      </div>
    </div>

    <!-- 模块一 -->
    <el-container class="module0-header">
      <!-- 头部搜索一栏 -->
      <el-header>
        <index-header class="index-header"></index-header>
      </el-header>
    </el-container>


    <!-- 模块二 -->
    <el-container class="module1-content index-content">
      <!-- 主体内容 -->
      <el-container class="index-main">
        <!-- 左侧导航 -->
        <el-aside width="240px" class="main-aside">
          <img src="../../assets/images/index/brand_type.png" />
          <!-- <brand-nav calss="brand-nav-box"></brand-nav> -->
          <ul class="brand-nav-box">
            <li v-for="(item,index) in brandList" :key="item.id" @mouseenter="enterClass(item.id)" @mouseout="leaveClass()">{{item.name}}
              <i class="iconfont">&#xe63c;</i>
            </li>
          </ul>

          <div class="more-brands">
            <p>更多品牌</p>
            <img src="../../assets/images/index/double-right.png" alt="">
          </div>
        </el-aside>
        <!-- 左侧导航条悬浮显示的内容 -->
        <div class="more-classification" v-show="isShow" @mouseenter="enterClass1()" >
          <div class="item" v-for="(item,index) in classDatas" :key="index">
            <div class="title" >{{item.name}}</div>
            <ul>
              <li v-for="(child,ind) in item.childers" :key="ind"  >{{child.name}}</li>
            </ul>
          </div>
        </div>

        <!-- 右边内容-->
        <el-main>
          <!-- 头部导航 -->
          <div class="main-header-nav">
            <equip-nav></equip-nav>
          </div>
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
                <img src="../../assets/images/index/publish.png" alt="">
                <div class="titles">
                  <p class="title1">发布需求</p>
                  <p class="title2">求购设备、提供设备</p>
                  <button class="btn">立即发布</button>
                </div>
              </div>
              <!-- 热门求购 -->
              <div class="hot-shop-box">
                <div class="hot-title">
                  <img src="../../assets/images/index/bookmark-one.png" alt="">
                  <div class="hot-text">
                    <p class="text1">热门求购</p>
                    <p class="text2">各大医疗器械热门求购</p>
                  </div>
                </div>
                <ul class="hot-list">
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
                  <li> <img src="../../assets/images/index/circular.png" alt="" /> 动态血压记录分析系统</li>
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
  import indexHeader from '../../components/index/indexHeader.vue'
  import equipNav from '../../components/index/equipNav.vue'
  import brandNav from '../../components/index/brandNav.vue'
  import equipListCart from '../../components/index/equipListCart.vue'
  import serviceItem4Page from '../../components/index/serviceItem4Page.vue'
  import serviceItem5Page from '../../components/index/serviceItem5Page.vue'

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
        isShow:false,
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
          }

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
      enterClass1(){
        console.log("进入",this.isShow)
        this.isShow=true
      },
      enterClass(id){
        //根据id去请求classDatas数据
        this.isShow=true
      },
      leaveClass(){
        console.log("离开",this.isShow)
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
    padding-top: 150px;
  }

  /* 清除浮动 */
  .clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }

  // 顶部模块 购物车
  .shop-box {
    background-color: #f5f5f5;
    position: fixed;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
    z-index: 99;

    .shop-content {
      height: 100%;
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 12px;
      color: #666;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {

          padding: 0px 20px;
          border-right: 1px solid #666;
        }

        li:last-child {
          border-right: none;
        }
      }
    }
  }

  /* 模块一 头部 */
  .module0-header {
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    height: 120px;
    background-color: #fff;
    z-index: 99;

    .el-header {
      margin: auto;
      padding: 0;
    }
  }

  // 模块二
  .index-content {
    width: 1200px;
    margin: auto;
    height: 660px;

    .index-main {
      position: relative;

      .more-classification {
        width: 730px;
        height: 600px;
        background-color: #fff;
        position: absolute;
        top: 60px;
        left: 240px;
        overflow-y: auto;
        padding: 35px 20px 40px 30px;
        box-sizing: border-box;
        box-shadow: 0px 1px 10px 5px #999;

        .item:last-child {
          padding-bottom: 0;
        }

        // visibility: hidden;
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
          border-bottom: 1px solid #eee;
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
          background-image: url(../../assets/images/index/announce_bg.png);
          // background-color: #f3fbfe;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 40px;
          box-sizing: border-box;

          img {
            width: 70px;
            height: 70px;
          }

          .titles {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            // padding-bottom: 1.25rem;

            // background-color: aquamarine;
            .title1 {
              font-size: 16px;
              margin-bottom: 10px;
              color: #333;
            }

            .title2 {
              font-size: 12px;
              color: #999;
              margin-bottom: 10px;
            }

            .btn {
              width: 87px;
              height: 26px;
              background-color: #FFC53D;
              color: #fff;
              border-radius: 5px;
              border: 1px solid #FFC53D;
            }
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

          .hot-title {
            height: 35px;
            display: flex;
            align-items: flex-start;

            img {
              width: 27px;
              height: 33px;
            }

            .hot-text {
              padding-left: 13px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: flex-start;

              .text1 {
                font-size: 16px;
                color: #333;
              }

              .text2 {
                font-size: 12px;
                color: #999;
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

            img {
              width: 10px;
              height: 10px;
              margin-right: 7px;
            }

            li {
              font-size: 12px;
              color: #333;
              cursor: pointer;
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
        li:hover{
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
