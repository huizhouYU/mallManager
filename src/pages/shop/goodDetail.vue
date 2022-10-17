<template>
  <div class="shop-detail-box">
    <div class="location">西门子 > 核磁共振 > CT > 西门子Force双源ct</div>
    <div class="shop-detail-main">
      <div class="shop-detail-content">
        <div class="shop-detail-img-info">
          <div class="img-list">
            <img class="big-img" :src="goodsInfo.bigImgPath" alt="">
            <div class="img-ul">
              <span>
                <i class="iconfont">&#xe642;</i>
              </span>
              <ul>
                <li v-for="(item,index) in imgList" :key="index"><img :src="item" alt="" @click="changeImg(item)"></li>
              </ul>
              <span>
                <i class="iconfont">&#xe641;</i>
              </span>
            </div>
          </div>
          <div class="goods-info">
            <!-- 商品名称 -->
            <div class="goods-title">
              {{goodsInfo.name}}
            </div>
            <!-- 卖点：标签 -->
            <ul>
              <li v-for="(item,index) in goodsInfo.lableList">{{item}}</li>
            </ul>
            <!-- 价格 -->
            <div class="info-item">
              <span class="title letterSpacing">价格</span>
              <div class="price">￥<span>{{goodsInfo.price}}</span></div>
            </div>
            <!-- 型号 -->
            <div class="info-item">
              <span class="title letterSpacing">型号</span>
              <div class="grey-box">{{goodsInfo.model}}</div>
            </div>
            <!-- 新旧程度 -->
            <div class="info-item">
              <span class="title">新旧程度</span>
              <div class="grey-box">{{goodsInfo.oldNewDegree}}</div>
            </div>
            <!-- 数量 -->
            <div class="info-item">
              <span class="title letterSpacing">数量</span>
              <div class="goods-num">
                <div class="grey-box btn-num" @click="decNum">-</div>
                <span class="num">{{num}}</span>
                <div class="grey-box btn-num" @click="addNum">+</div>
              </div>
            </div>
            <!-- 立即购买+ 加入购物车 -->
            <div class="info-item">
              <span class="title letterSpacing"></span>
              <div class="btns">
                <div class="buy-now" @click="buyNow">立即购买</div>
                <div class="add-to-cart" @click="addToCart">
                  <img src="../../assets/images/shop/icon_shoppingcart_add.png" alt="">
                  加入购物车
                </div>
              </div>
            </div>
            <!-- 联系客服 -->
            <div class="info-item">
              <span class="title letterSpacing">服务</span>
              <div class="service" @click="contactCustomer">
                <img src="../../assets/images/shop/icon_service.png" alt="">联系客服
              </div>
            </div>
          </div>
        </div>
        <!-- 产品介绍 -->
        <div class="product-introduction">产品介绍</div>
        <div class="product-info">
          <div class="product-info-item">品牌：{{goodsInfo.brand}}</div>
          <div class="product-info-item">新旧程度：{{goodsInfo.oldNewDegree}}</div>
          <div class="product-info-item">所属类目：{{goodsInfo.category}}</div>
          <div class="product-info-item">保质期：{{goodsInfo.qualityGuaranteePeriod}}</div>
        </div>
        <img class="shop-details-img" src="../../assets/images/shop/pic_Details Page.png" alt="">

      </div>
      <!-- 店内推荐 -->
      <store-recommendation class="store-recommendation"></store-recommendation>
    </div>
  </div>
</template>

<script>
  import storeRecommendation from '../../pages/shop/storeRecommendation.vue'
  export default {
    components: {
      storeRecommendation
    },
    data() {
      return {
        imgList: [
          require('../../assets/images/shop/pic_Commodity Details_ct.png'),
          require('../../assets/images/shop/pic_Commodity Details_ct2.jpg'),
          require('../../assets/images/shop/pic_Commodity Details_ct.png'),
          require('../../assets/images/shop/pic_Commodity Details_ct.png'),
          require('../../assets/images/shop/pic_Commodity Details_ct.png')
        ],
        num: 1,
        goodsInfo: {
          bigImgPath: require('../../assets/images/shop/pic_Commodity Details_ct.png'),
          name: '西门子双源大品牌可信赖大品牌可信赖大品牌可信赖大品牌可信赖大品牌可信赖大品牌可信',
          lableList: ['西门子', '核磁', '大品牌'],
          price: '999.99',
          model: 'Force双源ct',
          oldNewDegree: '十成新',
          brand:'西门子',
          category:'联影 > PET CT/ PET MRI > uEXPLORER',
          qualityGuaranteePeriod:'586天'
        }
      }
    },
    methods: {
      changeImg(imgPath) {
        this.goodsInfo.bigImgPath = imgPath
      },
      addNum() {
        this.num += 1;
      },
      decNum() {
        if (this.num > 1) {
          this.num -= 1
        }
      },
      buyNow() {
        alert("立即购买")
      },
      addToCart() {
        alert("加入购物车")
      },
      contactCustomer() {
        alert("联系客服")
      }
    }
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

            i {
              cursor: pointer;
              font-size: 24px;
              color: #999999;
            }

            ul {
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

            li {
              line-height: 14px;
              height: 14px;
              padding: 0px 8px;
              border-right: 1px solid #666666;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
            }

            li:first-child {
              padding-left: 0px;
            }

            li:last-child {
              border-right: none;
            }
          }

          .info-item {
            height: 40px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 6px 0px;

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

            //立即购买+ 加入购物车
            .btns {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              //立即购买
              .buy-now {
                width: 120px;
                height: 40px;
                background: #E60000;
                border: 1px solid #E60000;
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

              //加入购物车
              .add-to-cart {
                box-sizing: border-box;
                width: 166px;
                height: 40px;
                background: #40A9FF;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: 16px;
                  height: 18px;
                  margin-right: 5px;
                }
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

              img {
                width: 14px;
                height: 15px;
                margin-right: 4px;
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
        }
        .product-info{
          padding:15px 20px 22px 100px ;
          box-sizing: border-box;
          width: 946px;
          height: 71px;
          background: #FFFFFF;
          display: grid;
          grid-template-columns: repeat(2,auto);
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }
        .shop-details-img{
          width: 946px;
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
