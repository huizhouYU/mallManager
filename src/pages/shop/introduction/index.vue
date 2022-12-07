<template>
  <div class="introduction-box">
    <!-- 公司信息 -->
    <div class="company">
      <div class="company-left">
        <span class="company-name">{{storeInfo.storeName}}</span>
        <div class="item">
          <span>联系人：</span>
          <span>{{storeInfo.ownerName}}</span>
        </div>
        <div class="item">
          <span>联系电话：</span>
          <span>{{storeInfo.tel}}</span>
        </div>
        <div class="item-sort">
          <span>店铺分类：</span>
          <span>待补充</span>
        </div>
      </div>
      <div class="company-right">
        <div class="company-right-top">
          <div class="authentication-item">
            <img src="../../../assets/images/shop/icon_enterprise.png" alt="">
            企业已认证
          </div>
          <div class="authentication-item">
            <img src="../../../assets/images/shop/icon_realname.png" alt="">
            实名已认证
          </div>
          <div class="authentication-item">
            <img src="../../../assets/images/shop/icon_iPhone.png" alt="">
            手机已认证
          </div>
        </div>
        <div class="company-right-bottom">
          医界商城提示：该公司身份证、营业资格证等相关证件已上传，并已审核通过。
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="introduction">
      <template v-if="storeInfo.storeBanner != null && storeInfo.storeBanner != ''">
        <img :src="'https://images.weserv.nl/?url='+storeInfo.storeBanner" alt="">
      </template>
      <template v-else>
        <img src="../../../assets/images/shop/pic_shoplogo_default.png" alt="">
      </template>
      <!-- <img src="../../../assets/images/shop/pic_shoplogo_default.png" alt=""> -->
      <span v-html="storeInfo.description">
        <!-- 浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包一级企业，公司注册资本10868万元，净资产达3、7亿多元。下辖上海蔚昕建设发展有限公司等分布在全国各地的九家分公司。集团公司具有建筑装修装饰工程、地基与基础工程、钢结构工程、市政公用工程施工总承包，环保施工等专业承包资质，是一家集建筑、房地产开啊发、建材经营等为一体的大型建筑企业，可承揽工业、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。 -->
      </span>
    </div>
    <!-- 店内推荐 -->
    <div class="shop-recommend">
      <div>店内推荐</div>
      <good-item :goodsList="goodsDataList"></good-item>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../../pages/allGoods/goodItem.vue'
  import {
    mapGetters
  } from 'vuex'
  import {
    goodsList
  } from '@/api/goods'
  import {
    storeDetail
  } from '@/api/store'
  export default {
    computed: {
      ...mapGetters([
        'currentLookStoreId'
      ])
    },
    components: {
      goodItem
    },
    data() {
      return {
        storeInfo: '',
        goodsDataList: [],
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        storeDetail({
          storeId: this.currentLookStoreId
        }).then(response => {
          console.log("获取店铺详情：", response)
          this.storeInfo = response.data
        })
        var page = {
          pageNo: 1,
          pageSize: 10,
          storeId: this.currentLookStoreId
        }
        goodsList(page).then(response => {
          console.log("获取店铺内商品列表:", response)
          this.goodsDataList = response.data.list
        })
      },

    }
  }
</script>

<style lang="less" scoped>
  .introduction-box {
    width: 1200px;
  }

  .company {
    margin-top: 20px;
    width: 1200px;
    height: 185px;
    background: #FFFFFF;
    border-top: 2px solid #40A9FF;
    padding: 40px 120px 45px 110px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-self: center;

    .company-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100px;

      .company-name {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }

      .item {
        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }
      }

      .item-sort {
        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #696969;
        }
      }
    }

    .company-right {
      width: 550px;
      height: 100px;
      border: 1px solid #EEEEEE;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 10px 20px 15px 20px;

      .company-right-top {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .authentication-item {
          display: flex;
          justify-content: flex-start;
          align-self: center;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #333333;
          margin-right: 50px;

          img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }
        }

        .authentication-item:last-child {
          margin-right: 0px;
        }
      }

      .company-right-bottom {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
      }
    }
  }

  // 公司简介
  .introduction {
    margin-top: 20px;
    width: 1200px;
    height: 260px;
    background: #FFFFFF;
    border-top: 2px solid #40A9FF;
    padding: 30px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;

    img {
      width: 200px;
      height: 180px;
      margin-top: 10px;
      margin-right: 16px;
    }

    span {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 24px;
    }
  }

  // 店内推荐
  .shop-recommend {
    margin-top: 20px;
    width: 1200px;
    // height: 260px;
    background: #FFFFFF;
    border-top: 2px solid #40A9FF;
    padding: 12px 15px 25px 15px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;

  }
</style>
