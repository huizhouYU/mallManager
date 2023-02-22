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
        <div class="remark">请主动联系我，联系时请说明是在“医界圈”看到的，谢谢！</div>

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
        <div class="shop-demand" v-if="false">
          <div class="title">店内相关求购</div>
          <ul>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
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
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {
    articleDetail
  } from '@/api/supplyDemand'
  import {
    mapGetters
  } from 'vuex'
  export default {
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
        currentChosed: ['供求信息', '店铺供求', '']
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
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
            this.$store.dispatch('user/setStoreId', this.demandInfo.storeId)
              .then((response) => {
                console.log("保存当前浏览的店铺ID：", response)
              }).catch(() => {
                console.log("保存当前浏览的店铺ID失败")
              })
            this.$emit("saveStoreId", this.demandInfo.storeId)
          }


        })
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
      padding-bottom: 40px;

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

      .remark {
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
        height: 294px;
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
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

    }
  }
</style>
