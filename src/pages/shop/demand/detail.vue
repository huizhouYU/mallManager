<template>
  <div class="demand-detail-content">
    <div class="current-chosed">{{currentChosed.join('>')}}</div>
    <div class="main-box">
      <div class="left-box">
        <div class="title">
          <div class="name">{{demandInfo.title}}
            <img src="../../../assets/images/index/icon_new_red.png" alt="">
          </div>
          <span class="publish-time">发布时间：{{demandInfo.updatedAt || demandInfo.createdAt}}</span>
        </div>
        <!-- 基本信息 -->
        <div class="basic-information" v-if="demandInfo.articleType != 3">
          <div class="public-top-title">
            <img src="../../../assets/images/shop/icon_triangle_right.png" alt="">
            <span>基本信息</span>
          </div>
          <div class="two-lines">
            <ul class="one">
              <li>信息类型</li>
              <li>设备名称</li>
              <li>设备品牌</li>
              <li>设备型号</li>
            </ul>
            <ul class="two">
              <li>
                <template v-if="demandInfo.articleType == 1">求购设备</template>
                <template v-else-if="demandInfo.articleType == 2">项目外包</template>
                <template v-else-if="demandInfo.articleType == 3">灵活兼职</template>
              </li>
              <li>{{demandInfo.equipmentName || '-'}}</li>
              <li>{{demandInfo.brandName|| '-'}}</li>
              <li>{{demandInfo.equipmentType|| '-'}}</li>
            </ul>
          </div>
        </div>
        <!-- 详细描述 -->
        <div class="detailed-description">
          <div class="public-top-title">
            <img src="../../../assets/images/shop/icon_triangle_right.png" alt="">
            <span>详细描述</span>
          </div>
          <div class="description">
            <div class=" ql-editor description-div" v-html="demandInfo.description"></div>
            <div class="flex-column-start-center detail-img-div">
              <img class="shop-details-img" :src="item" alt="" v-for="(item,index) in demandInfo.imageList"
                :key="index">
            </div>
          </div>
        </div>
        <div class="detail-remark">请主动联系我，联系时请说明是在“医界圈”看到的，谢谢！</div>
        <div class="blank-div"></div>
        <!-- 为您找货 -->
        <div class="flex-column-start-start  demand-find-goods">
          <div class="flex-start-center module-title">
            <span class="title">产品咨询</span>
            <div class="spot"></div>
            <span class="remark">填写您的咨询内容，我们将尽快给您答复。</span>
          </div>
          <product-consult class="product-consult" :goodsName="demandInfo.title"></product-consult>
        </div>
      </div>
      <div class="right-box">
        <div class="contact">
          <div class="item">
            <div class="key">联系人:</div>
            <div class="value">{{demandInfo.linkMan}}</div>
          </div>
          <div class="item">
            <div class="key spacing">电话:</div>
            <div class="value">{{demandInfo.linkTel}}</div>
          </div>
          <div class="item">
            <div class="key spacing">地区:</div>
            <div class="value">
              <span v-for="(item,index) in demandInfo.regionList" :key="index" class="span-div">{{item}}</span>
            </div>
          </div>
        </div>
        <!-- 店内相关求购 -->
        <!-- <div class="shop-demand" v-if="isShop"> -->
        <div class="shop-demand">
          <div class="title">店内相关求购</div>
          <ul>
            <li v-for="(item,index) in otherRecommendDemand" class="flex-column-start-start"
              @click="toDemandsDetail(item)">
              <div class="demand-title">
                {{item.title}}
              </div>
              <div class="demand-time">
                {{item.updatedAt || item.createdAt || '-'}}
              </div>
            </li>
          </ul>
        </div>
        <!-- 其他相关求购 -->
        <!-- <div class="shop-demand" v-if="isShop"> -->
        <div class="shop-demand" v-if="false">
          <div class="title">其他相关求购</div>
          <ul>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import productConsult from '../../../pages/index/productConsult.vue'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {
    articleDetail,
    articleList
  } from '@/api/supplyDemand'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      productConsult
    },
    computed: {
      ...mapGetters([
        'token'
      ])
    },
    props: {
      isShop: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        id: '',
        demandInfo: '',
        currentChosed: ['供求信息', '店铺供求', ''],
        otherRecommendDemand: []
      }
    },
    mounted() {
      this.id = this.$route.query.articleId
      this.getData()
    },
    methods: {
      getData() {
        articleDetail({
          id: this.id
        }).then(response => {
          this.demandInfo = response.data
          this.currentChosed[2] = this.demandInfo.title
          try {
            this.$store.dispatch('user/setStoreId', this.demandInfo.storeId)
              .then((response) => {
                // console.log("保存当前浏览的店铺ID：", response)
              }).catch(() => {
                console.log("保存当前浏览的店铺ID失败")
              })
            this.$store.dispatch('user/setStoreName', this.demandInfo.store.storeName)
              .then((response) => {
                // console.log("保存当前浏览的店铺ID：", response)
              }).catch(() => {
                console.log("保存当前浏览的店铺名称失败")
              })
            this.demandInfo.regionList = []
            if (this.demandInfo.region != null && this.demandInfo.region != '') {
              var region = JSON.parse(this.demandInfo.region)
              if (region != '') {
                for (var i in region) {
                  this.demandInfo.regionList.push(region[i].name.join('/'))
                }
              }
            }
          } catch (e) {
            console.log("获取需求详情-梳理地区报错：", e)
          } finally {
            this.getOtherRecommendDemand()
          }

        })
      },
      getOtherRecommendDemand() {
        let param = {
          pageNo: 1,
          pageSize: 6,
          ignoreId: this.id,
          storeId: this.demandInfo.storeId
        }
        articleList(param).then(res => {
          if (res.code == 10000) {
            this.otherRecommendDemand = res.data.list
          }
        })
      },
      toDemandsDetail(item) {
        var newPath = this.$router.resolve({
          path: '/demandDetail',
          query: {
            articleId: item.articleId
          }
        })
        window.open(newPath.href, '_blank')
      }
    }
  }
</script>

<style lang="less" scoped>
  .demand-detail-content {
    width: 1200px;
  }

  .current-chosed {
    margin: 10px 0px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }

  .main-box {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;


    .left-box {
      width: 950px;
      margin-right: 20px;
      background-color: #fff;
      // padding-bottom: 40px;

      .title {
        width: 100%;
        height: 100px;
        padding: 0px 0px 0px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #F6F6F6;

        .name {
          margin-bottom: 15px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          img {
            margin-left: 10px;
            width: 20px;
            height: 14px;
          }
        }

        .publish-time {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }
      }

      // 公共的模块标题
      .public-top-title {
        margin-bottom: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;

        img {
          width: 8px;
          height: 8px;
          margin-right: 8px;
        }
      }

      // 基本信息
      .basic-information {
        width: 100%;
        border-bottom: 1px solid #F6F6F6;
        padding: 20px;

        .two-lines {
          width: 910px;
          border: 1px solid #F5F5F5;
          display: flex;
          flex-direction: column;

          .one {
            background: #F5F5F5;

          }



          .one,
          .two {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
              flex: 1;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              text-align: center;
            }
          }

          .one {
            height: 40px;
          }

          .two {
            padding: 4px 0px;
          }
        }
      }

      // 详细描述
      .detailed-description {
        border-bottom: 1px solid #F6F6F6;
        padding: 20px;

        .description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;

          .description-div {
            width: 800px;
            height: auto;
            margin-bottom: 10px;
          }

          .detail-img-div {
            width: 800px;
            box-sizing: border-box;

            .shop-details-img {
              width: 100%;
              box-sizing: border-box;
            }
          }

        }
      }

      .detail-remark {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        box-shadow: 0px 1px 0px 0px #EEEEEE, 0px -1px 0px 0px #EEEEEE;
      }

      .blank-div {
        height: 16px;
        background-color: #F5F5F5;
        width: 100%;
        margin-top: 40px;
      }

      // 为您找货
      .demand-find-goods {
        // margin-top: 16px;
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
          width: 100%;

          .title {
            width: auto;
            height: auto;
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

    .right-box {
      width: 230px;

      // 联系方式
      .contact {
        width: 100%;
        // height: 200px;
        background-color: #fff;
        margin-bottom: 20px;
        padding: 35px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;

        .item {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .key {
            width: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .value {
            flex: 1;

            .span-div {
              display: block;
            }
          }

          .spacing {
            letter-spacing: 6px;
          }
        }

        .item+.item {
          margin-top: 14px;
        }

        .btn-login {
          margin-top: 10px;
          cursor: pointer;
          width: 190px;
          height: 38px;
          background: #40A9FF;
          border-radius: 6px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

      .shop-demand {
        // height: 294px;
        padding-bottom: 20px;
        background: #FFFFFF;
        margin-bottom: 20px;

        .title {
          height: 50px;
          padding-left: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          border-bottom: 1px solid #EEEEEE;
        }

        ul {
          margin-top: 5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          flex: 1;

          li {
            margin: 10px;
            width: 200px;
            padding-left: 15px;
            box-sizing: border-box;

            .demand-title {
              text-align: left;
              width: 100%;
              font-size: 14px;
              line-height: 14px;
              margin-bottom: 9px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .demand-time {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
              line-height: 12px;
            }
          }

          li:hover {
            .demand-title {
              color: #40A9FF;
            }
          }
        }
      }

    }
  }
</style>
