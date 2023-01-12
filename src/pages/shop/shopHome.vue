<template>
  <div class="shop-home-box">
    <div class="shop-home-box-left">
      <div class="left-top">
        <div class="shop-logo">
          <template v-if="storeInfo.storeLogo != null && storeInfo.storeLogo != ''">
            <img :src="storeInfo.storeLogo" alt="">
          </template>
          <template v-else>
            <img src="../../assets/images/shop/pic_shoplogo_default.png" alt="">
          </template>
        </div>
        <div class="shop-name">
          <template v-if="storeInfo.stype=='company'">
            <img src="../../assets/images/index/icon_qi.png" alt="">
          </template>
          <template v-else>
            <img src="../../assets/images/index/icon_ge.png" alt="">
          </template>
          <span>{{storeInfo.storeName}}</span>
        </div>
        <div class="shop-detail">
          <div class="shop-detail-item">
            <span class="title">联系人员</span>
            <span class="value">{{storeInfo.ownerName}}</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">联系电话</span>
            <span class="value">{{storeInfo.tel}}</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">所属分类</span>
            <span class="value">{{storeInfo.categoryName}}</span>
          </div>
          <div class="shop-detail-item">
            <span class="title">公司地址</span>
            <span class="value">{{storeInfo.regionName}}{{storeInfo.address}}</span>
          </div>
          <div class="map">
            <v-amap :latitude="Number(storeInfo.latitude)" :longitude="Number(storeInfo.longitude)"></v-amap>
          </div>
        </div>
      </div>
      <store-recommendation class="store-recommendation" :isShowTitleImg="isShowTitleImg" :adsList="adsList"></store-recommendation>
    </div>
    <div class="shop-home-box-right">
      <!-- 简要介绍 -->
      <div class="module introduction">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Introduction.png" alt="">
            <span>简要介绍</span>
          </div>
          <div class="module-title-right" @click="toJump('/introductionIndex','1')">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>

        </div>
        <div v-html="storeInfo.description" v-if="storeInfo.description != null && storeInfo.description !=''">
        </div>
        <div v-else class="flex-center-center no-data-font">
          暂无上传相关介绍~
        </div>
      </div>

      <!-- 店铺商品 -->
      <div class="module goods">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Goods.png" alt="">
            <span>店铺商品</span>
          </div>
          <div class="module-title-right" @click="toJump('/shopAllGoods','3')">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>
        </div>
        <good-item :grid5="grid5" :goodsList="goodsDataList" @selectOnlyTab="selectOnlyTab"></good-item>
      </div>
      <!-- 供求信息 -->
      <div class="module goods">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_supply and demand.png" alt="">
            <span>供求信息</span>
          </div>
          <div class="module-title-right" @click="toJump('/demandIndex','4')">
            <span>更多</span>
            <i class="iconfont">&#xe63c;</i>
          </div>
        </div>
        <demand-item :grid5="grid5" :demandDataList="demandDataList" @selectOnlyTab="selectOnlyTab"></demand-item>
      </div>
      <!-- 荣誉证书 -->
      <div class="module certificate">
        <div class="module-title">
          <div class="module-title-left">
            <img src="../../assets/images/shop/icon_Qualifications.png" alt="">
            <span>资质证书</span>
          </div>
        </div>
        <ul v-if="storeInfo.certificationList != null && storeInfo.certificationList.length>0">
          <li v-for="(item,index) in storeInfo.certificationList" :key="index">
            <el-image class="flex-center-center my-img" @click="putLookSrc(item)" :src="item"
              :preview-src-list="lookSrcList">
            </el-image>
          </li>
        </ul>
        <div class="flex-center-center no-data-font" v-else>
          资质证书暂未上传~
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import storeRecommendation from '../../pages/shop/storeRecommendation.vue'
  import goodItem from '../../pages/allGoods/goodItem.vue'
  import demandItem from '../../pages/shopDemand/demandItem.vue'
  import vAmap from '../../components/amaps.vue'
  import {
    goodsList
  } from '@/api/goods'
  import {
    storeDetail
  } from '@/api/store'
  import {
    articleList
  } from '@/api/supplyDemand'
  export default {
    components: {
      storeRecommendation,
      goodItem,
      demandItem,
      vAmap
    },
    data() {
      return {
        storeId: '',
        storeInfo: '',
        goodsDataList: [],
        demandDataList: [],
        isShowTitleImg: false,
        grid5: true,
        lookSrcList: [],
        adsList: [{
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090045.jpg',
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090056.jpg',
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090123.png',
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090140.jpg',
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090148.jpg',
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090158.jpg',
          }
        
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      putLookSrc(item) {
        this.lookSrcList = []
        this.lookSrcList.push(item)
      },
      getData() {
        storeDetail({
          storeId: this.storeId
        }).then(response => {
          this.storeInfo = response.data
          //产品注册证
          if(this.storeInfo.productCertificate != undefined && this.storeInfo.productCertificate != null && this.storeInfo.productCertificate != ''){
            this.storeInfo.certificationList.unshift(this.storeInfo.productCertificate)
          }
          //生产许可证
          if(this.storeInfo.productionLicense != undefined && this.storeInfo.productionLicense != null && this.storeInfo.productionLicense != ''){
            this.storeInfo.certificationList.unshift(this.storeInfo.productionLicense)
          }
          //营业执照
          if(this.storeInfo.businessLicense != undefined && this.storeInfo.businessLicense != null && this.storeInfo.businessLicense != ''){
            this.storeInfo.certificationList.unshift(this.storeInfo.businessLicense)
          }
          //经营许可证
          if(this.storeInfo.businessCertificate != undefined && this.storeInfo.businessCertificate != null && this.storeInfo.businessCertificate != ''){
            this.storeInfo.certificationList.unshift(this.storeInfo.businessCertificate)
          }
        })
        var page = {
          pageNo: 1,
          pageSize: 10,
          storeId: this.storeId
        }
        goodsList(page).then(response => {
          this.goodsDataList = response.data.list
        })
        articleList(page).then(response => {
          this.demandDataList = response.data.list
        })
      },
      toJump(path, index) {
        var params = {
          path,
          index
        }
        this.$emit('selectTab', params)
      },
      selectOnlyTab(id) {
        this.$emit('selectOnlyTab', '-1')
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-home-box {
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
    width: 1200px;

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
          // padding: 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #F5F5F5;
          margin-bottom: 13px;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
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
            // line-height: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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

          .module-title-right:hover {
            color: #40A9FF;

            i {
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
          display: grid;
          grid-template-columns: repeat(5, auto);
          justify-content: flex-start;
          gap: 25px;

          li {
            // margin-right: 30px;
            // margin-bottom: 20px;

            .my-img {
              width: 160px;
              height: 160px;
              border: 1px solid #f5f5f5;
              border-radius: 6px;

              /deep/.el-image__inner {
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
              }
            }
          }

          li:last-child {
            margin-right: 0px
          }
        }

        // .no-data-font {
        //   width: 100%;
        //   font-size: 14px;
        //   color: #666;
        // }
      }
    }
  }
</style>
