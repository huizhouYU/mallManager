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
            <div class="know-more">
              <div class="know-more-left">
                <img src="../../assets/images/shop/icon_service_know_more.png" alt="">
                如需价格、产品资料等信息请联系客服
              </div>
              <div class="know-more-right">
                扫一扫咨询
                <i class="iconfont my-icon-font-qr">&#xe635;</i>

                <i class="iconfont my-icon-font-down">&#xe601;</i>
                <i class="iconfont my-icon-font-up">&#xe733;</i>
                <div class="flex-center-center QR-code"
                  v-if="goodsInfo.domain != undefined && goodsInfo.domain != null&& goodsInfo.domain != ''">
                  <img :src="goodsInfo.domain" alt="">
                </div>
                <div class=" QR-code no-service-font" v-else>
                  暂未上传客服二维码
                </div>

              </div>
            </div>
            <div class="line"></div>
            <!-- 型号 -->
            <div class="info-item item-bottom">
              <span class="title box-title">型号：</span>
              <div class="whole-spec-box">
                <div :class="['model-item',{'current-item':item.goodsId == goodsInfo.goodsId}]"
                  v-for="(item,index) in goodsInfo.goodsModelList" :key="index" @click="jumpOtherModel(item.goodsId)">
                  {{item.goodsModel||'-'}}
                </div>
              </div>
            </div>
            <!-- 规格 -->
            <!-- <div class="info-item">
              <span class="title box-title">{{spList[0].name}}：</span>
              <div class="whole-spec-box">
                <div v-for="(item,index) in spList" :key="index" @click="changeSpec(index)"
                  :class="['spec-item',{'current-Spec':index == currentSpec}]">
                  <img :src="item.attrList[0].img" alt="">
                  <span class="spec-value">{{item.value}}</span>
                </div>
              </div>
            </div> -->
            <!-- 属性 -->
            <!-- <div class="info-item">
              <span class="title box-title">属性：</span>
              <div class="whole-spec-box">
                <div v-for="(item,index) in attList" :key="index"
                  :class="['spec-item',{'current-Spec':index == currentAttr}]" @click="changeAttr(index)">
                  <span class="spec-value">{{item.attrStr}}</span>
                </div>
              </div>
            </div> -->
            <!-- 规格+属性 合并 -->
            <div class="info-item" v-show="goodsInfo.openSpecs">
              <span class="title box-title">属性：</span>
              <template v-if="goodsInfo.goodsEntities">
                <div class="whole-spec-box">
                  <div v-for="(item,index) in goodsInfo.goodsEntities" :key="index" @click="changeSpec(index)"
                    :class="['spec-item',{'current-Spec':index == currentSpec}]">
                    <img :src="item.entityImage" alt="" v-if="item.entityImage">
                    <span class="spec-value">{{item.str||"-"}}</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="whole-spec-box">
                  <div class="spec-item">
                    <span class="spec-value">-</span>
                  </div>
                </div>
              </template>

            </div>
          </div>
        </div>
        <!-- 选型对比 -->
        <!-- <div class="product-spec" v-if="goodsInfo.goodsEntities"> -->
        <div class="product-spec" v-if="newGoodsEntities && newGoodsEntities.length>0">
          <span class="title">选型对比</span>
          <!-- 所有商品的goodsEntities拼一起的新的goodsEntities -->
          <el-table :data="newGoodsEntities"
            :cell-style="{'text-align':'left','padding':'5px 20px','min-height':'60px'}"
            :header-cell-style="{background:'#F5F7FA',color: '#333333',textAlign:'center'}" style="width: 100%">
            <el-table-column label="型号" fixed width="214">
              <template slot-scope="scope">
                <div class="my-tab-module">
                  <img :src="scope.row.entityImage" alt="">
                  {{scope.row.goodsModel}}
                </div>
              </template>
            </el-table-column>
            <!-- 规格+属性 -->
            <!-- 采用所以商品goodsSpecs拼接一起的数据后，并去重 -->
            <el-table-column min-width="200" v-for="(item,index) in newGoodsSpecs" :key="index">
              <template slot="header">
                {{item.specName}}
              </template>
              <template slot-scope="scope">
                <div v-for="(spec,index) in scope.row.specText" :key="index">
                  <template v-if="spec.specId == item.specId">
                    {{spec.specValue}}
                  </template>
                </div>
              </template>
            </el-table-column>

            <!-- <el-table-column prop="name" width="160" fixed="right" label="市场价">
              <template slot-scope="scope">
                <template v-if="goodsInfo.saleType == 2">
                  询价
                </template>
                <template v-else>
                  {{scope.row.entityPrice}}
                </template>
              </template>
            </el-table-column> -->
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
                <template v-if="goodsInfo.registerCards">
                  <img :src="item" alt="" v-for="(item,index) in goodsInfo.registerCards" :key="index">
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
      <!-- 相关商品推荐 -->
      <related-recommendation class="store-recommendation" :reGoodList="reGoodList"></related-recommendation>
    </div>
  </div>
</template>

<script>
  import lookImg from '../../../src/components/lookImg.vue'
  import relatedRecommendation from '../../pages/shop/relatedRecommendation.vue' //相关商品推荐
  import productConsult from '../../pages/index/productConsult.vue'
  import {
    goodsDetail,
    relatedRecommendGoods
  } from '@/api/goods'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    components: {
      productConsult,
      relatedRecommendation,
      lookImg
    },
    data() {
      return {
        newGoodsEntities: [],
        newGoodsSpecs: [],
        spList: [],
        currentSpec: 0,
        currentAttr: 0,
        currentObj: '',
        attList: [],
        activeName: 'first',
        goodsId: '',
        categoryStr: '',
        bigImgPath: '',
        reGoodList: [],
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
      }
    },
    mounted() {
      this.goodsId = this.$route.query.goodsId
      this.getGoodsInfo(this.goodsId)
      this.getRecommendGoods()
    },
    methods: {
      getGoodsInfo(goodsId) {
        goodsDetail({
          goodsId
        }).then(response => {
          this.goodsInfo = response.data
          try {
            //保存店铺ID
            this.$store.dispatch('user/setStoreId', this.goodsInfo.storeId)
              .then((response) => {
                // console.log("保存当前浏览的店铺ID：", response)
              }).catch(() => {
                console.log("保存当前浏览的店铺ID失败")
              })
            //保存店铺名称
            this.$store.dispatch('user/setStoreName', this.goodsInfo.store.storeName)
              .then((response) => {
                // console.log("保存当前浏览的店铺ID：", response)
              }).catch(() => {
                console.log("保存当前浏览的店铺名称失败")
              })
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
            if (typeof this.goodsInfo.registerCards == 'string') {
              var registerCards = this.goodsInfo.registerCards
              this.goodsInfo.registerCards = []
              this.goodsInfo.registerCards.push(registerCards)
            }
            if (this.goodsInfo.openSpecs) {
              this.sortSpecAttr()
            } else {
              if (this.goodsInfo.goodsEntities) {
                this.currentObj = this.goodsInfo.goodsEntities[0]
              }
            }
            //合并所有型号商品的goodsEntities和goodsSpecs
            this.mergeData()

          } catch (e) {
            console.log("获取商品详情报错：", e)
          } finally {

          }

        })
      },
      //合并所有型号商品的goodsEntities和goodsSpecs
      mergeData() {
        this.newGoodsEntities = []
        this.newGoodsSpecs = []
        //自己本身商品都没有型号
        if (!this.goodsInfo.goodsModel) {
          return
        }
        //只有它自己一个商品没有关联其他商品 && 本身是单规格商品
        if (this.goodsInfo.goodsModelList.length == 1 && !this.goodsInfo.openSpecs) {
          return
        }
        for (var item of this.goodsInfo.goodsModelList) {
          var param = this.cloneObj(item.goodsEntities)
          for (var paramItem of param) {
            paramItem.goodsModel = item.goodsModel
          }
          this.newGoodsEntities.push(...param)
          this.newGoodsSpecs.push(...JSON.parse(item.goodsSpecs))
        }
        for (let entity of this.newGoodsEntities) {
          entity.specText = JSON.parse(entity.specText)
        }
        //newGoodsSpecs去重
        var specsList = []
        for (var specs of this.newGoodsSpecs) {
          if (specsList.length == 0) {
            specsList.push(specs)
          } else {
            var flag = specsList.findIndex(item => {
              return item.specId == specs.specId
            })
            if (flag < 0) {
              specsList.push(specs)
            }
          }
        }
        this.newGoodsSpecs = specsList
        console.log("合并的数据newGoodsSpecs：", this.newGoodsSpecs)
      },
      searchIndex(name, value) {
        var result = -1
        for (var i = 0; i < this.spList.length; i++) {
          if (this.spList[i].name == name && this.spList[i].value == value) {
            result = i
            return result
          }
        }
        return result
      },
      sortSpecAttr() {
        this.changeGoodsEntity()
        if (this.goodsInfo.goodsEntities && this.goodsInfo.goodsEntities.length > 0) {
          var entity = this.goodsInfo.goodsEntities
          for (var i = 0; i < entity.length; i++) {
            // var item = JSON.parse(entity[i].specText)
            var item = entity[i].specText
            var str = ''
            for (var y = 0; y < item.length; y++) {
              if (y == 0 && item[y].specTypeId == 1) {
                if (this.searchIndex(item[y].specName, item[y].specValue) < 0) {
                  var param = {
                    name: item[y].specName,
                    value: item[y].specValue,
                    attrList: []
                  }
                  this.spList.push(param)
                }
              } else {
                if (str != '') {
                  str = str + "/" + item[y].specValue
                } else {
                  str = item[y].specValue
                }
              }
            }
            var attrItem = {
              attrStr: str,
              price: entity[i].entityPrice,
              img: entity[i].entityImage,
              stock: entity[i].entityStock,
            }
            var x = this.searchIndex(item[0].specName, item[0].specValue)
            this.spList[x].attrList.push(attrItem)
          }
          this.attList = this.spList[0].attrList
          this.currentObj = this.goodsInfo.goodsEntities[this.currentSpec]
        }

        // this.currentObj = this.spList[this.currentSpec].attrList[this.currentAttr]
      },
      changeSpec(index) {
        this.currentSpec = index
        // this.currentAttr = 0
        // this.attList = this.spList[index].attrList
        this.currentObj = this.goodsInfo.goodsEntities[index]
        this.bigImgPath = this.goodsInfo.goodsEntities[index].entityImage
      },
      changeAttr(index) {
        this.currentAttr = index
        // this.currentObj = this.spList[this.currentSpec].attrList[this.currentAttr]
      },
      changeGoodsEntity() {
        if (this.goodsInfo.goodsSpecs) {
          this.goodsInfo.goodsSpecs = JSON.parse(this.goodsInfo.goodsSpecs)
          this.goodsInfo.goodsEntities.forEach((item) => {
            item.specText = JSON.parse(item.specText)
          })
          this.goodsInfo.goodsEntities.forEach((item) => {
            var str = item.specText.map(function(elem) {
              return elem.specValue;
            }).join("/");
            item.str = str
          })
        }
      },
      //查看其他型号的商品详情
      jumpOtherModel(goodsId) {
        this.getGoodsInfo(goodsId)
      },
      getRecommendGoods() {
        //获取推荐商品
        relatedRecommendGoods({
          goodsId: parseInt(this.goodsId),
          limit: 6
        }).then(response => {
          this.reGoodList = response.data
        })
      },
      //深复制对象方法
      cloneObj(obj) {
        var newObj = {};
        if (obj instanceof Array) {
          newObj = [];
        }
        for (var key in obj) {
          var val = obj[key];
          newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
        }
        return newObj;
      },
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
          padding: 20px 20px 50px;
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
          padding: 12px 44px 0px 20px;
          box-sizing: border-box;

          .goods-title {
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
            margin-top: 10px;
          }

          .know-more {
            margin-top: 15px;
            height: 28px;
            background: #FEF5EB;
            width: 100%;
            box-sizing: border-box;
            padding: 6px 10px 6px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            .know-more-left {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;

              img {
                width: 19px;
                height: 16px;
                margin-right: 5px;
              }
            }

            .know-more-right {
              cursor: pointer;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;

              .my-icon-font-qr {
                font-size: 16px;
                margin: 0px 3px;
              }

              .my-icon-font-down {
                display: block;
              }

              .my-icon-font-up {
                display: none;
              }

              .QR-code {
                display: none;
                top: 20px;
                right: -8px;
                position: absolute;
                height: 110px;
                width: 115px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;
                padding: 5px 7px;
                box-sizing: border-box;

                img {
                  width: 100px;
                  height: 100px;
                }
              }
            }

            .know-more-right:hover {
              .my-icon-font-down {
                display: none;
              }

              .my-icon-font-up {
                display: block;
              }

              .QR-code {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .no-service-font {
                font-size: 12px;
              }
            }
          }

          .line {
            width: 100%;
            height: 1px;
            border-bottom: 1px dashed #EEEEEE;
            margin-bottom: 15px;
          }

          .info-item {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 15px;
            width: 100%;

            .title {
              width: 70px;
              font-size: 14px;
              line-height: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              margin-right: 4px;

            }

            .box-title {
              height: 42px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }

            .whole-spec-box {
              flex: 1;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-wrap: wrap;

              .model-item {
                cursor: pointer;
                height: 42px;
                border: 1px solid #F0F0F0;
                background: #F0F0F0;
                border-radius: 4px;
                padding: 15px;
                font-size: 14px;
                line-height: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
                margin-right: 10px;
                margin-bottom: 10px;
              }

              .current-item {
                background: #F3FBFF;
                color: #40A9FF;
                border: 1px solid #40A9FF;
              }

              .spec-item {
                cursor: pointer;
                width: max-content;
                height: 42px;
                background: #F0F0F0;
                border: 1px solid #F0F0F0;
                border-radius: 4px;
                box-sizing: border-box;
                padding: 4px;
                padding-right: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-right: 10px;
                margin-bottom: 10px;

                img {
                  width: 34px;
                  height: 34px;
                  border-radius: 4px;
                }

                .spec-value {
                  flex: 1;
                  box-sizing: border-box;
                  padding-left: 12px;
                  font-size: 14px;
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #333333;
                }
              }

              .current-Spec {
                background: #F3FBFF;
                border-color: #40A9FF;
                box-sizing: border-box;

                .spec-value {
                  color: #40A9FF;
                }
              }
            }


            .grey-box {
              height: 42px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              padding: 0px 10px;
              background: #F0F0F0;
              border: 1px solid #F0F0F0;
              border-radius: 4px;
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
          }

          .item-center {
            align-items: center;
          }

          .item-bottom {
            margin-bottom: 10px;
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

          .my-tab-module {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
              width: 34px;
              height: 34px;
              box-sizing: border-box;
              margin-right: 10px;
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
            flex-direction: column;
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
        height: fit-content;
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
