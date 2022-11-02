<template>
  <div class="introduction-box">
    <!-- 公司信息 -->
    <div class="company">
      <div class="company-left">
        <span class="company-name">迅即网络科技有限公司</span>
        <div class="item">
          <span>联系人：</span>
          <span>霍先生</span>
        </div>
        <div class="item">
          <span>联系电话：</span>
          <span>189 5687 2499</span>
        </div>
        <div class="item-sort">
          <span>店铺分类：</span>
          <span>医用冷疗|低温|冷藏设备及器具</span>
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
      <ul class="qualifications">
        <li>
          <div class="img-div">
            <img src="../../../assets/images/shop/pic_businessLicense_default.png" alt="">
          </div>
          <span>营业执照</span>
        </li>
        <li>
          <div class="img-div">
            <img src="../../../assets/images/shop/pic_businessCertificate_default.png" alt="">
          </div>
          <span>经营许可证</span>
        </li>
        <li>
          <div class="img-div">
            <img src="../../../assets/images/shop/pic_productionLicense_default.png" alt="">
          </div>
          <span>生产许可证</span>
        </li>
      </ul>
    <!-- 店内推荐 -->
    <div class="shop-recommend">
      <div>店内推荐</div>
      <good-item></good-item>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../../pages/allGoods/goodItem.vue'
  export default{
    components:{
      goodItem
    }
  }
</script>

<style lang="less" scoped>
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
    display: flex;
    justify-content: space-around;
    align-self: center;
  li{
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
    .img-div{
      width: 280px;
      height: 280px;
      background: #FFFFFF;
      padding: 10px 0;
      margin-bottom: 20px;
      box-sizing: border-box;
      border: 1px solid #F5F5F5;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 178px;
        height: 260px;
      }
    }

    span{
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
  }
  // 店内推荐
  .shop-recommend{
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
