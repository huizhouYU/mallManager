<template>
  <div class="shop-detail-box">
    <div class="location">{{categoryStr}}</div>
    <div class="shop-detail-main">
      <div class="shop-detail-content">
        <div class="shop-detail-img-info">
          <div class="img-list">
            <look-img :imgUrlList="goodsInfo.imageList" :mainImgUrl="bigImgPath"></look-img>
          </div>
          <div class="goods-info">
            <!-- 商品名称 -->
            <div class="goods-title">
              {{goodsInfo.goodsName}}
            </div>
            <!-- 卖点：标签 -->
            <ul>
              <li>{{goodsInfo.brand}}</li>
              <li v-for="(item,index) in goodsInfo.tagList" v-show=" goodsInfo.tagList.length>0">{{item}}</li>
            </ul>
            <!-- 价格 -->
            <div class="info-item">
              <span class="title letterSpacing">价格</span>

              <div class="price">￥
                <template v-if="goodsInfo.saleType == 2">
                  <span>询价</span>
                  <!-- <div class="remark">
                    <img src="../../assets/images/shop/icon_remark_warning.png" alt="">
                    询价订单提交申请后可在全部订单中查看该订单是否审核通过
                  </div> -->
                </template>
                <template v-else>
                  <span>{{goodsInfo.price}}</span>
                </template>
              </div>
            </div>
            <!-- 型号 -->
            <div class="info-item">
              <span class="title">商品编码</span>
              <div class="grey-box">{{goodsInfo.goodsPn||'-'}}</div>
            </div>
            <!-- 新旧程度 -->
            <div class="info-item">
              <span class="title">新旧程度</span>
              <div class="grey-box">
                <template v-if="goodsInfo.degree == 1">一成新</template>
                <template v-else-if="goodsInfo.degree == 2">二成新</template>
                <template v-else-if="goodsInfo.degree == 3">三成新</template>
                <template v-else-if="goodsInfo.degree == 4">四成新</template>
                <template v-else-if="goodsInfo.degree == 5">五成新</template>
                <template v-else-if="goodsInfo.degree == 6">六成新</template>
                <template v-else-if="goodsInfo.degree == 7">七成新</template>
                <template v-else-if="goodsInfo.degree == 8">八成新</template>
                <template v-else-if="goodsInfo.degree == 9">九成新</template>
                <template v-else-if="goodsInfo.degree == 10">十成新</template>
              </div>
            </div>
            <!-- 联系客服 -->
            <div class="info-item">
              <span class="title letterSpacing">服务</span>
              <div class="service">
                <div class="flex-around-center content-service">
                  <img src="../../assets/images/shop/icon_service.png" alt="" class="my-icon-img">联系客服
                </div>
                <!-- 二维码 -->
                <div class="flex-center-center QR-code">
                  <template
                    v-if="goodsInfo.domain != undefined && goodsInfo.domain != null&& goodsInfo.domain != ''">
                    <img :src="goodsInfo.domain" alt="">
                  </template>
                  <template v-else>
                    <div class="flex-center-center no-data-font">该店铺暂未上传客服二维码</div>
                  </template>
                  <div class="triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品介绍 -->
        <div class="product-introduction">产品介绍</div>
        <div class="product-info">
          <div class="product-info-item">品牌：{{goodsInfo.brand||'-'}}</div>
          <div class="product-info-item">新旧程度：
            <template v-if="goodsInfo.degree == 1">一成新</template>
            <template v-else-if="goodsInfo.degree == 2">二成新</template>
            <template v-else-if="goodsInfo.degree == 3">三成新</template>
            <template v-else-if="goodsInfo.degree == 4">四成新</template>
            <template v-else-if="goodsInfo.degree == 5">五成新</template>
            <template v-else-if="goodsInfo.degree == 6">六成新</template>
            <template v-else-if="goodsInfo.degree == 7">七成新</template>
            <template v-else-if="goodsInfo.degree == 8">八成新</template>
            <template v-else-if="goodsInfo.degree == 9">九成新</template>
            <template v-else-if="goodsInfo.degree == 10">十成新</template>
          </div>
          <div class="product-info-item">所属类目：{{goodsInfo.cateName||'-'}}</div>
          <div class="product-info-item">质保期：{{goodsInfo.qualityTime||'-'}}
            <template v-if="goodsInfo.qualityTimeUnit == 'day'">日</template>
            <template v-else-if="goodsInfo.qualityTimeUnit == 'month'">月</template>
            <template v-else-if="goodsInfo.qualityTimeUnit == 'year'">年</template>
          </div>
        </div>
        <div class="flex-start-center content-div" v-html="goodsInfo.content"></div>
        <div class="flex-column-start-center long-img-div">
          <img class="shop-details-img" :src="item" alt="" v-for="(item,index) in goodsInfo.longImages" :key="index">
        </div>
      </div>
      <!-- 店内推荐 -->
      <store-recommendation class="store-recommendation"></store-recommendation>
    </div>
  </div>
</template>

<script>
  import lookImg from '../../../src/components/lookImg.vue'
  import storeRecommendation from '../../pages/shop/storeRecommendation.vue'
  import {
    goodsDetail
  } from '@/api/goods'
  export default {
    components: {
      storeRecommendation,
      lookImg
    },
    data() {
      return {
        imgActiveIndex: 0, // 当前移动图片的索引值
        imgDistance: 0, // 移动的距离
        allDistance: 0, // 总移动距离
        goodsId: '',
        categoryStr: '',
        bigImgPath: '',
        goodsInfo: {
          goodType: '0', //0:询价商品，1：普通商品
          bigImgPath: '',
          name: '',
          lableList: [''],
          price: '',
          model: '',
          oldNewDegree: '',
          brand: '',
          category: '',
          qualityGuaranteePeriod: ''
        }
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.goodsId = this.$route.query.goodsId
      goodsDetail({
        goodsId: this.goodsId
      }).then(response => {
        this.goodsInfo = response.data
        this.bigImgPath = this.goodsInfo.imageList[0]
        this.categoryStr = ''
        if (this.goodsInfo.category != null && this.goodsInfo.category != '') {
          this.goodsInfo.category = JSON.parse(this.goodsInfo.category).chosedData
          for (var index in this.goodsInfo.category) {
            if (index == 0) {
              this.categoryStr += this.goodsInfo.category[index].label
            } else {
              this.categoryStr += '>' + this.goodsInfo.category[index].label
            }
          }
        } else {
          this.categoryStr = this.goodsInfo.cateName
        }
        this.$store.dispatch('user/setStoreId', this.goodsInfo.storeId)
          .then((response) => {
            console.log("保存当前浏览的店铺ID：", response)
          }).catch(() => {
            console.log("保存当前浏览的店铺ID失败")
          })
        this.$emit("saveStoreId", this.goodsInfo.storeId)
      })
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .shop-detail-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .location {
      width: 1200px;
      height: 34px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .shop-detail-main {
      width: 100%;
      background-color: #fff;
      padding: 10px 0px 30px 0px;
      display: flex;
      justify-content: center;

      .shop-detail-content {
        width: 946px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;

        .shop-detail-img-info {
          display: flex;
        }

        .img-list {
          width: 350px;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;

          .big-img {
            width: 350px;
            height: 350px;
          }

          .img-ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;

            i {
              cursor: pointer;
              font-size: 24px;
              color: #999999;
            }

            ul {
              width: 300px;
              overflow: hidden;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                width: 50px;
                height: 50px;
                margin-right: 12px;
              }
            }
          }
        }

        .goods-info {
          width: 580px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 10px 10px 10px 16px;
          box-sizing: border-box;

          .goods-title {
            margin-bottom: 10px;
          }

          ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 16px;

            li {
              line-height: 14px;
              height: 14px;
              padding: 0px 8px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
            }

            li:first-child {
              padding-left: 0px;
            }

            li+li {
              border-left: 1px solid #666666;
            }
          }

          .info-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 25px;

            .title {
              width: 70px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              margin-right: 4px;
            }

            .letterSpacing {
              letter-spacing: 22px;
            }

            .price {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 700;
              color: #E60000;

              span {
                font-size: 16px;
              }

              .remark {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                  width: 10px;
                  height: 10px;
                  margin-right: 4px;
                }

                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
              }
            }

            .grey-box {
              height: 34px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              padding: 0px 10px;
              background: #F5F5F5;
              border: 1px solid #EEEEEE;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .goods-num {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              .btn-num {
                cursor: pointer;
                width: 36px;
                height: 34px;
                background: #F5F5F5;
                border: 1px solid #EEEEEE;
                box-sizing: border-box;
                font-size: 20px;
              }

              .num {
                width: 70px;
                height: 34px;
                background: #FFFFFF;
                border: 1px solid #EEEEEE;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
              }
            }



            //联系客服
            .service {
              cursor: pointer;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #0065CB;
              position: relative;

              .my-icon-img {
                width: 14px;
                height: 15px;
                margin-right: 8px;
              }

              //联系客服
              .content-service {
                position: relative;
                width: 120px;
                height: 40px;
                background: #40A9FF;
                border: 1px solid #40A9FF;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                margin-right: 27px;
                box-sizing: border-box;
              }

              .QR-code {
                display: none;
                position: absolute;
                top: -25px;
                right: -90px;
                width: 100px;
                height: 100px;
                border: 1px solid #40A9FF;
                box-sizing: border-box;

                img {
                  width: 80px;
                  height: 80px;
                }

                .no-data-font {
                  width: 100%;
                  height: 100%;
                  text-align: center;
                }
              }

              //三角形
              .triangle {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px;
                border-color: transparent transparent transparent #40A9FF;
                transform: rotate(-45deg);
                position: absolute;
                top: 35px;
                left: -6px;
              }

              .triangle::after {
                content: '';
                border-style: solid;
                border-width: 0 9px 9px;
                border-color: transparent transparent transparent #fff;
                position: absolute;
                top: 1px;
                left: -9px;
              }

            }

            .service:hover {
              .QR-code {
                display: flex;
              }
            }
          }
        }

        // 产品介绍
        .product-introduction {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          width: 946px;
          height: 35px;
          background: #EEEEEE;
          padding-left: 10px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .product-info {
          padding: 15px 20px 22px 100px;
          box-sizing: border-box;
          width: 946px;
          height: 71px;
          background: #FFFFFF;
          display: grid;
          grid-template-columns: repeat(2, auto);
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }


        .long-img-div, .content-div {
          width: 750px;
          box-sizing: border-box;
        }

        .shop-details-img {
          width: 100%;
          box-sizing: border-box;
        }

      }

      // 店内推荐
      .store-recommendation {
        width: 210px;
        margin-left: 34px;
        box-sizing: border-box;
      }
    }
  }
</style>
