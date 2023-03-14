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
            <div class="goods-tag" v-if="goodsInfo.tagList">
              {{goodsInfo.tagList[0]}}
            </div>
            <!-- <ul>
              <li>{{goodsInfo.brand}}</li>
              <li v-for="(item,index) in goodsInfo.tagList" v-show=" goodsInfo.tagList.length>0">{{item}}</li>
            </ul> -->
            <!-- 价格 -->
            <div class="info-item">
              <span class="title">价格：</span>

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
              <span class="title">商品编码：</span>
              <div class="grey-box">{{goodsInfo.goodsPn||'-'}}</div>
            </div>

            <!-- 联系客服 -->
            <div class="info-item">
              <span class="title ">联系客服：</span>
              <div class="flex-center-center QR-code"
                v-if="goodsInfo.domain != undefined && goodsInfo.domain != null&& goodsInfo.domain != ''">
                <img :src="goodsInfo.domain" alt="">
              </div>
              <div class="no-service-font" v-else>-</div>
                <!--  <div class="flex-around-center content-service">
                  <img src="../../assets/images/shop/icon_service.png" alt="" class="my-icon-img">联系客服
                </div> -->
                <!-- 二维码 -->

            </div>
          </div>
        </div>
        <!-- 选型对比 -->
        <div class="product-spec">
          <span class="title">选型对比</span>
          <el-table :data="tableData" :header-cell-style="{background:'#F5F7FA',color: '#333333',textAlign:'center'}"
            style="width: 100%">
            <el-table-column prop="date" label="型号" fixed width="214">
            </el-table-column>
            <el-table-column prop="address" label="200">
              <template slot="header">
                <div class="spec-attr-title">
                  <span class="attr-item">
                    地址
                  </span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="200">
              <template slot="header">
                <div class="spec-attr-title">
                  <span class="attr-item">
                    地址
                  </span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" width="160" fixed="right" label="市场价">
              <template slot-scope="scope">
                <div class="font-center">{{scope.row.name}}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="product-info">
          <el-tabs v-model="activeName">
            <el-tab-pane label="商品介绍" name="first">
              <div class="ql-editor content-div" v-html="goodsInfo.content"></div>
              <div class="flex-column-start-center long-img-div">
                <img class="shop-details-img" :src="item" alt="" v-for="(item,index) in goodsInfo.longImages"
                  :key="index">
              </div>
            </el-tab-pane>
            <el-tab-pane label="注册证" name="second">
              <div class="register-cart-div">
                <template v-if="goodsInfo.registerCard">
                  <img :src="goodsInfo.registerCard" alt="">
                </template>
                <span v-else class="no-register-cart">
                  暂未上传商品注册证
                </span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- 为您找货 -->
        <div class="flex-column-start-start  find-goods">
          <div class="flex-start-center module-title">
            <span class="title">产品咨询</span>
            <div class="spot"></div>
            <span class="remark">填写您的咨询内容，我们将尽快给您答复。</span>
          </div>
          <product-consult class="product-consult" :goodsName="goodsInfo.goodsName"></product-consult>
        </div>
      </div>
      <!-- 店内推荐 -->
      <store-recommendation class="store-recommendation" :adsList="adsList"></store-recommendation>
    </div>
  </div>
</template>

<script>
  import lookImg from '../../../src/components/lookImg.vue'
  import storeRecommendation from '../../pages/shop/storeRecommendation.vue'
  import productConsult from '../../pages/index/productConsult.vue'
  import {
    goodsDetail
  } from '@/api/goods'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    components: {
      productConsult,
      storeRecommendation,
      lookImg
    },
    data() {
      return {
        activeName: 'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
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
        },
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
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230112090158.jpg',
          }
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.goodsId = this.$route.query.goodsId
      goodsDetail({
        goodsId: this.goodsId
      }).then(response => {
        this.goodsInfo = response.data
        try {
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
        } catch (e) {
          console.log("获取商品详情报错：", e)
        } finally {
          this.$store.dispatch('user/setStoreId', this.goodsInfo.storeId)
            .then((response) => {
              console.log("保存当前浏览的店铺ID：", response)
            }).catch(() => {
              console.log("保存当前浏览的店铺ID失败")
            })
          this.$emit("saveStoreId", this.goodsInfo.storeId)
        }

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
      padding: 0px 0px 30px 0px;
      display: flex;
      justify-content: center;

      .shop-detail-content {
        width: 885px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;

        .shop-detail-img-info {
          width: 100%;
          display: flex;
          padding: 20px;
          background-color: #fff;
          box-sizing: border-box;
        }

        .img-list {
          width: 350px;
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
          padding: 12px 74px 0px 20px;
          box-sizing: border-box;

          .goods-title {
            margin-bottom: 10px;
            font-size: 18px;
            line-height: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
          }

          .goods-tag {
            font-size: 14px;
            line-height: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            margin-bottom: 22px;
          }


          .info-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 25px;

            .title {
              width: 70px;
              font-size: 14px;
              line-height: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              margin-right: 4px;
            }

            .price {
              font-size: 12px;
              line-height: 12px;
              font-family: Microsoft YaHei;
              font-weight: 700;
              color: #E60000;

              span {
                font-size: 16px;
                line-height: 16px;
              }

              .remark {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;

                img {
                  width: 10px;
                  height: 10px;
                  margin-right: 4px;
                }


              }
            }

            .grey-box {
              height: 34px;
              font-size: 14px;
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
            .QR-code {
              width: 80px;
              height: 80px;
              box-sizing: border-box;

              img {
                width: 80px;
                height: 80px;
              }

            }
            .no-service-font {
              height: 34px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              padding: 0px 10px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }

        // 选型对比
        .product-spec {
          margin-top: 12px;
          background-color: #fff;
          padding: 20px 28px;
          box-sizing: border-box;
          width: 100%;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          .title {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #000000;
            line-height: 18px;
            margin: 10px 0px;
          }

          .font-center {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .spec-attr-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .attr-item {
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 100px;
            }
          }

          //改变滚动条样式  start
          /deep/.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar {
            padding: 2px 0px;
            width: 2px;
            height: 6px;
          }

          /deep/.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-thumb:hover {
            background: #666;
          }

          /deep/.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-thumb {
            border-radius: 10px;
            // box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
            background: #ccc;
          }

          /deep/ .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-track {
            // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
            border-radius: 0;
            background: rgba(0, 0, 0, 0);
          }

          //改变滚动条样式  end
          .el-table {
            border-radius: 10px;
            border: 1px solid #ebeef5;
          }

          /deep/ .el-table__fixed,
          /deep/.el-table__fixed-right {
            // height: calc(100% - 7px) !important;
            height: -webkit-fill-available !important;
          }

          /deep/ .el-table__fixed {
            border-top-left-radius: 10px;
            border-right: 1px solid #ebeef5;
          }

          /deep/.el-table__fixed-right {
            border-top-right-radius: 10px;
            border-left: 1px solid #ebeef5;
          }
        }

        // 商品介绍+注册证
        .product-info {
          margin-top: 16px;
          background-color: #fff;
          width: 100%;

          .long-img-div,
          .content-div {
            height: auto;
            width: 750px;
            box-sizing: border-box;
          }

          .shop-details-img {
            width: 100%;
            box-sizing: border-box;
          }

          /deep/ .el-tabs__header {
            padding-left: 28px;
            border-bottom: 2px solid #e4e7ed;

          }

          /deep/ .el-tabs__item {
            height: 54px;
            line-height: 54px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }

          /deep/ .el-tabs__item.is-active {
            color: #40A9FF;
          }

          /deep/ .el-tabs__nav-wrap:after {
            height: 1px;
          }

          /deep/ .el-tabs__content {
            padding: 20px 70px 50px;
          }

          .register-cart-div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            box-sizing: border-box;

            .no-register-cart {
              font-size: 14px;
              color: #333;
            }

            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }

        // 为您找货
        .find-goods {
          margin-top: 16px;
          width: 100%;
          box-sizing: border-box;
          background: #FFFFFF;
          border-radius: 10px;
          padding: 20px;

          .product-consult {
            flex: 1;
            width: 100%;
            box-sizing: border-box;
          }

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
        }



      }

      // 店内推荐
      .store-recommendation {
        width: 295px;
        margin-left: 20px;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
</style>
