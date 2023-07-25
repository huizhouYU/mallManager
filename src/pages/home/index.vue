<template>
  <div>
    <!-- 模块二 -->
    <div class="module1-content index-content">
      <!-- 主体内容 -->
      <div class="flex-between-start index-main">
        <!-- 左侧导航 -->
        <div width="240px" class="main-aside">
          <div class="brand-nav-box">
            <ul class="brand-nav-box-ul">
              <li :class="['one-li',{'one-cate-select':item.cateId == oneCate.cateId}]"
                v-for="(item,index) in brandList" :key="item.cateId" @mouseenter="enterClass(index)">
                <div class="one-cate-box">
                  <div class="one-cate-img-box">
                    <img :src="item.image" alt="" class="one-cate-img">
                  </div>
                  <div class="one-title">{{item.cateName}}</div>
                </div>
                <i class="iconfont">&#xe63c;</i>
              </li>
            </ul>

            <!-- 左侧导航条悬浮显示的内容 -->
            <div class="more-classification">
              <div class="yijie-title">{{oneCate.cateName}}</div>
              <div class="flex-start-start item" v-for="(item,index) in classDatas" :key="index">
                <div class="title" @click="jumpToGood(item,'2')">{{item.cateName}}</div>
                <ul class="more-classification-ul">
                  <li class="more-classification-li" v-for="(child,ind) in item.children" :key="ind"
                    @click="jumpToGood(child,'3')">{{child.cateName}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边内容-->
        <div>
          <!-- 中间设备列表 + 右边发布需求 -->
          <div class="main-content">
            <!-- 中间设备列表 -->
            <div class="main-content-left">
              <equip-list-cart class="equipListCart-box" :recommendGoods='recommendGoods' @jumpAllGoods="jumpAllGoods">
              </equip-list-cart>
            </div>
            <!-- 右边发布需求 -->
            <div class="main-content-right">
              <!-- 发布需求 -->
              <div class="release-demand">
                <!-- 未登录状态 -->
                <div class="login-info" v-show="!name">
                  <div class="person-logo">
                    <img src="../../assets/images/index/icon_tx.png" alt="">
                  </div>
                  <div class="person-info">
                    <span>您好，欢迎光临</span>
                    <div class="flex-center-center tip">登录享受一站式服务</div>
                  </div>
                </div>
                <div class="flex-between-center explain" v-show="!name">
                  <div class=" flex-center-center btn login" @click="login">登录</div>
                  <div class=" flex-center-center btn register" @click="register">注册</div>
                </div>
                <!-- 已登录样式 -->
                <div class="logined-info" v-show="name">
                  <img :src="avatar" alt="" @click="personCenter">
                  <span @click="personCenter">{{name}}</span>
                </div>
                <!-- <el-button class="btn-demand">一键发布需求</el-button> -->
              </div>
              <!-- 热门求购  + 项目外包-->
              <div class="hot-shop-box">
                <div class="hot-shop-box-tab">
                  <ul>
                    <li :class="{'actived':isHotTab}" @click="isHotTab=true">热门求购</li>
                    <li :class="{'actived':!isHotTab}" @click="isHotTab=false">项目外包</li>
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
                    <span @click="toDemandDetail(item.articleId)">{{item.title}}</span>
                  </li>
                </ul>
                <!-- 项目外包 -->
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
                    <span @click="toDemandDetail(item.articleId)">{{item.title}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--各大品牌 -->
    <div class="adv_brand-adv">
      <div class="advertisement_left" @click="toAd('135')">
        <img src="../../assets/images/index/pic_left.jpg" alt="">
      </div>
      <ul class="brands">
        <li v-for="(item,index) in brandsList" :key="index">
          <img :src="item.brandLogo" alt="图片加载失败">
          <div class="mask">
            <span>{{item.brandName}}</span>
            <div class=" flex-center-center btn-logo" @click="toGoods(item.brandName)">进入品牌</div>
          </div>
        </li>
        <li @click="toMoreBrand">
          <span>更多品牌</span>
          <img src="../../assets/images/index/brands/icon_double-right.png" alt="">
        </li>
      </ul>
      <div class="advertisement_right" @click="toAd('139')">
        <img src="../../assets/images/index/pic_right.jpg" alt="">
      </div>
    </div>
    <a class="long-adv" href="https://anke.com/cn" target="_blank">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/banner_anke.jpg" alt="">
    </a>
    <!-- 医疗器械 -->
    <accessories-area class="accessories_area" :showTitle="showTitle" :morePath="medicalApparatus" title="医疗器械"
      groupId="2">
    </accessories-area>
    <a class="long-adv" href=" https://www.haierbiomedical.com/cn?lang=zh_CN" target="_blank">
       <img src="https://image.yijiequan.cn/yijiequan-client/attach/banner_haier.jpg" alt="">
      <!-- <img src="https://image.yijiequan.cn/yijiequan-client/attach/20230426140518.jpg" alt=""> -->
    </a>
    <!-- 设备配件 -->
    <accessories-area class="accessories_area" :showTitle="showTitle" :morePath="accessory" title="设备配件" groupId="1">
    </accessories-area>
    <a class="long-adv" href="https://www.nbdavid.com/" target="_blank">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/banner_daiwei.jpg" alt="">
    </a>
    <!-- 医疗器械 -->
    <!-- <product-show class="product-show" :productList="productList" :morePath="medicalApparatus"
      v-show="productList.length>0">
    </product-show> -->

    <!-- 企业服务 -->
    <enterprise-services class="enterprise-services" :companyList="companyList" :morePath="enterpriseServices">
    </enterprise-services>
    <a class="long-adv" href="https://www.xzdw.cn/" target="_blank">
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/20230426140518.jpg" alt="">
    </a>
    <!-- 个人工程师 -->
    <personal-engineer class="personal-engineer" v-if="false"></personal-engineer>
    <!-- 为您找货 + 手机医界圈 + 资质证书 -->
    <div class="flex-between-center modle6-pic">
      <!-- 为您找货 -->
      <div class="flex-column-start-start  find-goods-module">
        <div class="flex-start-center module-title">
          <span class="title">产品咨询</span>
          <div class="spot"></div>
          <span class="remark">填写您的咨询内容，我们将尽快给您答复。</span>
        </div>
        <product-consult class="product-consult"></product-consult>

      </div>
      <!-- 手机医界圈 + 资质证书 -->
      <div class="flex-column-between-start phone-certificate">
        <!-- 手机医界圈 -->
        <div class="flex-column-start-start phone-yijiequan">
          <div class="flex-start-center module-title">
            <span class="title">手机医界圈</span>
            <div class="spot"></div>
            <span class="remark">手机扫码，随时随地查看采购。</span>
          </div>
          <div class="flex-center-center various-code">
            <div class="flex-center-center xiaochengxu">
              <span>医界圈小程序：</span>
              <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_xiaochengxu.jpg" alt="">
            </div>
            <div class="flex-center-center customer-service">
              <span>医界圈客服：</span>
              <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_erweima.png" alt="">
            </div>
          </div>
        </div>
        <!-- 资质证书 -->
        <div class="flex-column-start-start qualification-certificate">
          <div class="flex-start-center module-title">
            <span class="title">资质证书</span>
            <div class="spot"></div>
            <span class="remark">证书认证，有保障</span>
          </div>
          <ul class="flex-column-start-start certificate-ul">
          <!-- <li>
              <a target="_blank"
                href="https://image.yijiequan.cn/yijiequan-client/attach/医界圈-医疗器械备案凭证.png">医疗器械网络交易服务第三方平台备案凭证</a>
            </li> -->
            <li>
              <a target="_blank"
                href="https://image.yijiequan.cn/yijiequan-client/attach/医界圈-服务资格证书.png">互联网药品信息服务资格证书：(皖)-经营性-2022-0047</a>
            </li>
            <li>
              <a target="_blank"
                href="https://image.yijiequan.cn/yijiequan-client/attach/20230107190205875_00(1)(1).png">企业营业执照：91340111MA8P9K0G9N(1-1)</a>
            </li>
            <li>
              <a target="_blank"
                href="https://image.yijiequan.cn/yijiequan-client/attach/20230107190205875_01(1)(1)(1).png">增值电信业务经营许可证：皖B2-20220523</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import equipListCart from '../../pages/index/equipListCart.vue'
  import accessoriesArea from '../../pages/index/accessoriesArea.vue' //配件专区
  import productShow from '../../pages/index/productShow.vue' //医疗器械
  import enterpriseServices from '../../pages/index/enterpriseServices.vue' //企业服务
  import personalEngineer from '../../pages/index/personalEngineer.vue' //个人工程师
  import productConsult from '../../pages/index/productConsult.vue'
  import {
    recommendGoods,
    getBrandsList,
    listByGroup,
    articleList,
    equipmentList,
    storeList
  } from '@/api/index'
  export default {
    components: {
      equipListCart,
      accessoriesArea,
      productShow,
      enterpriseServices,
      personalEngineer,
      productConsult
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'mobile'
      ])
    },
    mounted() {
      this.getData()
    },
    props: ['brandList'],
    data() {
      return {

        oneCate: '',
        accessory: '/accessory',
        medicalApparatus: '/medicalApparatus?goodsType=equipment',
        enterpriseServices: '/enterpriseServices',
        showTitle: true,
        isHotTab: true, //true:选中'热门求购,false:选中'项目外包'
        recommendGoods: [], //九宫格推荐商品
        productList: [], //医疗器械
        companyList: [], //企业服务
        //热门求购列表
        hotList: [],
        //项目外包列表
        equipmentList: [],
        //品牌logo
        brandsList: [],
        classDatas: [],
        chosedLevel: []
      }
    },
    methods: {
      getData() {
        //获取九宫格推荐商品
        recommendGoods({
          limit: 9
        }).then(response => {
          this.recommendGoods = response.data
        })
        //获取品牌列表
        getBrandsList({
          limit: 9
        }).then(response => {
          this.brandsList = response.data
          var origin = window.location.origin + window.location.pathname
          for (var index in this.brandsList) {
            if (this.brandsList[index].brandLogo.indexOf("http://") == -1) {
              this.brandsList[index].brandLogo = origin + this.brandsList[index].brandLogo
            }
          }
        })
        // 需求类型1-求购设备 2-项目外包 3-灵活兼职
        articleList({
          limit: 12,
          articleType: 1
        }).then(response => {
          this.hotList = response.data
        })
        articleList({
          limit: 12,
          articleType: 2
        }).then(response => {
          this.equipmentList = response.data
        })
        //商品类型 material-配件  equipment-设备器械
        equipmentList({
          goodsType: 'equipment',
          limit: 10
        }).then(response => {
          if (response.code == 10000) {
            this.productList = response.data
          } else {
            this.productList = []
          }
        })
        //获取企业服务-个人工程师
        // 店铺类型 personal-个人 company-企业
        storeList({
          limit: 6,
          storeType: 'company'
        }).then(response => {
          if(response.data.length <= 3){
            this.companyList = response.data
          }else if (response.data.length > 3 && response.data.length < 6) {
            this.companyList = response.data.slice(0, 3)
          } else {
            this.companyList = response.data.slice(0, 6)
          }
        })
      },
      toAd(id) {
        var newPath = this.$router.resolve({
          path: '/shopHome',
          query: {
            storeId: id
          }
        })
        window.open(newPath.href, '_blank')
      },
      toGoods(brandName) {
        var newPath = this.$router.resolve({
          path: '/medicalApparatus',
          query: {
            brandName
          }
        })
        window.open(newPath.href, '_blank')
      },
      personCenter() {
        this.$router.push({
          path: '/buyer',
          query: {
            // id: id
          }
        })
      },
      jumpToGood(item, level) {
        this.getChosedLevel(item.cateName, item.parentId, level)
        var newPath = this.$router.resolve({
          path: '/medicalApparatus',
          query: {
            cateId: item.cateId,
            goodsType: item.goodsType,
            chosedLevel: this.chosedLevel.join(' / ')
          }
        })
        window.open(newPath.href, '_blank')
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
      jumpAllGoods(id) {
        var newPath = this.$router.resolve({
          path: '/goodDetail',
          query: {
            goodsId: id
          }
        })
        window.open(newPath.href, '_blank')
      },
      enterClass(index) {
        //根据id去请求classDatas数据
        this.oneCate = {
          'cateId': this.brandList[index].cateId,
          'cateName': this.brandList[index].cateName
        }
        if (this.brandList[index].children != undefined && this.brandList[index].children.length > 0) {
          this.classDatas = this.brandList[index].children
        } else {
          this.classDatas = []
        }
      },
      login() {
        this.$router.push({
          path: '/login',
          // replace: true
        })
      },
      register() {
        this.$router.push({
          path: '/register',
          // replace: true
        })
      },
      toMoreBrand() {
        var newPath = this.$router.resolve({
          path: '/cooperationBrand'
        })
        window.open(newPath.href, '_blank')
      },
      toDemandDetail(articleId) {
        this.$router.push({
          path: '/demandDetail',
          query: {
            articleId
          }
        })
      }
    },

  }
</script>

<style scoped lang="less">
  .long-adv {
    margin-top: 25px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
  }

  // 模块二
  .index-content {
    width: 1200px;
    margin: auto;
    height: 600px;

    .index-main {
      position: relative;
    }

    // 左侧导航
    .main-aside {
      width: 240px;
      height: 100%;
      box-sizing: border-box;
      // padding-bottom: 10px;
      display: flex;
      flex-direction: column;
      background-color: #fff;

      img {
        width: 100%;
        height: 60px;
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
      height: 600px;
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
          // height: 205px;
          width: 100%;
          background-position: 100% bottom;
          background-repeat: no-repeat;
          background-color: #FFFFFF;
          background-image: url('../../assets/images/index/pic_home_login.png');
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0px 35px 0px;
          box-sizing: border-box;
          overflow: hidden;

          //未登录信息
          .login-info {
            width: 100%;
            padding-left: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 20px;

            .person-logo {
              cursor: pointer;
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
                width: 100%;
                height: 100%;
              }
            }

            .person-info {
              cursor: pointer;
              height: 54px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 14px;
              font-family: Microsoft YaHei;
              color: #333333;

              .tip {
                padding: 5px 8px;
                box-sizing: border-box;
                background: #FFF6F6;
                border-radius: 11px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #EC3333;
              }
            }
          }

          //登录信息
          .logined-info {
            width: 100%;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;

            img {
              cursor: pointer;
              width: 54px;
              height: 54px;
              border-radius: 50%;
              box-sizing: border-box;
              overflow: hidden;
            }

            span {
              width: 100px;
              display: inline-block;
              margin-top: 15px;
              cursor: pointer;
              font-size: 14px;
              font-family: Microsoft YaHei;
              color: #333333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: center;
            }
          }

          // 登录  注册
          .explain {

            .btn {
              cursor: pointer;
              width: 90px;
              // height: 36px;
              padding: 15px 0px;
              box-sizing: border-box;
              border-radius: 18px;
              height: 12px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;

            }

            .btn+.btn {
              margin-left: 8px;
            }

            .login {
              background: linear-gradient(0deg, #69C0FF 0%, #48AFF9 99%);
              color: #FFFFFF;
            }

            .login:hover {
              opacity: 0.8;
            }

            .register {
              background: #F6F6F6;
              color: #333333;
            }

            .register:hover {
              background: linear-gradient(0deg, #69C0FF 0%, #48AFF9 99%);
              color: #FFFFFF;
            }
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
                flex: 1;
                cursor: pointer;
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
                flex: 1;
                cursor: pointer;
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
      overflow: hidden;

      li {
        position: relative;
        width: 144px;
        height: 70px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 0px 0px 0px #F6F6F6, 0px 1px 0px 0px #F6F6F6;
        transition: all 0.6s;

        img {
          max-width: 65%;
          width: auto;
          transform: scale(1);
          transition: all .3s ease-in-out;
        }

        .mask {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.6);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;

          .btn-logo {
            text-decoration: none;
            color: #fff;
            margin-top: 8px;
            width: 77px;
            height: 22px;
            background: #239BFF;
            border-radius: 10px;
          }
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
        .mask {
          display: flex;
        }
      }

      li:last-child:hover {
        span {
          color: #40A9FF;
        }
      }
    }
  }

  // 配件专区 医疗器械 企业服务 个人工程师
  .accessories_area,
  .product-show,
  .enterprise-services,
  .personal-engineer {
    width: 1200px;
    margin: auto;
    margin-top: 25px;
  }

  // 模块六 为您找货 + 手机医界圈 + 资质证书
  .modle6-pic {
    width: 1200px;
    height: 350px;
    margin-top: 25px;
    box-sizing: border-box;

    .module-title {
      .title {
        line-height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }

      .spot {
        width: 5px;
        height: 5px;
        font-weight: 400;
        background: #999999;
        border-radius: 50%;
        margin: 0px 10px;
      }

      .remark {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #40A9FF;
      }
    }

    // 为您找货
    .find-goods-module {
      height: 100%;
      width: 595px;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 20px;

      .product-consult {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
      }

    }

    // 手机医界圈 + 资质证书
    .phone-certificate {
      width: 595px;
      height: 100%;
      box-sizing: border-box;

      .phone-yijiequan,
      .qualification-certificate {
        width: 100%;
        height: 170px;
        background: #FFFFFF;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px;
      }

      .certificate-ul {
        // border: 1px solid ;
        flex: 1;
        padding-top: 15px;
        li+li{
          margin-top: 12px;
        }

        li {
          font-size: 14px;
          line-height: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;

          a {
            color: #333333;
            text-decoration: none;
          }
        }
      }

      .various-code {
        flex: 1;
        width: 100%;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;

        .xiaochengxu,
        .customer-service {
          flex: 1;
          height: 100%;

          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
</style>
