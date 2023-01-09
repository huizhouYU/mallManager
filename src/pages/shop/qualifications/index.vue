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
    <!-- 证书 -->
    <ul class="qualifications" v-if="storeInfo.certificationList != null && storeInfo.certificationList.length>0">
      <li v-for="(item,index) in storeInfo.certificationList">
        <div class="img-div">
         <div class="img-main-div">
           <!-- <img :src="item" alt=""> -->
           <el-image class="my-img" @click="putLookSrc(item)" :src="item" :preview-src-list="lookSrcList">
            </el-image>
         </div>
        </div>
      </li>
    </ul>
    <div class="flex-center-center no-data-font" v-else>
      资质证书暂未上传~
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
        storeId: '',
        storeInfo: '',
        goodsDataList: [],
        defaultCertificationList: [
          require('../../../assets/images/shop/pic_businessCertificate_default.png'),
          require('../../../assets/images/shop/pic_businessLicense_default.png'),
          require('../../../assets/images/shop/pic_productionLicense_default.png'),
        ],
        lookSrcList: []
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

  // 证书
  .qualifications {
    margin-top: 20px;
    width: 1200px;
    // height: 260px;
    background: #FFFFFF;
    border-top: 2px solid #40A9FF;
    padding: 100px 120px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 25px;

    li {
      width: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
    }

    .img-div {
      width: 280px;
      height: 280px;
      background: #fff;
      padding: 10px 0;
      margin-bottom: 20px;
      box-sizing: border-box;
      border: 1px solid #F5F5F5;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;

      .img-main-div {
        width: 260px;
        height: 260px;
        box-sizing: border-box;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;

        .my-img {
          // width: 178px;
          // height: 260px;
          max-width: 100%;
          max-height: 100%;
          box-sizing: border-box;
          /deep/ .el-image__inner{
            max-width: 260px;
            max-height: 260px;
          }

        }
      }
    }

    span {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
  }
  .no-data-font{
    width: 100%;
    font-size: 14px;
    color: #666;
    margin-top: 20px;
    width: 1200px;
    background: #FFFFFF;
    border-top: 2px solid #40A9FF;
    padding: 100px 120px;
    box-sizing: border-box;
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
    box-sizing: border-box;

  }
</style>
