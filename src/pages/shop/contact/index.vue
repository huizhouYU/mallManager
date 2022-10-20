<template>
  <div class="contact-box">
    <div class="contact-info">
      <div class="contact-info-left">
        <div class="contact-info-item">
          <span class="item-left">霍先生</span>
          <span class="phone">189 5687 2499</span>
        </div>
        <div class="contact-info-item">
          <span class="">哈哈哈哈哈哈无限公司</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">电话</span>
          <span class="">0551-59862689</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">QQ</span>
          <span class="">23546891251</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">地址</span>
          <span class="">四川 成都 哈哈区 哈哈路18号发财广场8栋888室 拷贝</span>
        </div>

      </div>
      <div class="contact-info-right"></div>
    </div>
    <!-- 店内推荐 -->
    <div class="shop-recommend">
      <span>店内推荐</span>
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
  .contact-box {
    padding-top: 20px;

    .contact-info {
      width: 1200px;
      height: 380px;
      box-sizing: border-box;
      background: #FFFFFF;
      border-top: 2px solid #40A9FF;
      padding: 40px 80px;
      display: flex;
      justify-content: space-between;
      align-self: center;

      .contact-info-left {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .contact-info-item {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 15px;

          .item-left {
            width: 50px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            margin-right: 22px;
          }

          .phone {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
        }
      }

      .contact-info-right {
        width: 650px;
        height: 300px;
        border: 1px solid #eee;
      }
    }

    // 店内推荐
    .shop-recommend {
      width: 100%;
      background-color: #fff;
      margin-top: 20px;
      padding: 12px 14px 25px 14px;
      border-top: 2px solid #40A9FF;
      span{
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }
  }
</style>
