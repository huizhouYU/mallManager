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
          <span>{{storeInfo.categoryName}}</span>
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
      <template v-if="storeInfo.storeLogo != null && storeInfo.storeLogo != ''">
        <img :src="storeInfo.storeLogo" alt="">
      </template>
      <template v-else>
        <img src="../../../assets/images/shop/pic_shoplogo_default.png" alt="">
      </template>
      <span v-html="storeInfo.description">
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
    goodsList
  } from '@/api/goods'
  import {
    storeDetail
  } from '@/api/store'
  export default {
    components: {
      goodItem
    },
    data() {
      return {
        storeId:'',
        storeInfo: '',
        goodsDataList: [],
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      getData() {
        storeDetail({
          storeId: this.storeId
        }).then(response => {
          this.storeInfo = response.data
        })
        var page = {
          pageNo: 1,
          pageSize: 10,
          storeId: this.storeId
        }
        goodsList(page).then(response => {
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
    min-height: 260px;
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
