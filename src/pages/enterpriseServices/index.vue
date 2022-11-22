<template>
  <div class="main-content">
    <div class="banner">
      <img src="../../assets/images/accessory/pic_banner_1250-500.png" alt="">
    </div>
    <enterprise-services-item class="enterprise-services-item"></enterprise-services-item>
  </div>
</template>

<script>
  import enterpriseServicesItem from '../enterpriseServices/enterpriseServicesItem.vue' //企业服务单个数据
  export default {
    components: {
      enterpriseServicesItem
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .main-content {
    width: 1200px;
    margin: auto;
    margin-top: 25px;
  }

  .banner {
    width: 100%;
    height: 90px;
    margin: 0px 0px 32px 0px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .enterprise-services-item {
    width: 1200px;
  }
</style>
