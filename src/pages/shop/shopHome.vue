<template>
  <div class="shop-home-box">
    <div class="shop-home-box-left">
      <div class="left-top">
        <div class="shop-logo">
          <img src="../../assets/images/shop/pic_shoplogo_default.png" alt="">
        </div>
        <div class="shop-name">
          <img src="../../assets/images/index/icon_qi.png" alt="">
          <span>迅即网络科技有限公司</span>
        </div>
        <div class="shop-detail">
          <div class="shop-detail-item">
            <span class="title">联系人员</span>
            <span class="value">卞先生</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">联系电话</span>
            <span class="value">15415469857</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">所属分类</span>
            <span class="value">医疗器械二类</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">公司地址</span>
            <span class="value">浙江省杭州市余杭区 蓬莱路莲花稻谷园区 123号商铺</span>
          </div>
          <div class="map">
            <v-amap></v-amap>
          </div>
        </div>
      </div>
      <store-recommendation class="store-recommendation" :isShowTitleImg="isShowTitleImg"></store-recommendation>
    </div>
    <div class="shop-home-box-right">
      <!-- 简要介绍 -->
      <div class="module introduction">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Introduction.png" alt="">
            <span>简要介绍</span>
          </div>
          <div class="module-title-right">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>

        </div>
        <div>
          浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包一级企业，公司注册资本10868万元，净资产达3、7亿多元。下辖上海蔚昕建设发展有限公司等分布在全国各地的九家分公司。集团公司具有建筑装修装饰工程、地基与基础工程、钢结构工程、市政公用工程施工总承包，环保施工等专业承包资质，是一家集建筑、房地产开发、建材经营等为一体的大型建筑企业，可承揽工业、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。
        </div>
      </div>
      <!-- 荣誉证书 -->
      <div class="module certificate">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Qualifications.png" alt="">
            <span>荣誉证书</span>
          </div>
        </div>
        <ul>
          <li>
            <img src="../../assets/images/shop/shop-certificate.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/shop/shop-certificate.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/shop/shop-certificate.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/shop/shop-certificate.png" alt="">
          </li>
          <li>
            <img src="../../assets/images/shop/shop-certificate.png" alt="">
          </li>
        </ul>
      </div>
      <!-- 店铺商品 -->
      <div class="module goods">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Goods.png" alt="">
            <span>店铺商品</span>
          </div>
          <div class="module-title-right">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>
        </div>
        <good-item :grid5="grid5"></good-item>
      </div>
      <!-- 供求信息 -->
      <div class="module goods">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_supply and demand.png" alt="">
            <span>供求信息</span>
          </div>
          <div class="module-title-right">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>
        </div>
        <demand-item :grid5="grid5"></demand-item>
      </div>
    </div>
  </div>
</template>

<script>
  import storeRecommendation from '../../pages/shop/storeRecommendation.vue'
  import goodItem from '../../pages/allGoods/goodItem.vue'
  import demandItem from '../../pages/shopDemand/demandItem.vue'
  import vAmap from '../../components/amap.vue'
  export default {
    components: {
      storeRecommendation,
      goodItem,
      demandItem,
      vAmap
    },
    data() {
      return {
        isShowTitleImg: false,
        grid5: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-home-box {
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;

    .shop-home-box-left {
      width: 230px;
      margin-right: 20px;

      .left-top {
        // height: 576px;
        width: 100%;
        padding: 20px 10px 40px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        background-color: #fff;
        border-top: 2px solid #40A9FF;

        // 店铺logo
        .shop-logo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          padding: 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #F5F5F5;
          margin-bottom: 13px;

          img {
            width: 82px;
            height: 74px;
          }
        }

        // 店铺名称
        .shop-name {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding-bottom: 22px;
          border-bottom: 1px solid #EEEEEE;

          img {
            width: 18px;
            height: 20px;
            margin-right: 6px;
          }

          span {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
            line-height: 10px;
          }
        }

        .shop-detail {
          // background-color: red;
          width: 100%;
          padding-top: 30px;

          .shop-detail-item {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 15px;

            .title {
              display: inline-block;
              width: 75px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              letter-spacing: 2px;
            }

            .value {
              width: 130px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
            }
          }


          .map {
            margin-top: 25px;
            width: 210px;
            height: 195px;
            border: 1px solid #eeeeee;
          }
        }
      }

      .store-recommendation {
        margin-top: 20px;
        background-color: #fff;
        border-top: 2px solid #40A9FF;
        padding: 12px 0px 0px 10px;
      }
    }

    .shop-home-box-right {
      width: 950px;

      .module {
        background-color: #fff;
        border-top: 2px solid #40A9FF;
        padding: 16px 14px 35px 14px;
        margin-bottom: 20px;

        .module-title {
          display: flex;
          justify-content: space-between;
          align-self: center;
          margin-bottom: 20px;

          .module-title-left {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }

            span {
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 700;
              color: #40A9FF;
            }
          }

          .module-title-right {
            cursor: pointer;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;

            span {
              margin-right: 7px;
            }

            i {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }
          }

        }
      }

      .certificate {
        ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          li {
            margin-right: 30px;

            img {
              width: 160px;
              height: 160px;
            }
          }

          li:last-child {
            margin-right: 0px
          }
        }
      }
    }
  }
</style>
